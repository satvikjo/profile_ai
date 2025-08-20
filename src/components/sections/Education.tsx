import React from 'react';
import { motion } from 'framer-motion';

import UBLogo from '/src/assets/logos/ub.png';
import ANULogo from '/src/assets/logos/bec.png';

const Education: React.FC = () => {
  const education = [
    {
      school: "University at Buffalo, The State University of New York",
      logo: UBLogo,
      degree: "Master of Science in Computer Science",
      specialization: "Specialization in AI & Machine Learning",
      year: "Jan 2024 – May 2025",
      gpa: "GPA: 3.70 / 4.0",
      align: "left"
    },
    {
      school: "Acharya Nagarjuna University, Guntur, India",
      logo: ANULogo,
      degree: "Bachelor of Technology in Computer Science & Engineering",
      specialization: "Specialization in Machine Learning",
      year: "Aug 2019 – Jun 2023",
      gpa: "GPA: 8.79 / 10.0",
      align: "right"
    }
  ];

  return (
    <section id="education" className="py-0 px-4">
      {/* Section Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center justify-center mb-4">
          <h2 className="text-4xl font-xl text-gray-800">Education</h2>
        </div>
        <div className="w-28 h-1 mx-auto bg-blue-600 rounded-full animate-pulse" />
      </div>

      {/* Timeline-styled cards with staggered left-right layout */}
      <div className="max-w-6xl mx-auto flex flex-col gap-16 px-0">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`bg-white border border-gray-200 shadow-lg rounded-xl p-8 w-full max-w-2xl ${edu.align === 'left' ? 'self-start' : 'self-end'}`}

          >
            <div className="flex items-center mb-4 space-x-4">
              <img
                src={edu.logo}
                alt={`${edu.school} logo`}
                className="w-12 h-12 object-contain"
              />
              <h3 className="text-lg md:text-xl font-xl text-gray-800 leading-tight">
                {edu.school}
              </h3>
            </div>
            <p className="text-gray-700 text-base font-medium">{edu.degree}</p>
            {edu.specialization ? (
              <p className="text-sm italic text-blue-600 mt-1">{edu.specialization}</p>
            ) : (
              <div className="h-5"></div> // Maintain visual balance
            )}
            <div className="flex justify-between items-center text-sm text-gray-500 mt-4">
              <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full font-medium">{edu.year}</span>
              <span className="font-semibold">{edu.gpa}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
