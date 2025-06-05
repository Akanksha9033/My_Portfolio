import React from 'react';

const Certifications = () => {
  return (
    <section id="certifications" className="py-16 px-6 bg-white scroll-mt-24">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">Certifications</h2>

      <div className="max-w-4xl mx-auto space-y-4">
        <div className="bg-indigo-50 p-4 rounded-md shadow border-l-4 border-indigo-500">
          <h3 className="text-lg font-semibold">Full Stack Web Development</h3>
          <p className="text-sm text-gray-700">Internshala – 2022</p>
        </div>
        <div className="bg-indigo-50 p-4 rounded-md shadow border-l-4 border-indigo-500">
          <h3 className="text-lg font-semibold">Power BI Analyst</h3>
          <p className="text-sm text-gray-700">Microsoft Learn – 2023</p>
        </div>
        <div className="bg-indigo-50 p-4 rounded-md shadow border-l-4 border-indigo-500">
          <h3 className="text-lg font-semibold">Python</h3>
          <p className="text-sm text-gray-700">Internshala – 2023</p>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
