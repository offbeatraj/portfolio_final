"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import "./codereveal.css";

export default function CodeRevealSlider() {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative w-full max-w-4xl mx-auto bg-[#0f0b1b] border border-purple-500 rounded-2xl overflow-hidden p-6 text-center glow-box transition-all duration-500"
    >
      {/* 🔠 Heading */}
      <motion.h2
        className="text-white/80 text-xl md:text-2xl tracking-wide mb-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        SOMETIMES, YOU JUST NEED TO SEE IT.
      </motion.h2>

      {/* 💬 Subheading with fixed apostrophe */}
      <motion.p
        className="text-white/50 mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        but I bet you won&apos;t have to, once you hire me!
      </motion.p>

      {/* ✨ Reveal Text Effect */}
      <div className="relative text-4xl md:text-6xl font-extrabold text-white/70 cursor-pointer transition duration-500 ease-in-out">
        <span className={`reveal-text ${hovered ? "hovered" : ""}`}>
          You know the business
          <span className="reveal-text-alt">I know the code</span>
        </span>

        {/* 🌟 Sparkle Layer */}
        <div className="absolute inset-0 pointer-events-none z-0 sparkle-layer" />
      </div>
    </div>
  );
}