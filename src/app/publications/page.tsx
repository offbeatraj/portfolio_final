"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const papers = [
  {
    title: "Alzheimer's Case Study Chatbot",
    desc: "A conversational AI for assisting Alzheimer’s-related case studies, built with LLMs and custom QA pipelines.",
    img: "/projects/alzheimers.jpg",
    link: "https://www.researchgate.net/publication/390466315_Alzheimer's_Case_Study_Chatbot",
  },
  {
    title: "Rotation and Health Prediction in Brain Images Using CNNs",
    desc: "A deep learning framework for analyzing brain scans to predict orientation and health indicators.",
    img: "/projects/brain.jpg",
    link: "https://www.researchgate.net/publication/387273668_Rotation_and_Health_Prediction_in_Brain_Images_Using_Convolutional_Neural_Networks",
  },
  {
    title: "Cardiomegaly Detection in Canines Using Radiographs",
    desc: "Designed a CNN-based model to detect enlarged hearts in dogs via radiographic imaging.",
    img: "/projects/canine.jpg",
    link: "https://www.researchgate.net/publication/386022373_Development_of_a_CNN_Framework_for_Cardiomegaly_Detection_in_Canines_Using_Radiographs",
  },
];

const blogs = [
  {
    date: "March 25, 2025",
    read: "12 min read",
    title: "Getting Started with React in 2025",
    desc: "Learn how to set up and build your first React application with the latest features and best practices for modern web development.",
    tags: ["React", "JavaScript", "Web Development"],
    img: "/blogs/react-2025.jpg",
    link: "https://67f3927093910e1a78f280a9--blogtechburst.netlify.app",
  },
  {
    date: "April 2, 2025",
    read: "15 min read",
    title: "The Future of Artificial Intelligence",
    desc: "Exploring the latest advancements in AI and what they mean for technology, society, and our collective future.",
    tags: ["Artificial Intelligence", "Technology", "Future"],
    img: "/blogs/future-ai.jpg",
    link: "https://67f3927093910e1a78f280a9--blogburst.netlify.app/blog/2",
  },
  {
    date: "March 15, 2025",
    read: "18 min read",
    title: "Sustainable Web Development Practices",
    desc: "How to build websites and applications that are environmentally friendly, energy efficient, and reduce digital carbon footprints.",
    tags: ["Web Development", "Sustainability", "Performance"],
    img: "/blogs/sustainability.jpg",
    link: "https://67f3927093910e1a78f280a9--blogburst.netlify.app/blog/3",
  },
  {
    date: "April 5, 2025",
    read: "20 min read",
    title: "Modern JavaScript: Features You Should Know in 2025",
    desc: "A comprehensive guide to the latest JavaScript features that every developer should be familiar with to write cleaner, more efficient code.",
    tags: ["JavaScript", "Web Development", "Programming"],
    img: "/blogs/js-2025.jpg",
    link: "https://67f3927093910e1a78f280a9--blogburst.netlify.app/blog/4",
  },
];

export default function PublicationsPage() {
  return (
    <main className="min-h-screen w-full bg-black text-white px-6 md:px-20 pt-32 pb-24 overflow-hidden space-y-32">
      {/* 📚 Research Papers */}
      <section>
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Research Papers
        </motion.h2>

        <div className="relative border-l-2 border-purple-500/40 ml-4 pl-6 space-y-20">
          {papers.map((paper, index) => (
            <motion.div
              key={index}
              className="relative flex flex-col md:flex-row items-center md:items-start gap-6 group"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="absolute -left-[33px] top-2 w-6 h-6 rounded-full bg-purple-500 shadow-[0_0_12px_rgba(168,85,247,0.9)] z-10" />

              <Image
                src={paper.img}
                alt={paper.title}
                width={240}
                height={160}
                className="rounded-xl object-cover border border-white/10 shadow-xl w-full max-w-xs"
              />

              <div className="max-w-xl">
                <h3 className="text-xl font-semibold text-purple-300 mb-2">
                  {paper.title}
                </h3>
                <p className="text-white/80 text-sm mb-4">{paper.desc}</p>
                <a
                  href={paper.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm text-purple-400 border border-purple-400/30 px-4 py-1 rounded-full hover:bg-purple-700/30 transition"
                >
                  View Paper →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 📰 Blog Section */}
      <section>
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-purple-400"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Latest Blogs
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">
          {blogs.map((blog, index) => (
            <motion.a
              key={index}
              href={blog.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/5 rounded-2xl border border-white/10 backdrop-blur-md shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              {/* Thumbnail */}
              <div className="w-full h-48 relative">
                <Image
                  src={blog.img}
                  alt={blog.title}
                  fill
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="p-5">
                <p className="text-xs text-white/50 mb-2">
                  {blog.date} • {blog.read}
                </p>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition">
                  {blog.title}
                </h3>
                <p className="text-sm text-white/70 mb-4">{blog.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {blog.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 bg-purple-900/40 border border-purple-300/30 rounded-full text-purple-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </section>
    </main>
  );
}