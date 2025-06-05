import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Mock Test Platform',
    description: 'A full-stack online mock test system with timer, analytics, user dashboard, admin panel, and question management.',
    tech: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
    link: 'https://mock-test-1nfm.vercel.app',
  },
  {
    title: 'Edzest Learning Website',
    description: 'A feature-rich education platform with courses, events, student dashboards, CRM, and test modules.',
    tech: ['React', 'Bootstrap', 'MongoDB', 'Express'],
    link: 'https://edzest.org',
  },
];

const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="scroll-mt-24 bg-gray-100 py-16 px-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-4xl font-bold text-center text-gray-800 mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md border-t-4 border-indigo-500"
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-indigo-600 mb-2">
              {project.title}
            </h3>
            <p className="text-gray-600 mb-3">{project.description}</p>
            <ul className="flex flex-wrap gap-2 text-sm text-gray-500 mb-4">
              {project.tech.map((t, i) => (
                <li key={i} className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded">
                  {t}
                </li>
              ))}
            </ul>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 font-medium hover:underline"
            >
              View Project →
            </a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
