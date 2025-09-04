// src/components/FeedbackIcon.tsx
import React from "react";

type Props = {
  size?: number;
  filled?: boolean;
  count: number;
  color?: string;
  onClick?: () => void;
  type: "heart" | "comment";
};
const lightBlack = "#232323ff"

export function FeedbackIcon({
  size = 42,
  filled = false,
  count,
  color = "grey",
  onClick,
  type,
}: Props) {
  return (
    <div
      style={{
        position: "relative",
        width: size,
        height: size,
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      {type === "heart" && (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill={filled ? "#ff3a3aff" : "none"}
          stroke={filled ? "white" : lightBlack}
          strokeWidth={filled ? "0.8" : "1.1"}
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
                  filter: "drop-shadow(0 2px 3px rgba(0,0,0,0.3))", // 👈 shadow

          }}
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5
                   2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 
                   14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 
                   6.86-8.55 11.54L12 21.35z" />
        </svg>
      )}

{type === "comment" && (
  <svg
    width={size*1.05}
    height={size*1.05}
    viewBox="0 0 24 24"
    fill={filled ? color : "none"}
    stroke={lightBlack}
    style={{marginTop:-2, marginRight:-1.5,       filter: "drop-shadow(0 2px 3px rgba(0,0,0,0.3))", // 👈 shadow
}}
    strokeWidth="1.1"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 12c0 4.418-4.03 8-9 8-1.1 0-2.16-.16-3.14-.46L3 21l1.46-4.38C3.55 15.2 3 13.66 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
)}

      {count > 0 && (
        <span
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: size * 0.35,
            paddingBottom:type === "heart" ? 3 : 2,
            color: filled ? "white" : lightBlack,
            pointerEvents: "none",
          }}
        >
          {count}
        </span>
      )}
    </div>
  );
}
