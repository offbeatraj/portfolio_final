"use client";

import Spline from "@splinetool/react-spline";
import Image from "next/image";
import { Mail, Twitter, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ContactPage() {
  const [displayText, setDisplayText] = useState("");
  const fullTexts = ["You know the business", "I know the code"];
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = fullTexts[loopNum % fullTexts.length];
      const updatedText = isDeleting
        ? fullText.substring(0, displayText.length - 1)
        : fullText.substring(0, displayText.length + 1);

      setDisplayText(updatedText);

      if (!isDeleting && updatedText === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const typingTimer = setTimeout(handleTyping, isDeleting ? 50 : 100);
    return () => clearTimeout(typingTimer);
  }, [displayText, isDeleting, loopNum]);

  return (
    <main className="relative w-full min-h-screen bg-black text-white px-6 md:px-16 pt-28 pb-16 space-y-24 overflow-hidden">

      {/* 🌍 COLLABORATE SECTION */}
      <section className="relative z-10">
        <h2 className="text-center text-4xl md:text-5xl font-bold mb-2 text-purple-400 tracking-wide">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2 }}>
            COLLABORATE
          </motion.span>
        </h2>
        <p className="text-center text-lg text-white/80 mb-12">
          Let&apos;s craft{" "}
          <motion.span
            className="text-purple-400 font-semibold"
            animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            magic ✨
          </motion.span>
          , together.
        </p>

        {/* 📦 Tile Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          <div className="bg-white/5 rounded-2xl border border-white/10 backdrop-blur-md p-6 shadow-xl">
            <h3 className="font-bold text-lg mb-1 text-white">📄 Recommended by Professionals</h3>
            <p className="text-white/70 text-sm">Backed by credible mentors and industry pros.</p>
          </div>

          <div className="relative bg-white/5 rounded-2xl border border-white/10 backdrop-blur-md shadow-xl p-6 overflow-hidden h-[280px]">
            <h3 className="font-bold text-lg text-white mb-2 z-10 relative">🌐 Open to Work</h3>
            <p className="text-white/70 text-sm z-10 relative">Available globally (except Antarctica 🐧).</p>
            <div className="absolute bottom-0 right-0 w-[300px] h-[200px] z-0 pointer-events-none scale-[1.3] md:scale-[1.1]">
              <Spline scene="https://prod.spline.design/JBuxLdPkC9EshFZO/scene.splinecode" />
            </div>
          </div>

          <div className="bg-white/5 rounded-2xl border border-white/10 backdrop-blur-md p-6 shadow-xl">
            <h3 className="font-bold text-lg mb-1 text-white">🧠 Modern Stacks</h3>
            <p className="text-white/70 text-sm">Sleek, Secure & Robust. Built to excel and scale.</p>
          </div>

          <div className="bg-white/5 rounded-2xl border border-white/10 backdrop-blur-md p-6 shadow-xl">
            <h3 className="font-bold text-lg mb-1 text-white">🗓️ Book an Appointment</h3>
            <p className="text-white/70 text-sm">Let&apos;s have a talk on the next BIG thing.</p>
          </div>
        </div>
      </section>

      {/* ✉️ CONTACT SECTION */}
      <section className="max-w-6xl mx-auto z-10">
        <h2 className="text-center text-3xl font-bold text-purple-400 mb-2">CONTACT ME</h2>
        <p className="text-center text-white/70 mb-10">
          Let&apos;s connect and create something amazing together.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white/5 rounded-xl border border-white/10 p-4 shadow-lg backdrop-blur-md">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold">LinkedIn</h3>
              <Linkedin size={20} />
            </div>
            <p className="text-white/60 text-sm mb-2">Connect with me on LinkedIn</p>
            <Image
              src="/contact/linkedin-preview.png"
              alt="LinkedIn Preview"
              width={500}
              height={300}
              className="rounded-md w-full object-cover"
            />
          </div>

          <div className="bg-white/5 rounded-xl border border-white/10 p-4 shadow-lg backdrop-blur-md">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold">Gmail</h3>
              <Mail size={20} />
            </div>
            <p className="text-white/60 text-sm mb-2">Reach out to me via email</p>
            <Image
              src="/contact/gmail-preview.png"
              alt="Gmail Preview"
              width={500}
              height={300}
              className="rounded-md w-full object-cover"
            />
          </div>

          <div className="bg-white/5 rounded-xl border border-white/10 p-4 shadow-lg backdrop-blur-md">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold">Twitter</h3>
              <Twitter size={20} />
            </div>
            <p className="text-white/60 text-sm mb-2">Follow me on Twitter/X</p>
            <Image
              src="/contact/twitter-preview.png"
              alt="Twitter Preview"
              width={500}
              height={300}
              className="rounded-md w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* 🧠 FINAL HOVER BANNER + Typing */}
      <section className="z-10">
        <div className="mt-20 mx-auto max-w-3xl p-8 rounded-2xl bg-white/5 border border-purple-500/40 backdrop-blur-md shadow-2xl text-center">
          <h3 className="text-xl text-white font-semibold tracking-wide mb-2">
            SOMETIMES, YOU JUST NEED TO SEE IT.
          </h3>
          <p className="text-white/60 text-sm mb-4">but I bet you won’t have to, once you hire me!</p>
          <h1 className="text-2xl md:text-3xl font-bold text-purple-300 tracking-wide h-10">
            {displayText}
            <span className="blinking-cursor">|</span>
          </h1>
        </div>
      </section>
    </main>
  );
}