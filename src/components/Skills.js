import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'HTML/CSS', level: 90 },
  { name: 'JavaScript', level: 85 },
  { name: 'React.js', level: 80 },
  { name: 'Tailwind CSS', level: 75 },
  { name: 'Node.js', level: 70 },
  { name: 'MongoDB', level: 70 },
  { name: 'Zoho CRM', level: 65 },
  { name: 'Team Leadership', level: 80 },
];

const Skills = () => {
  return (
    <motion.section
      id="skills"
      className="scroll-mt-24 py-20 px-6 bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">Skills</h2>

      {/* Paragraph above skills list */}
      <p className="text-center max-w-3xl mx-auto text-gray-600 text-md mb-12">
        As part of <strong className="text-indigo-600">Edzest</strong> — a growing startup revolutionizing online learning and testing —
        I’ve developed skills in full-stack web development, CRM integration (Zoho), and team leadership.
        I'm passionate about building efficient systems and mentoring developers in agile environments.
      </p>

      {/* Skill bars */}
      <div className="max-w-4xl mx-auto space-y-6">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between mb-1">
              <span className="text-lg font-medium text-gray-700">{skill.name}</span>
              <span className="text-sm text-gray-500">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}
                className="bg-indigo-500 h-4 rounded-full"
              />
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;
