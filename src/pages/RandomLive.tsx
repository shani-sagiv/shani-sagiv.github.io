// src/pages/RandomLive.tsx  (או הנתיב שבו אתה שם את הקומפוננטה)
import React, { useEffect, useMemo, useState, useCallback, useRef } from "react";
import { getUserName } from "helpers/localStorage.helpers";
import classnames from "classnames";
import { Button } from "components/Button";
import RainbowText from "AnimationComponents/RainbowText/RainbowText";
import { getAllLocationsImages } from "helpers/locations.helpers";
import { getRandomNumbers } from "helpers/dateHelpers";
import "./Random/Random.scss";

import {
  doc, setDoc, updateDoc, getDoc, onSnapshot,
  collection, serverTimestamp, addDoc, query, where, orderBy, limit
} from "firebase/firestore";
import { db } from "../firebase";

type ImagesOptions = { images: string[]; key: string; countryName: string; };

const OPTIONS_COUNT = 7;

type Player = { uid: string; name: string; score?: number };
type RoomDoc = {
  state: "waiting" | "playing";
  round: number;
  question?: { imageUrl: string; answerCountry: string; options: string[] };
  players?: { A?: Player; B?: Player };
  // שיניתי ל-| null כדי שנוכל לאפס ל-null בלי שגיאה
  lastWinnerName?: string | null;
  lastAnswerCountry?: string | null;
  updatedAt?: any;
};

type LobbyRoom = { id: string; data: RoomDoc };

function getClientUid() {
  let u = localStorage.getItem("live_uid");
  if (!u) {
    u = "u_" + Math.random().toString(36).slice(2);
    localStorage.setItem("live_uid", u);
  }
  return u;
}

const RandomLive: React.FC = () => {
  const [optionsWithImages, setOptionsWithImages] = useState<ImagesOptions[] | null>(null);
  const [dests, setDests] = useState<string[]>([]);

  const [randomDestinations, setRandomDestinations] = useState<string[]>([]);
  const [answerImageUrl, setAnswerImageUrl] = useState<string>("");
  const [answerCountry, setAnswerCountry] = useState<string>("");

  const [destinationAnswered, setDestinationAnswered] = useState(false);
  const [failedIndexes, setFailedIndexes] = useState<number[]>([]);

  const [roomId, setRoomId] = useState<string>("");
  const [room, setRoom] = useState<RoomDoc | null>(null);
  const [joined, setJoined] = useState(false);
  const uid = useMemo(getClientUid, []);
 const usernameRef = useRef<string>(getUserName() || "אורח");
 const questionKeyRef = useRef<string | null>(null);
 const buildQuestionKey = (d: RoomDoc | null) =>
   d?.round && d?.question?.imageUrl ? `${d.round}::${d.question.imageUrl}` : "";

  const [lobby, setLobby] = useState<LobbyRoom[]>([]);

  useEffect(() => {
    const { destsOptions, optionsWithImages: ow } = getAllLocationsImages();
    setOptionsWithImages(ow);
    setDests(destsOptions);
  }, []);

  useEffect(() => {
    if (joined && roomId) return;
    const roomsCol = collection(db, "rooms");
    const qy = query(roomsCol, orderBy("updatedAt", "desc"), limit(20));

const unsub = onSnapshot(qy, (snap) => {
  const rows = snap.docs
    .map((d) => ({ id: d.id, data: d.data() as RoomDoc }))
    .filter(({ data }) => {
      const playersCount =
        Number(Boolean(data.players?.A)) + Number(Boolean(data.players?.B));
      // מציגים רק חדרים עם שחקן אחד ובמצב waiting
      return playersCount === 1 && data.state === "waiting";
    });
  setLobby(rows);
});

    return unsub;
  }, [joined, roomId]);

  useEffect(() => {
  if (!roomId) return;
  const ref = doc(db, "rooms", roomId);

  const unsub = onSnapshot(ref, (snap) => {
    if (!snap.exists()) { setRoom(null); return; }
    const data = snap.data() as RoomDoc;
    setRoom(data);

    // תמיד מעדכנים את התוכן שמוצג
    if (data.question) {
      setRandomDestinations(data.question.options || []);
      setAnswerCountry(data.question.answerCountry || "");
      setAnswerImageUrl(data.question.imageUrl || "");
    } else {
      setRandomDestinations([]);
      setAnswerCountry("");
      setAnswerImageUrl("");
    }

    // איפוס רק כשהשאלה באמת התחלפה (round+imageUrl)
    const newKey = buildQuestionKey(data);
    if (newKey && newKey !== questionKeyRef.current) {
      questionKeyRef.current = newKey;
      setDestinationAnswered(false);
      setFailedIndexes([]);
      return; // אין צורך להמשיך
    }

    // אם המשחק עבר ל-waiting (מישהו כבר ניצח) – חושפים תשובה, לא מאפסים טעויות
    if (data.state !== "playing" && answerCountry) {
      setDestinationAnswered(true);
    }
  });

  return unsub;
}, [roomId, answerCountry]);


  const createRoom = useCallback(async () => {
    if (!uid) return;
    const id = "r_" + Math.random().toString(36).slice(2, 8);
    const ref = doc(db, "rooms", id);
    await setDoc(ref, {
      state: "waiting",
      round: 0,
 players: { A: { uid, name: usernameRef.current || "שחקן א", score: 0 } },
      updatedAt: serverTimestamp(),
    } as RoomDoc);
    setRoomId(id);
    setJoined(true);
  }, [uid]);

  const joinRoom = useCallback(async (targetId?: string) => {
    const id = (targetId ?? roomId).trim();
    if (!id) return;
    const ref = doc(db, "rooms", id);
    const snap = await getDoc(ref);
    if (!snap.exists()) { alert("חדר לא נמצא"); return; }
    const data = snap.data() as RoomDoc;

    if (!data.players?.A) {
 await updateDoc(ref, { "players.A": { uid, name: usernameRef.current || "שחקן א", score: 0 }, updatedAt: serverTimestamp() });
    } else if (!data.players?.B) {
 await updateDoc(ref, { "players.B": { uid, name: usernameRef.current || "שחקן ב", score: 0 }, updatedAt: serverTimestamp() });
    }
    setRoomId(id);
    setJoined(true);
  }, [roomId, uid]);

  // חשוב: אין "guest" כדי לא לשבור אינדוקס. אם לא A/B → null.
  const iAm = useMemo<"A" | "B" | null>(() => {
    if (!room?.players) return null;
    if (room.players.A?.uid === uid) return "A";
    if (room.players.B?.uid === uid) return "B";
    return null;
  }, [room?.players, uid]);

  const startRound = useCallback(async () => {
    if (!roomId || !optionsWithImages || !dests.length) return;

    const randomIndexes: number[] = getRandomNumbers(optionsWithImages.length - 1, OPTIONS_COUNT + 1);
    const randomPickId: number = randomIndexes.pop() as number;
    const currentAnswer = optionsWithImages[randomPickId];

    const tempDests = dests.filter((d) => d !== currentAnswer.countryName);
    const randomDestIndexes: number[] = getRandomNumbers(tempDests.length - 1, OPTIONS_COUNT);

    const options = [
      ...randomDestIndexes.map((i) => tempDests[i]),
      currentAnswer.countryName,
    ].sort(() => Math.random() - 0.5);

    const imageUrl = currentAnswer.images[Math.floor(Math.random() * currentAnswer.images.length)];
    const nextRound = (room?.round || 0) + 1;

    await updateDoc(doc(db, "rooms", roomId), {
      state: "playing",
      round: nextRound,
      question: { imageUrl, answerCountry: currentAnswer.countryName, options },
      // עכשיו הטייפ מאפשר null; לחלופין אפשר פשוט להשמיט את שני השדות האלו
      lastWinnerName: null,
      lastAnswerCountry: null,
      updatedAt: serverTimestamp(),
    } as Partial<RoomDoc>);

    await setDoc(doc(collection(db, "rooms", roomId, "rounds"), String(nextRound)), {
      round: nextRound,
      startedAt: serverTimestamp(),
      question: { imageUrl, answerCountry: currentAnswer.countryName, options },
      winnerUid: null,
      winnerName: null,
      endedAt: null,
      scoresAtStart: {
        A: room?.players?.A?.score ?? 0,
        B: room?.players?.B?.score ?? 0,
      },
    });
  }, [roomId, optionsWithImages, dests, room?.round, room?.players]);

  const handleOptionClick = async (dest: string, idx: number) => {
    if (!roomId || !room) return;
    const correct = dest === answerCountry;

    // מסלול עדכון נקודות לפי הצד
    const mePath =
      iAm === "A" ? "players.A.score" :
      iAm === "B" ? "players.B.score" : null;

    // קריאה בטוחה לניקוד נוכחי
    const myScoreNow =
      iAm === "A" ? (room.players?.A?.score ?? 0) :
      iAm === "B" ? (room.players?.B?.score ?? 0) : 0;

    if (!correct) {
      setFailedIndexes((prev) => (prev.includes(idx) ? prev : [...prev, idx]));
      if (mePath) {
        await updateDoc(doc(db, "rooms", roomId), {
          [mePath]: myScoreNow - 1,
          updatedAt: serverTimestamp(),
        } as any);
      }
      return;
    }

    setFailedIndexes([]);
    setDestinationAnswered(true);

    const winnerName =
      iAm === "A" ? room?.players?.A?.name :
      iAm === "B" ? room?.players?.B?.name : "מישהו";
    const winnerUid =
      iAm === "A" ? room?.players?.A?.uid :
      iAm === "B" ? room?.players?.B?.uid : "unknown";

    // לחשב נקודות סיום לשני הצדדים לצורך rounds/scoresAtEnd
    const aScoreEnd = iAm === "A" ? (room.players?.A?.score ?? 0) + 2 : (room.players?.A?.score ?? 0);
    const bScoreEnd = iAm === "B" ? (room.players?.B?.score ?? 0) + 2 : (room.players?.B?.score ?? 0);

    const roomUpdates: any = {
      state: "waiting",
      lastWinnerName: winnerName || "מישהו",
      lastAnswerCountry: answerCountry,
      updatedAt: serverTimestamp(),
    };
    if (mePath) {
      roomUpdates[mePath] = myScoreNow + 2;
    }
    await updateDoc(doc(db, "rooms", roomId), roomUpdates);

    const roundKey = String(room.round);
    await updateDoc(doc(collection(db, "rooms", roomId, "rounds"), roundKey), {
      winnerUid,
      winnerName,
      endedAt: serverTimestamp(),
      scoresAtEnd: { A: aScoreEnd, B: bScoreEnd },
    });
  };

  const inRoom = joined && !!roomId;
  const canStart = inRoom && room?.state !== "playing";

  const playersList: Player[] = useMemo(() => {
    const res: Player[] = [];
    if (room?.players?.A) res.push(room.players.A);
    if (room?.players?.B) res.push(room.players.B);
    return res;
  }, [room?.players]);

  return (
    <div className="random-image" style={{ width: "100%", maxWidth: 980, margin: "50px auto" }}>
      {!inRoom && (
        <>
          <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
            <Button onClick={createRoom}>צור חדר</Button>
            <input
              placeholder="room id"
              value={roomId}
              onChange={(e) => setRoomId(e.target.value.trim())}
              style={{ flex: 1 }}
            />
            <Button onClick={() => joinRoom()} disabled={!roomId}>הצטרף לפי ID</Button>
          </div>

          <div style={{ marginTop: 16 }}>
            <h3 style={{ marginBottom: 8 }}>חדרים פעילים</h3>
            {lobby.length === 0 && <div style={{ opacity: 0.6 }}>אין כרגע חדרים…</div>}
            <div style={{ display: "grid", gap: 8 }}>
              {lobby.map(({ id, data }) => (
                <div key={id} style={{ border: "1px solid #eee", borderRadius: 8, padding: 10, display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ minWidth: 110 }}><b>חדר:</b> {id}</div>
                  <div style={{ minWidth: 110 }}><b>מצב:</b> {data.state}</div>
                  <div style={{ minWidth: 220 }}>
                    <b>שחקנים:</b>{" "}
                    {(data.players?.A?.name || "—")} &nbsp;/&nbsp; {(data.players?.B?.name || "—")}
                  </div>
                  <div style={{ marginInlineStart: "auto" }}>
                    <Button onClick={() => joinRoom(id)}>הצטרף</Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {inRoom && (
        <>
          <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 8 }}>
            <div><b>חדר:</b> {roomId}</div>
            <div style={{ marginInlineStart: "auto" }}>
              {canStart && <Button onClick={startRound}>התחל סיבוב / עוד סיבוב</Button>}
            </div>
          </div>

          <div style={{
            display: "flex", gap: 12, alignItems: "center",
            padding: "8px 10px", border: "1px solid #eee", borderRadius: 8, marginBottom: 10, flexWrap: "wrap"
          }}>
            <b>שחקנים:</b>
            {["A","B"].map((side) => {
              const p = side === "A" ? room?.players?.A : room?.players?.B;
              if (!p) return (
                <span key={side} style={{ padding: "2px 8px", borderRadius: 999, background: "#fafafa", border: "1px solid #ddd" }}>
                  {side}: —
                </span>
              );
              const isMe = p.uid === uid;
              return (
                <span key={p.uid} style={{
                  padding: "2px 10px",
                  borderRadius: 999,
                  background: isMe ? "#e6f7ff" : "#f5f5f5",
                  border: "1px solid #ddd"
                }}>
                  {side}: {p.name} • נק׳ {p.score ?? 0} {isMe ? "• אתה" : ""}
                </span>
              );
            })}
          </div>
        </>
      )}

      {answerImageUrl && (
        <img
          src={answerImageUrl}
          alt={answerCountry}
          style={{ height: "60vh", width: "100%", objectFit: "cover", paddingBottom: 10, borderRadius: 8 }}
        />
      )}

      {randomDestinations.length > 0 && !destinationAnswered ? (
        <div className="flex-row" style={{ flexWrap: "wrap", justifyContent: "space-around" }}>
          {randomDestinations.map((dest, i) => {
            const isWrong = failedIndexes.includes(i);
            return (
              <button
                key={`${dest}_${i}`}
                className={classnames("option", { wrong: isWrong })}
                onClick={() => handleOptionClick(dest, i)}
                disabled={isWrong}
                style={{ cursor: isWrong ? "not-allowed" : "pointer", outline: "none", border: "none", background: "transparent" }}
              >
                {dest}
              </button>
            );
          })}
        </div>
      ) : (
        answerCountry && (
          <div style={{ textAlign: "center", margin: "8px 0 12px" }}>
            <RainbowText text={"היידה"} />
            <div style={{ marginTop: 6, fontSize: 14, opacity: 0.8 }}>
              התשובה: <b>{answerCountry}</b>
              {room?.lastWinnerName && <> • המנצח: <b>{room.lastWinnerName}</b></>}
            </div>
            {inRoom && room?.state === "waiting" && (
              <div style={{ marginTop: 10 }}>
                <Button onClick={startRound}>עוד סיבוב ▶</Button>
              </div>
            )}
          </div>
        )
      )}
    </div>
  );
};

export default RandomLive;
