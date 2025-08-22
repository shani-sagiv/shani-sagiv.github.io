import { db } from "./firebase"; // עדכן נתיב לקובץ firebase שלך
import { doc, runTransaction, serverTimestamp } from "firebase/firestore";

// הופך כינוי לשם מסמך חוקי
function docIdFromNick(nick: string) {
  return (nick || "unknown")
    .trim()
    .toLowerCase()
    .replace(/[.#$[\]/]/g, "_")
    .slice(0, 200) || "unknown";
}

// מנסה להשיג מיקום באישור המשתמש
async function getGeolocation(): Promise<{ lat: number; lng: number; accuracy: number } | null> {
  if (!("geolocation" in navigator)) return null;
  return new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        resolve({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
          accuracy: pos.coords.accuracy,
        });
      },
      () => resolve(null), // במקרה של סירוב או שגיאה
      { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
    );
  });
}

// אוסף מידע זמין מהמכשיר
async function collectDeviceInfo() {
  const nav: any = navigator;
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const url = new URL(window.location.href);

  const utm = Object.fromEntries(
    ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"]
      .map((k) => [k, url.searchParams.get(k) || undefined])
      .filter(([, v]) => v)
  );

  let battery: any = null;
  try { battery = nav.getBattery ? await nav.getBattery() : null; } catch {}
  const connection: any = nav.connection || nav.webkitConnection || nav.mozConnection || null;

  // מיקום אם המשתמש אישר
  const geo = await getGeolocation();

  return {
    createdAt: serverTimestamp(),
    language: navigator.language,
    languages: navigator.languages,
    timeZone: tz,
    tzOffset: new Date().getTimezoneOffset(),
    userAgent: navigator.userAgent,
    platform: navigator.platform,
    doNotTrack: nav.doNotTrack ?? null,
    screen: {
      width: window.screen?.width,
      height: window.screen?.height,
      availWidth: window.screen?.availWidth,
      availHeight: window.screen?.availHeight,
      dpr: window.devicePixelRatio,
    },
    deviceMemory: nav.deviceMemory ?? null,
    hardwareConcurrency: nav.hardwareConcurrency ?? null,
    network: connection ? {
      downlink: connection.downlink,
      effectiveType: connection.effectiveType,
      rtt: connection.rtt,
      saveData: connection.saveData,
    } : null,
    battery: battery ? {
      charging: battery.charging,
      level: battery.level,
    } : null,
    page: {
      href: window.location.href,
      pathname: window.location.pathname,
      referrer: document.referrer || null,
      utm: Object.keys(utm).length ? utm : null,
    },
    geoLocation: geo, // יהיה null אם המשתמש סירב
  };
}

// מכניס למסמך אחד בקולקציה nickProfiles, רק אם לא קיים
export async function ensureNickProfile(nick: string) {
  const id = docIdFromNick(nick);
  const ref = doc(db, "nickProfiles", id);

  await runTransaction(db, async (tx) => {
    const snap = await tx.get(ref);
    if (snap.exists()) return;

    const info = await collectDeviceInfo();
    tx.set(ref, { nickOriginal: nick, nickId: id, ...info });
  });

  return id;
}
