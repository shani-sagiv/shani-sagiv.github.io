import React, { useEffect, useRef, useState } from "react";

type Props = {
  intervalMs?: number;
  size?: number;
  durationMs?: number;
  className?: string;
  emojis: string[];
  single?: boolean;
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
  const safePool = emojis.length > 0 ? emojis : ["🌍", "✈️", "💻"];

  const [Index, setIndex] = useState(0);
  const [current, setCurrent] = useState<string[]>(
    single ? [safePool[0]] : safePool.slice(0, 3)
  );
  const [next, setNext] = useState<string[] | null>(null);
  const [rolling, setRolling] = useState(false);

  const timeoutRef = useRef<number | null>(null);
  const intervalRef = useRef<number | null>(null);

  const roll = () => {
    let newIndex = (Index + 1) % safePool.length;

    const candidate = single
      ? [safePool[newIndex]]
      : [
          safePool[newIndex % safePool.length],
          safePool[(newIndex + 1) % safePool.length],
          safePool[(newIndex + 2) % safePool.length],
        ];

    setNext(candidate);
    setRolling(true);

    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => {
      setCurrent(candidate);
      setNext(null);
      setRolling(false);
      setIndex(newIndex);
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
  }, [intervalMs, durationMs, safePool.join("|"), single, Index]);

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
