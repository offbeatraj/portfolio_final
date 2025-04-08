"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function BackgroundParticles() {
  const particlesInit = useCallback(async (engine: any) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      className="absolute inset-0 z-[1] w-full h-full pointer-events-none"
      init={particlesInit}
      options={{
        background: { color: "purple" },
        particles: {
          number: { value: 60, density: { enable: true, value_area: 800 } },
          color: { value: "#b94fff" },
          shape: { type: "circle" },
          opacity: { value: 0.4, random: true },
          size: { value: { min: 1, max: 5 }, random: true },
          move: {
            enable: true,
            speed: 1.2,
            direction: "none",
            random: true,
            outModes: "out",
          },
          links: {
            enable: true,
            distance: 120,
            color: "#ffffff",
            opacity: 0.2,
            width: 1,
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: true, mode: "push" },
          },
          modes: {
            repulse: { distance: 100, duration: 0.4 },
            push: { quantity: 4 },
          },
        },
        retina_detect: true,
      }}
    />
  );
}