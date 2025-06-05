import React from 'react';

const Education = () => {
  return (
    <section id="education" className="py-16 px-6 bg-white scroll-mt-24">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">Education</h2>

      <div className="max-w-4xl mx-auto space-y-6">
        {/* MCA */}
        <div className="bg-indigo-50 p-6 rounded-xl shadow border-l-4 border-indigo-600">
          <h3 className="text-xl font-semibold text-indigo-700">Master of Computer Applications (MCA)</h3>
          <p className="text-md text-gray-800">Patna Women's College (PU)</p>
          <p className="text-sm text-gray-600">2021 – 2023 &nbsp; | &nbsp; CGPA: 7.8</p>
        </div>

        {/* BCA */}
        <div className="bg-indigo-50 p-6 rounded-xl shadow border-l-4 border-purple-600">
          <h3 className="text-xl font-semibold text-purple-700">Bachelor of Computer Applications (BCA)</h3>
          <p className="text-md text-gray-800">MDDM College, Muzaffarpur (BRABU)</p>
          <p className="text-sm text-gray-600">2016 – 2019 &nbsp; | &nbsp; Percentage: 73%</p>
        </div>

        {/* Intermediate */}
        <div className="bg-indigo-50 p-6 rounded-xl shadow border-l-4 border-blue-500">
          <h3 className="text-xl font-semibold text-blue-700">Intermediate (12th)</h3>
          <p className="text-md text-gray-800">Tiswara Survapur High School</p>
          <p className="text-sm text-gray-600">2016 &nbsp; | &nbsp; Percentage: 60%</p>
        </div>

        {/* High School */}
        <div className="bg-indigo-50 p-6 rounded-xl shadow border-l-4 border-pink-500">
          <h3 className="text-xl font-semibold text-pink-700">High School (10th)</h3>
          <p className="text-md text-gray-800">M A B R J High School, Bahadura</p>
          <p className="text-sm text-gray-600">2014 &nbsp; | &nbsp; Percentage: 74%</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
