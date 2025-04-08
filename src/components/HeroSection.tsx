"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, Briefcase, BookOpen, FileText } from "lucide-react";
import Spline from "@splinetool/react-spline";
import Image from "next/image";
import BackgroundParticles from "./BackgroundParticles";
import {
  Brain,
  Code2,
  Database,
  FlaskConical,
  Eye,
  BarChart,
  LineChart,
} from "lucide-react";

const roles = [
  "AI Engineer",
  "Machine Learning Engineer",
  "Data Scientist",
  "Cyber Security Engineer",
  "Full Stack Developer",
  "Data Analyst",
  "UI/UX Designer",
];

const skills = [
  { name: "Machine Learning", icon: <Brain size={14} />, desc: "Built classification models using Scikit-learn & XGBoost." },
  { name: "Deep Learning", icon: <Brain size={14} />, desc: "Trained CNNs and RNNs with PyTorch for vision and NLP." },
  { name: "Data Analysis", icon: <LineChart size={14} />, desc: "Processed datasets with Pandas, NumPy." },
  { name: "Python", icon: <Code2 size={14} />, desc: "Used across all AI/ML pipelines and backend systems." },
  { name: "SQL", icon: <Database size={14} />, desc: "Wrote optimized SQL queries for analytics." },
  { name: "TensorFlow", icon: <FlaskConical size={14} />, desc: "Built LSTM models for time series." },
  { name: "PyTorch", icon: <FlaskConical size={14} />, desc: "Custom deep learning models using PyTorch." },
  { name: "NLP", icon: <Brain size={14} />, desc: "Worked on transformer models using HuggingFace." },
  { name: "Computer Vision", icon: <Eye size={14} />, desc: "Object detection, edge detection, segmentation." },
  { name: "Data Viz", icon: <BarChart size={14} />, desc: "Dashboards with matplotlib, seaborn, Plotly." },
  { name: "Big Data", icon: <Database size={14} />, desc: "Analyzed distributed datasets using Spark." },
  { name: "LLMs", icon: <Brain size={14} />, desc: "Prompt-engineered GPT-4, Gemini, Falcon." },
  { name: "Time Series", icon: <LineChart size={14} />, desc: "Forecasted trends using ARIMA, Prophet." },
  { name: "RAG Apps", icon: <Brain size={14} />, desc: "Built chatbots with retrieval-augmented generation." },
];

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [name, setName] = useState("");
  const [activeSkill, setActiveSkill] = useState<string | null>(null);
  const [positions, setPositions] = useState<{ top: number; left: number }[]>([]);

  const fullName = "Rajendra Behera";
  const description =
    "Transforming complexity into clarity—where expert coding, rigorous research, and creative vision converge to spark innovative solutions.";

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((i) => (i + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let i = 0;
    let reverse = false;
    const typingInterval = setInterval(() => {
      if (!reverse) {
        setName(fullName.slice(0, i + 1));
        i++;
        if (i === fullName.length) {
          reverse = true;
        }
      } else {
        setName(fullName.slice(0, i - 1));
        i--;
        if (i === 0) reverse = false;
      }
    }, 150);
    return () => clearInterval(typingInterval);
  }, []);

  useEffect(() => {
    const newPositions: { top: number; left: number }[] = [];
    const zones = ["left", "center", "right"];
    const zoneWidth = 25;
    const verticalStart = 60;
    const verticalGap = 5;
    let row = 0;

    skills.forEach((_, index) => {
      const zone = zones[index % zones.length];
      let left;
      if (zone === "left") left = Math.floor(Math.random() * zoneWidth) + 5;
      else if (zone === "center") left = Math.floor(Math.random() * zoneWidth) + 35;
      else left = Math.floor(Math.random() * zoneWidth) + 65;

      const top = verticalStart + row * verticalGap;
      newPositions.push({ top, left });
      if (index % 3 === 2) row++;
    });

    setPositions(newPositions);
  }, []);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen w-full bg-black overflow-hidden">
      <BackgroundParticles />
      <div className="absolute inset-0 z-0">
        <Spline scene="https://prod.spline.design/tOxMG2p0HrTKQOER/scene.splinecode" />
      </div>

      {/* 🧠 Main Content */}
      <div className="relative z-20 w-full h-full px-6 md:px-20 pt-28 pb-48 grid grid-cols-1 md:grid-cols-2 gap-10 items-start pointer-events-none">
        <div className="flex flex-col text-left pointer-events-auto">
          <p className="text-white text-sm mb-2">Hello world! I am</p>
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold text-white mb-2"
            animate={{ opacity: [0, 1], y: [20, 0] }}
            transition={{ duration: 1 }}
          >
            {name}
            <span className="text-purple-400 animate-pulse">|</span>
          </motion.h1>

          <AnimatePresence mode="wait">
            <motion.div
              key={roles[roleIndex]}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="text-xl md:text-2xl font-medium text-purple-300 mb-4"
            >
              {roles[roleIndex]}
            </motion.div>
          </AnimatePresence>

          <motion.p
            className="max-w-xl text-white/80 leading-relaxed text-base md:text-lg mb-6"
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration: 6,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          >
            {description}
          </motion.p>
        </div>

        {/* 👤 Profile + Links */}
        <div className="absolute top-8 right-8 flex flex-col items-center gap-4 pointer-events-auto z-30">
          <motion.div
            className="w-[120px] h-[120px] md:w-[140px] md:h-[140px] rounded-full overflow-hidden border-[6px] border-white shadow-xl"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
          >
            <Image
              src="/IMG_8612-2-3.jpg"
              alt="Rajendra Behera"
              width={400}
              height={400}
              className="object-cover w-full h-full rounded-full"
            />
          </motion.div>
          <motion.a href="#projects" className="text-white hover:text-purple-400 text-sm">
            <Briefcase size={16} /> View Projects
          </motion.a>
          <motion.a href="/publications" className="text-white hover:text-purple-400 text-sm">
            <BookOpen size={16} /> Publications
          </motion.a>
          <motion.a href="/Rajendra_Behera_Resume.pdf" download className="text-white hover:text-purple-400 text-sm">
            <FileText size={16} /> Resume
          </motion.a>
        </div>
      </div>

      {/* 📝 Guidance Line */}
      <motion.p
        className="absolute top-[50%] left-1/2 transform -translate-x-1/2 text-sm text-purple-300 bg-black/60 px-4 py-2 rounded-lg shadow-lg z-40 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        Hover to interact.
      </motion.p>

      {/* ✨ Skill Bubbles + Tooltip */}
      {skills.map((skill, i) => {
        const pos = positions[i] || { top: 70, left: 50 };
        const isHovered = activeSkill === skill.name;

        return (
          <div key={i}>
            <motion.div
              className="absolute z-10 px-3 py-1 rounded-full bg-purple-800/20 border border-purple-300 text-purple-200 text-xs cursor-pointer hover:scale-105 hover:bg-purple-600/40 transition-all backdrop-blur-md shadow-lg"
              style={{
                top: `${pos.top}%`,
                left: `${pos.left}%`,
              }}
              onMouseEnter={() => setActiveSkill(skill.name)}
              onMouseLeave={() => setActiveSkill(null)}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 + i * 0.05 }}
            >
              <div className="flex gap-1 items-center">
                {skill.icon}
                {skill.name}
              </div>
            </motion.div>

            <AnimatePresence>
              {isHovered && (
                <motion.div
                  className="absolute z-20 text-white text-xs p-3 rounded-lg backdrop-blur-md border border-white/10 bg-black/70 shadow-md"
                  style={{
                    top: `${pos.top + 4}%`,
                    left: `${pos.left + 3}%`,
                    transform: "translate(-50%, -50%)",
                    maxWidth: "200px",
                  }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                >
                  {skill.desc}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}

      {/* 🔗 GitHub & LinkedIn */}
      <div className="absolute bottom-24 right-10 text-white/90 text-sm flex flex-col gap-3 z-40 pointer-events-auto">
        <motion.a
          href="https://github.com/offbeatraj"
          className="flex items-center gap-2 hover:text-purple-400"
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <i className="fa-brands fa-github" /> GitHub
        </motion.a>
        <motion.a
          href="https://linkedin.com/in/rajendra"
          className="flex items-center gap-2 hover:text-purple-400"
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 3.2, repeat: Infinity }}
        >
          <i className="fa-brands fa-linkedin" /> LinkedIn
        </motion.a>
      </div>

      {/* ⬇️ Scroll Arrow */}
      <motion.div
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30 flex flex-col items-center pointer-events-auto"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-white/80 text-sm mb-2">Scroll Down</span>
        <button
          onClick={() => handleScrollTo("skills")}
          className="bg-white/20 hover:bg-white/30 rounded-full p-4 shadow-lg animate-pulse"
        >
          <ArrowDown className="text-white w-10 h-10" />
        </button>
      </motion.div>
    </section>
  );
}