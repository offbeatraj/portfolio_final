"use client";
import BackgroundParticles from "@/components/BackgroundParticles";
import Footer from "@/components/Footer"; // ✅ Import footer
import { Typewriter } from "react-simple-typewriter";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./custom-datepicker.css";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Image from "next/image";
import Spline from "@splinetool/react-spline";

export default function ContactPage() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  return (
    <main className="relative w-full min-h-screen bg-black text-white overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 -z-10 opacity-70 pointer-events-none">
        <Spline scene="https://prod.spline.design/hdgBxQc0GzB5zZ5x/scene.splinecode" />
      </div>
      <BackgroundParticles />

      <div className="px-6 md:px-16 pt-28 pb-16 space-y-24">
        {/* Collaborate Section */}
        <section className="relative z-10">
          <h2 className="text-center text-5xl font-bold mb-2 text-purple-400 tracking-wide">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
            >
              COLLABORATE
            </motion.span>
          </h2>
          <p className="text-center text-lg text-white/80 mb-12">
            <Typewriter
              words={["You know the business , I know the code."]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={60}
              deleteSpeed={40}
              delaySpeed={2000}
            />
          </p>

          <div className="flex flex-wrap gap-6 justify-center">
            {/* Open to Work */}
            <div className="relative bg-white/5 rounded-2xl border border-white/10 backdrop-blur-md p-6 shadow-xl min-h-[400px] flex flex-col justify-between overflow-hidden">
              <h3 className="font-bold text-lg text-white z-10 relative mb-2">🌐 Open to Work</h3>
              <p className="text-white/70 text-sm z-10 relative mb-40">
                I’m actively exploring new opportunities globally except Antarctica 🐧!
              </p>
              <div className="absolute inset-0 opacity-20 pointer-events-none z-0">
                <Spline scene="https://prod.spline.design/hdgBxQc0GzB5zZ5x/scene.splinecode" />
              </div>
            </div>

            {/* Modern Stacks */}
            <div className="bg-white/5 rounded-xl border border-white/10 p-3 shadow backdrop-blur-md w-full max-w-xs h-auto">
              <h3 className="font-bold text-lg mb-4 text-white">🧠 Modern Stacks</h3>
              <p className="text-white/70 text-sm mb-4">Sleek, Secure & Robust. Built to scale with:</p>
              <div className="flex flex-wrap gap-3 items-center">
                <Image src="/contact/react.png" alt="React" width={40} height={40} className="hover:scale-110 transition duration-300" />
                <Image src="/contact/tailwind.png" alt="Tailwind CSS" width={40} height={40} className="hover:scale-110 transition duration-300" />
                <Image src="/contact/firebase.png" alt="Firebase" width={40} height={40} className="hover:scale-110 transition duration-300" />
                <Image src="/contact/docker.png" alt="Docker" width={40} height={40} className="hover:scale-110 transition duration-300" />
              </div>
            </div>

            {/* Book Appointment */}
            <div className="bg-white/5 rounded-xl border border-white/10 p-3 shadow backdrop-blur-md w-full max-w-xs h-auto">
              <h3 className="font-bold text-lg mb-4 text-white">🗓️ Book an Appointment</h3>
              <p className="text-white/70 text-sm mb-4">
                Select a preferred date to schedule an interview or meeting.
              </p>
              <div className="bg-black bg-opacity-300 text-white rounded-lg shadow-md border border-black/10 p-2">
                <DatePicker
                  selected={selectedDate}
                  onChange={(date) => {
                    setSelectedDate(date);
                    window.open(
                      "https://calendar.google.com/calendar/u/0?cid=NDM3NGMzZjJkNmM5ZmM0ZTNkMGZlODEzNzI3ZWY2NTE0ODEyY2JhNTlmMGZiNDVjYmYzYTAxNjIyZDZiMzc1NUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t",
                      "_blank"
                    );
                  }}
                  placeholderText="Click to pick a date"
                  inline
                  calendarClassName="bg-black text-white border border-white/10"
                  dayClassName={(date) => "hover:bg-purple-600 rounded-full text-white"}
                />
              </div>
              <a
                href="https://calendar.google.com/calendar/u/0?cid=NDM3NGMzZjJkNmM5ZmM0ZTNkMGZlODEzNzI3ZWY2NTE0ODEyY2JhNTlmMGZiNDVjYmYzYTAxNjIyZDZiMzc1NUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-purple-500 hover:bg-purple-600 text-white font-medium px-4 py-2 rounded transition duration-300"
              >
                Go to Google Calendar
              </a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="max-w-6xl mx-auto z-10">
          <h2 className="text-center text-3xl font-bold text-purple-400 mb-2">CONTACT ME</h2>
          <p className="text-center text-white/70 mb-10">
            Let&apos;s connect and create something amazing together.
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            {/* LinkedIn */}
            <div className="bg-white/5 rounded-xl border border-white/10 p-2 shadow-lg backdrop-blur-md min-h-[240px]">
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
              <a
                href="https://www.linkedin.com/in/rajendra-behera"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-sm text-purple-400 hover:underline"
              >
                Visit Profile
              </a>
            </div>

            {/* Gmail */}
            <div className="bg-white/5 rounded-xl border border-white/10 p-2 shadow-lg backdrop-blur-md min-h-[240px]">
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
              <a
                href="mailto:rajbehera445@gmail.com"
                className="inline-block mt-2 text-sm text-purple-400 hover:underline"
              >
                Send Email
              </a>
            </div>

            {/* Twitter */}
            <div className="bg-white/5 rounded-xl border border-white/10 p-2 shadow-lg backdrop-blur-md min-h-[240px]">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold">Twitter</h3>
                <Twitter size={20} />
              </div>
              <p className="text-white/60 text-sm mb-2">Follow me on Twitter</p>
              <Image
                src="/contact/twitter-preview.png"
                alt="Twitter Preview"
                width={500}
                height={300}
                className="rounded-md w-full object-cover"
              />
              <a
                href="https://twitter.com/offbeatraj"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-sm text-purple-400 hover:underline"
              >
                Visit Profile
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* ✅ Footer */}
      <Footer />
    </main>
  );
}