import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { FaReact, FaNodeJs, FaDatabase, FaCss3Alt, FaHtml5 } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiJavascript } from 'react-icons/si';
import { motion } from 'framer-motion';

const AboutMe = () => {
  return (
    <motion.section
      id="about"
      className="scroll-mt-24 py-20 px-6 bg-white text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold text-gray-800 mb-6">About Me</h2>

      {/* Typewriter */}
      <h3 className="text-xl text-indigo-600 font-semibold mb-8">
        <Typewriter
          words={['Full Stack Developer', 'UI/UX Enthusiast', 'Tech Explorer', 'Lifelong Learner']}
          loop={true}
          cursor
          cursorStyle="_"
          typeSpeed={80}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </h3>

      {/* Description */}
      <p className="max-w-3xl mx-auto text-gray-600 mb-10">
        I specialize in building responsive web applications with seamless user experiences. My work at Edzest involves architecting front-end modules, developing secure backend APIs, and collaborating with cross-functional teams to deliver scalable education solutions.
      </p>

      {/* Tech Stack Icons */}
      <div className="flex flex-wrap justify-center gap-6 text-5xl text-indigo-500">
        <FaHtml5 title="HTML5" />
        <FaCss3Alt title="CSS3" />
        <SiJavascript title="JavaScript" />
        <FaReact title="React" />
        <SiTailwindcss title="Tailwind CSS" />
        <FaNodeJs title="Node.js" />
        <SiMongodb title="MongoDB" />
        <FaDatabase title="Database" />
      </div>

      {/* Badges / Achievements */}
      <div className="mt-12 flex flex-wrap justify-center gap-4">
        <span className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium shadow">
          Built 10+ Dashboards at Edzest
        </span>
        <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium shadow">
          100+ Tests Launched on Mock Platform
        </span>
        <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium shadow">
          1000+ Users Onboarded via Events
        </span>
      </div>
    </motion.section>
  );
};

export default AboutMe;
