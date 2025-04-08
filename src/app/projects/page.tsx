"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github } from "lucide-react";
import Image from "next/image";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import Spline from "@splinetool/react-spline";

const projects = [
  {
    name: "RAG_DOC_CHATBOT",
    desc: "A Retrieval-Augmented Generation chatbot using LangChain and LLMs.",
    tech: ["LangChain", "Python", "LLMs"],
    github: "https://github.com/offbeatraj/RAG_DOC_CHATBOT",
    image: "/projects/rag.jpg",
  },
  {
    name: "Sentiment Analysis",
    desc: "Analyzes sentiment from text using NLP techniques.",
    tech: ["NLP", "TextBlob", "Python"],
    github: "https://github.com/offbeatraj/Sentiment-analysis",
    image: "/projects/sentiment.jpg",
  },
  {
    name: "Alzheimer's Chatbot",
    desc: "A chatbot designed to assist with Alzheimer's-related queries.",
    tech: ["Chatbot", "LLMs", "HuggingFace"],
    github: "https://github.com/offbeatraj/Alzheimers-chatBOT",
    image: "/projects/alzheimers.jpg",
  },
  {
    name: "Air Piano",
    desc: "Play a virtual piano using hand gestures and computer vision.",
    tech: ["OpenCV", "MediaPipe", "Python"],
    github: "https://github.com/offbeatraj/Air-Piano",
    image: "/projects/piano.jpg",
  },
  {
    name: "Movie Recommendation",
    desc: "A personalized movie recommendation system using collaborative filtering.",
    tech: ["Recommender", "Pandas", "Python"],
    github: "https://github.com/offbeatraj/movie-recommendation",
    image: "/projects/MovieRecomendation.jpg",
  },
];

export default function ProjectsPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const currentProject = projects[currentIndex];

  return (
    <section className="relative min-h-screen w-full bg-black text-white overflow-hidden">
      {/* 🌌 Spline Background */}
      <div className="absolute top-0 left-0 w-full h-[1400px] z-0 opacity-70 pointer-events-none">
        <Spline scene="https://prod.spline.design/l0wJDIwD-UO6Fdke/scene.splinecode" />
      </div>

      <motion.div
        className="relative z-10 px-6 md:px-20 pt-32 pb-20 max-w-7xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Crafting Digital Realities
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left Image */}
          <motion.div
            key={currentProject.name}
            className="w-full md:w-1/2 bg-white/5 border border-white/10 p-4 rounded-xl backdrop-blur-md shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Image
              src={currentProject.image}
              alt={currentProject.name}
              width={600}
              height={400}
              className="rounded-lg w-full h-[300px] object-cover mb-4"
            />
          </motion.div>

          {/* Right Description */}
          <motion.div
            key={currentProject.github}
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-2xl font-semibold mb-2 text-purple-300">
              {currentProject.name}
            </h3>
            <p className="text-white/80 mb-4">{currentProject.desc}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {currentProject.tech.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs px-2 py-1 bg-purple-900/40 border border-purple-300/30 rounded-full text-purple-200"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={currentProject.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:underline flex items-center"
            >
              <Github size={16} className="mr-2" />
              View on GitHub
            </a>
          </motion.div>
        </div>

        {/* CODE COMPARISON SLIDER */}
        <div className="mt-24">
          <motion.h3
            className="text-3xl font-bold text-center mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            CODE MATTERS
          </motion.h3>

          <p className="text-white/60 text-center mb-6">
            From Chaos to Clarity : Say Goodbye to the Un’s
          </p>

          <div className="relative max-w-4xl mx-auto border border-white/10 rounded-xl overflow-hidden backdrop-blur-md shadow-xl p-4 group">
            <ReactCompareSlider
              itemOne={
                <ReactCompareSliderImage
                  src="/projects/code-bad.png"
                  alt="Bad code"
                />
              }
              itemTwo={
                <ReactCompareSliderImage
                  src="/projects/code-good.png"
                  alt="Clean code"
                />
              }
              style={{
                width: "100%",
                height: "350px",
                borderRadius: "12px",
                pointerEvents: "none",
              }}
              handle={
                <div className="w-[2px] h-full overflow-hidden">
                  <motion.div
                    className="w-full h-full bg-gradient-to-b from-purple-400 to-purple-700 shadow-[0_0_20px_rgba(168,85,247,0.9)]"
                    animate={{
                      x: ["0%", "100%", "0%"],
                    }}
                    transition={{
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: 4,
                      ease: "easeInOut",
                    }}
                  />
                </div>
              }
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}