import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Engine, ISourceOptions } from "@tsparticles/engine";
import { loadFull } from "tsparticles";

export default function EmojiParticles() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadFull(engine);
    }).then(() => setInit(true));
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: { enable: false },
      background: { color: "transparent" },
      fpsLimit: 60,
      detectRetina: true,

      particles: {
        number: {
          value: 20, // Max emojis
          density: { enable: false },
        },

        shape: {
          type: "char",
          options: {
            char: [
              { value: "🦋", font: "system-ui, Apple Color Emoji" },
              { value: "✨", font: "system-ui, Apple Color Emoji" },
              { value: "🌸", font: "system-ui, Apple Color Emoji" },
              { value: "💖", font: "system-ui, Apple Color Emoji" },
              { value: "🌼", font: "system-ui, Apple Color Emoji" },
              { value: "💎", font: "system-ui, Apple Color Emoji" },
            ],
          },
        },

        size: {
          value: { min: 18, max: 30 }, // גודל משתנה לכל אימוג׳
        },

        opacity: {
          value: { min: 0.6, max: 1 },
        },

        move: {
          enable: true,
          direction: "none", // 👈 רנדומלי לכל הכיוונים
          speed: { min: 0.3, max: 1.0 },
          outModes: { default: "out" }, // כשהם יוצאים מהמסך - נעלמים
          random: true,
          straight: false,
        },

        rotate: {
          value: { min: 0, max: 360 },
          direction: "random",
          animation: {
            enable: true,
            speed: 5,
          },
        },
      },
    }),
    []
  );

  if (!init) return null;

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: 220,
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      <Particles id="emojiParticles" options={options} />
    </div>
  );
}
