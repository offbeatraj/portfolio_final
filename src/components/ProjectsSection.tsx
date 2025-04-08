"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Spline from "@splinetool/react-spline";
import { ArrowRightCircle, ArrowLeftCircle } from "lucide-react";

const aboutParagraphs = [
  {
    side: "left",
    text: "I am a dedicated Machine Learning Engineer and Data Scientist with expertise in developing intelligent systems that transform raw data into valuable insights and solutions.",
  },
  {
    side: "left",
    text: "With a strong background in machine learning algorithms, I specialize in building end-to-end ML pipelines across computer vision, NLP, and time series tasks.",
  },
  {
    side: "left",
    text: "I’ve worked on projects like recommendation systems, medical imaging, and environmental sound classification — solving problems with both rigor and creativity.",
  },
  {
    side: "left",
    text: "I thrive in communicating complex ideas clearly and collaborating with teams to ship AI solutions from research to real-world impact.",
  },
];

const whatIBring = [
  {
    title: "End-to-End ML Pipelines",
    description: "From data cleaning to deployment — I engineer complete solutions that scale.",
  },
  {
    title: "Creative Problem Solving",
    description: "I turn ambiguity into opportunity by merging logic with intuition.",
  },
  {
    title: "Cross-Disciplinary Insight",
    description: "My work blends AI with cybersecurity, design thinking, and human-centered research.",
  },
];

export default function AboutSection() {
  const [aboutIndex, setAboutIndex] = useState(0);
  const [tableIndex, setTableIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setAboutIndex((prev) => (prev + 1) % aboutParagraphs.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const current = aboutParagraphs[aboutIndex];
  const currentTable = whatIBring[tableIndex];

  return (
    <section
      id="about"
      className="relative min-h-screen bg-black text-white overflow-hidden"
    >
      {/* 🔮 Background Spline */}
      <div className="absolute inset-0 z-0">
        <Spline scene="https://prod.spline.design/lDkPKYCcG6uqxtAW/scene.splinecode" />
      </div>

      {/* 🔠 Title */}
      <motion.div
        className="absolute top-24 w-full text-center z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-white">
          Get To Know Me Better
        </h2>
        <p className="text-white/70 text-sm md:text-base mt-2">
          Explore my interests, my journey as a programmer, why I chose this field, everything 101.
        </p>
      </motion.div>

      {/* 💬 Paragraph & Table Side-by-Side */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-6 md:px-20 max-w-6xl z-10 flex flex-col md:flex-row justify-between items-center gap-10">
        {/* Left: Paragraph */}
        <motion.div
          className="flex-1 flex flex-col justify-center items-start h-full max-w-md"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <AnimatePresence mode="wait">
            <motion.p
              key={aboutIndex}
              className="text-white/90 text-base md:text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
            >
              {current.text}
            </motion.p>
          </AnimatePresence>
        </motion.div>

        {/* Right: What I Bring */}
        <motion.div
          className="flex-1 flex flex-col items-end justify-center max-w-md text-right"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.h3
            key={tableIndex + "-title"}
            className="text-purple-400 text-xl md:text-2xl font-semibold mb-2"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.6 }}
          >
            {currentTable.title}
          </motion.h3>
          <motion.p
            key={tableIndex + "-desc"}
            className="text-white/80 text-base md:text-lg"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {currentTable.description}
          </motion.p>

          {/* ⬅️➡️ Arrows */}
          <div className="flex gap-4 mt-4">
            <button
              onClick={() =>
                setTableIndex((prev) => (prev - 1 + whatIBring.length) % whatIBring.length)
              }
              className="text-white/70 hover:text-purple-400 transition"
            >
              <ArrowLeftCircle size={28} />
            </button>
            <button
              onClick={() => setTableIndex((prev) => (prev + 1) % whatIBring.length)}
              className="text-white/70 hover:text-purple-400 transition"
            >
              <ArrowRightCircle size={28} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}