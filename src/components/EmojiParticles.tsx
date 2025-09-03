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
          value: { min: 10, max: 18 },
        },

        opacity: {
          value: { min: 0.6, max: 1 },
        },

        move: {
          enable: true,
          direction: "none",
          speed: { min: 0.3, max: 1.0 },
          random: true,
          straight: false,
          outModes: {
            top: "bounce",
            bottom: "bounce",
            left: "bounce",
            right: "bounce",
            default: "bounce",
          },
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
        position: "absolute",
        top: "20%",
        left: 0,
        width: "100%",
        height: "15%",
        zIndex: 15,
        pointerEvents: "none",
        overflow: "visible",

        WebkitMaskImage:
          "linear-gradient(to bottom, transparent 0, black 12px, black calc(100% - 12px), transparent 100%)",
        maskImage:
          "linear-gradient(to bottom, transparent 0, black 12px, black calc(100% - 12px), transparent 100%)",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "-48px",
          bottom: "-48px",
          left: 0,
          right: 0,
        }}
      >
        <Particles id="emojiParticles" options={options} />
      </div>
    </div>
  );
}
