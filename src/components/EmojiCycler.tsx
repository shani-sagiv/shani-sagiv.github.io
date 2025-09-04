import React, { useEffect, useMemo, useRef, useState } from "react";

type Props = {
  intervalMs?: number;
  size?: number;
  durationMs?: number;
  className?: string;
  emojis: string[];       // ⬅️ מקבל מבחוץ
  single?: boolean;       // ⬅️ אפשרות להציג אמוג׳י אחד בלבד
};

const DEFAULTS = {
  intervalMs: 2000,
  durationMs: 500,
  size: 32,
};

export default function EmojiSlotCycler({
  intervalMs = DEFAULTS.intervalMs,
  durationMs = DEFAULTS.durationMs,
  size = DEFAULTS.size,
  className,
  emojis,
  single = false,
}: Props) {
  const pool = useMemo(() => Array.from(new Set(emojis)).filter(Boolean), [emojis]);
  const safePool = pool.length >= 3 ? pool : ["🌍", "✈️", "💻"];

  const initSample = single ? [sampleOne(safePool)] : sampleTriple(safePool);
  const [current, setCurrent] = useState<string[]>(initSample);
  const [next, setNext] = useState<string[] | null>(null);

  const [rolling, setRolling] = useState(false);
  const timeoutRef = useRef<number | null>(null);
  const intervalRef = useRef<number | null>(null);

  const roll = () => {
    const candidate = single ? [sampleOne(safePool)] : sampleTriple(safePool);
    const deranged = single
      ? candidate
      : derangeAgainstPrev(current, candidate, safePool);

    setNext(deranged);
    setRolling(true);

    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => {
      setCurrent(deranged);
      setNext(null);
      setRolling(false);
    }, durationMs);
  };

  useEffect(() => {
    if (intervalRef.current) window.clearInterval(intervalRef.current);
    intervalRef.current = window.setInterval(roll, intervalMs);
    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [intervalMs, durationMs, safePool.join("|"), current.join("|"), single]);

  return (
    <div
      className={`emoji-slot-cycler ${className ?? ""}`}
      style={{
        display: "inline-flex",
        gap: 20,
        alignItems: "center",
        fontSize: size,
        lineHeight: 1,
      }}
      aria-hidden="true"
    >
      {(single ? [0] : [0, 1, 2]).map((i) => (
        <Slot
          key={`slot-${i}-${current[i]}`}
          topEmoji={current[i]}
          bottomEmoji={(next ?? current)[i]}
          rolling={rolling}
          durationMs={durationMs}
          size={size}
        />
      ))}
    </div>
  );
}

function Slot({
  topEmoji,
  bottomEmoji,
  rolling,
  durationMs,
  size,
}: {
  topEmoji: string;
  bottomEmoji: string;
  rolling: boolean;
  durationMs: number;
  size: number;
}) {
  return (
    <div
      className="emoji-slot"
      style={{
        position: "relative",
        width: size,
        height: Math.round(size * 1.05),
        overflow: "hidden",
      }}
    >
      <div
        className={`emoji-strip ${rolling ? "rolling" : ""}`}
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          transform: rolling ? "translateY(-100%)" : "translateY(0%)",
          transition: `transform ${durationMs}ms cubic-bezier(.2,.8,.2,1)`,
        }}
      >
        <div className="emoji-cell" style={{ display: "grid", placeItems: "center", height: "100%" }}>
          {topEmoji}
        </div>
        <div className="emoji-cell" style={{ display: "grid", placeItems: "center", height: "100%" }}>
          {bottomEmoji}
        </div>
      </div>
    </div>
  );
}

// 🎲 דגימה אחת
function sampleOne(pool: string[]): string {
  return pool[Math.floor(Math.random() * pool.length)] ?? "🌍";
}

// 🎲 שלושה שונים
function sampleTriple(pool: string[]): string[] {
  if (pool.length < 3) {
    const p = ["🌍", "✈️", "💻"];
    return shuffle(p).slice(0, 3);
  }
  return uniqueSample(pool, 3);
}

// ... שאר הפונקציות (derangeAgainstPrev, uniqueSample, enforceUnique, shuffle) נשארות אותו הדבר
function derangeAgainstPrev(prev: string[], candidate: string[], pool: string[]): string[] {
  let next = enforceUnique(candidate, pool);

  for (let guard = 0; guard < 10; guard++) {
    const fixed = [0, 1, 2].filter((i) => next[i] === prev[i]);
    if (fixed.length === 0) break;

    if (fixed.length === 1) {
      const i = fixed[0];
      const j = [0, 1, 2].filter((x) => x !== i)[Math.floor(Math.random() * 2)];
      [next[i], next[j]] = [next[j], next[i]];
    } else if (fixed.length === 2) {
      const [a, b] = fixed;
      [next[a], next[b]] = [next[b], next[a]];
    } else {
      next = [next[1], next[2], next[0]];
    }
  }

  if ([0, 1, 2].some((i) => next[i] === prev[i])) {
    const fresh = uniqueSample(pool, 3);
    if ([0, 1, 2].some((i) => fresh[i] === prev[i])) {
      return [fresh[1], fresh[2], fresh[0]];
    }
    return fresh;
  }

  return next;
}

function uniqueSample<T>(arr: T[], k: number): T[] {
  const copy = [...arr];
  shuffleInPlace(copy);
  const out: T[] = [];
  for (let i = 0; i < copy.length && out.length < k; i++) {
    if (!out.includes(copy[i])) out.push(copy[i]);
  }
  while (out.length < k) out.push(copy[Math.floor(Math.random() * copy.length)]);
  return out;
}

function enforceUnique<T>(triple: T[], pool: T[]): T[] {
  const out: T[] = [];
  const used = new Set<T>();
  for (const t of triple) {
    if (!used.has(t)) {
      out.push(t);
      used.add(t);
    } else {
      const candidate = pool.find((x) => !used.has(x)) ?? t;
      out.push(candidate);
      used.add(candidate);
    }
  }
  return out.slice(0, 3);
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  shuffleInPlace(a);
  return a;
}
function shuffleInPlace<T>(a: T[]) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = (Math.random() * (i + 1)) | 0;
    [a[i], a[j]] = [a[j], a[i]];
  }
}
