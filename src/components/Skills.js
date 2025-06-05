import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaTools, FaUsers } from 'react-icons/fa';
import { SiMongodb, SiZoho } from 'react-icons/si';

const skills = [
  {
    title: 'Languages & Frameworks',
    color: 'from-indigo-100 to-indigo-200',
    icon: <FaReact className="text-indigo-600 text-3xl" />,
    items: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB'],
  },
  {
    title: 'Tools',
    color: 'from-pink-100 to-pink-200',
    icon: <FaTools className="text-pink-600 text-3xl" />,
    items: ['Zoho CRM'],
  },
  {
    title: 'Soft Skills',
    color: 'from-green-100 to-green-200',
    icon: <FaUsers className="text-green-600 text-3xl" />,
    items: ['Communication', 'Team Collaboration', 'Time Management'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 px-6 bg-white scroll-mt-24">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Technical Skills</h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {skills.map((group, index) => (
          <div
            key={index}
            className={`bg-gradient-to-br ${group.color} p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300`}
          >
            <div className="flex items-center gap-3 mb-4">
              {group.icon}
              <h3 className="text-xl font-semibold text-gray-800">{group.title}</h3>
            </div>
            <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
              {group.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
