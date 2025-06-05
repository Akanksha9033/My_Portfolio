import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import profileImage from '../assets/akanksha3.jpg'; // Replace with your actual image path

const Home = () => {
  return (
    <motion.section
      id="home"
      className="min-h-screen flex flex-col-reverse lg:flex-row items-center justify-between gap-10 px-6 py-20 bg-gradient-to-br from-indigo-100 via-pink-50 to-purple-100 scroll-mt-24 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Left Text Section */}
      <div className="lg:w-1/2 text-center lg:text-left space-y-6 z-10">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Akanksha</span>
        </motion.h1>

        {/* Typewriter Effect */}
        <motion.h2
          className="text-xl md:text-2xl font-semibold text-indigo-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Typewriter
            words={['Full Stack Developer', 'UI/UX Builder', 'Team Player at Edzest']}
            loop
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </motion.h2>

        <motion.p
          className="text-md text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          I currently work at <strong className="text-indigo-600">Edzest</strong>, a fast-growing ed-tech startup that’s transforming the mock test and learning space for students and project  professionals across India.
        </motion.p>

        <motion.p
          className="text-md text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
        >
          At Edzest, I’ve built and optimized complete admin dashboards, performance analytics, live mock test engines, event automation, and CRM systems to ensure an impactful and smooth experience for all users.
        </motion.p>

        <motion.ul
          className="list-disc list-inside text-sm text-gray-600 mt-2 space-y-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <li>Admin dashboards & test creation flows</li>
          <li>Live exam engine (pause/resume, auto-save)</li>
          <li>Student performance analytics & leaderboard charts</li>
          <li>CRM integration, event automation, and email notifications</li>
        </motion.ul>

        {/* Future Vision */}
        <motion.p
          className="text-md text-gray-600 pt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          Our vision is to evolve Edzest into a complete learning platform that empowers educators and institutions to launch their own branded portals — where they can create and sell courses, host live classes, and track student progress through one intelligent system.
        </motion.p>

        <motion.p
          className="text-md text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
        >
          I’m proud to be part of this mission — using technology to make high-quality education accessible, efficient, and engaging for everyone.
        </motion.p>

        <motion.a
          href="#projects"
          className="inline-block mt-6 px-6 py-3 bg-indigo-600 text-white rounded-full shadow-lg hover:scale-105 hover:bg-indigo-700 transition transform duration-300"
          whileHover={{ scale: 1.05 }}
        >
          🚀 Explore My Work
        </motion.a>
      </div>

      {/* Right Image Section */}
      <motion.div
        className="lg:w-1/2 flex justify-center z-10"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <img
          src={profileImage}
          alt="Akanksha Kumari"
          className="w-[340px] h-[340px] md:w-[440px] md:h-[440px] rounded-full object-cover shadow-2xl border-4 border-indigo-300 ring-4 ring-pink-200"
        />
      </motion.div>

      {/* Background Dots */}
      <div className="absolute inset-0 pointer-events-none opacity-10 z-0">
        <div className="w-full h-full bg-[radial-gradient(#c084fc_1px,transparent_1px)] [background-size:30px_30px]"></div>
      </div>
    </motion.section>
  );
};

export default Home;
