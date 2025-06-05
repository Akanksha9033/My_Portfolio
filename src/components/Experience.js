import React from "react";

const Experience = () => {
  return (
    <section id="experience" className="py-16 px-6 bg-indigo-50 scroll-mt-24">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Work Experience</h2>

      <div className="max-w-4xl mx-auto space-y-8">
        {/* Edzest */}
        <div className="bg-white p-6 rounded-xl shadow border-l-4 border-indigo-500">
          <h3 className="text-xl font-semibold text-indigo-700">
            Software Engineer – Full Stack Developer
          </h3>
          <p className="text-sm text-gray-600">Edzest Education Services Pvt. Ltd.</p>
          <p className="text-sm text-gray-500 mb-3">June 2024 – Present</p>
          <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
            <li>Developed features for LMS, mock tests, and event management using React, Node.js, and MongoDB.</li>
            <li>Collaborated with UI/UX and backend teams to deliver scalable and responsive web apps.</li>
            <li>Integrated third-party services and optimized performance and security.</li>
          </ul>
        </div>

        {/* Tranz 1 Digital */}
        <div className="bg-white p-6 rounded-xl shadow border-l-4 border-purple-500">
          <h3 className="text-xl font-semibold text-purple-700">
            Power BI Developer (Intern / Contract)
          </h3>
          <p className="text-sm text-gray-600">Tranz 1 Digital Pvt. Ltd.</p>
          <p className="text-sm text-gray-500 mb-3">July 2023 – January 2024</p>
          <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
            <li>Built dashboards and reports for business analytics projects.</li>
            <li>Designed visualizations, implemented DAX measures, and optimized data models.</li>
            <li>Gathered stakeholder requirements and delivered data-driven insights.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
