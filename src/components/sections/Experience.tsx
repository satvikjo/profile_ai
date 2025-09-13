import React from 'react';
import { motion } from 'framer-motion';

import UBLogo from '/src/assets/logos/ub.png';
import FinstackLogo from '/src/assets/logos/finstack.jpeg';
import ExposysLogo from '/src/assets/logos/exposys.png';

const experience = [
  {
    role: "Graduate Research Assistant",
    company: "University at Buffalo, Buffalo, NY",
    logo: UBLogo,
    period: "Jan 2024 – Present",
    responsibilities: [
    "Architected and deployed a GenAI-powered RAG pipeline using Amazon Bedrock, AWS Lambda, and OpenSearch to enable semantic search over academic research, boosting retrieval accuracy by 95%.",
    "Implemented security controls with AWS IAM and API Gateway to protect sensitive data, ensuring compliance with university research data handling policies.",
    "Optimized LLM performance with prompt engineering and fine-tuning techniques, reducing hallucinations and improving response relevance by 30%.",
    "Collaborated with faculty researchers to translate domain-specific requirements into scalable cloud-native solutions, accelerating research workflows."
  ]
  },
  {
    role: "Associate Software Engineer",
    company: "Finstack Solutions Pvt. Ltd., Hyderabad, India",
    logo: FinstackLogo,
    period: "Jun 2022 – Dec 2023",
    responsibilities: [
    "Automated CI/CD workflows using GitHub Actions for Dev, QA, and Prod environments, reducing manual deployment efforts by 95% and achieving a 99.9% release success rate.",
    "Implemented Infrastructure as Code (IaC) using AWS CDK to provision and manage serverless resources such as Lambda, S3, and IAM, ensuring 100% configuration consistency.",
    "Developed and deployed secure, serverless APIs with AWS Lambda and API Gateway, cutting operational costs by 30% and reducing latency by 40%.",
    "Conducted architecture reviews and optimized system design for high availability, scalability, and compliance in enterprise environments.",
    "Integrated monitoring and alerting solutions using CloudWatch and Splunk, reducing mean time to issue detection by 60%."
  ]
  },
  {
    role: "Web Developer Intern",
    company: "Exposys Data Labs, India",
    logo: ExposysLogo,
    period: "May 2022 – Jun 2022",
    responsibilities: [
      "Developed responsive web applications using HTML, CSS, JavaScript, and Bootstrap with seamless cross-browser compatibility.",
      "Integrated dynamic features and real-time content updates to improve user interaction and reduce bounce rates.",
      "Collaborated on backend API consumption and implemented client-facing components that enhanced user accessibility.",
      "Participated in UI/UX refinement and performance optimization, resulting in smoother user workflows and reduced page load times.",
      "Conducted unit and functional testing to validate feature stability prior to deployment."
    ]
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-0 px-4">
      {/* Section Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center justify-center mb-4">
          <h2 className="text-4xl font-xl text-gray-800">Experience</h2>
        </div>
        <div className="w-28 h-1 mx-auto bg-blue-600 rounded-full animate-pulse" />
      </div>

      {/* Timeline */}
      <div className="relative max-w-6xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 z-0" />

        <div className="flex flex-col gap-20">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative w-full flex flex-col md:flex-row items-start ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
            >
              {/* Dot on timeline */}
              <div className="absolute left-1/2 top-10 transform -translate-x-1/2 w-5 h-5 bg-blue-600 rounded-full border-4 border-white z-10" />

              {/* Logo on opposite side - Changed mt-10 to mt-16 */}
              <div className={`hidden md:flex w-1/3 ${index % 2 === 0 ? 'order-2 pl-6 justify-start' : 'order-1 pr-6 justify-end'} items-center mt-16`}>
                <img src={exp.logo} alt={`${exp.company} logo`} className="w-20 h-20 object-contain" />
              </div>

              {/* Card */}
              <div className={`bg-white border border-gray-200 shadow-lg rounded-xl p-6 w-full md:w-2/3 z-10 ${index % 2 === 0 ? 'order-1 mr-auto' : 'order-2 ml-auto'}`}>
                <h3 className="text-xl md:text-2xl font-xl text-gray-800">{exp.role}</h3>
                <p className="text-blue-700 text-base font-medium">{exp.company}</p>
                <p className="text-sm text-gray-500 mt-1">{exp.period}</p>
                <ul className="list-disc pl-5 mt-4 space-y-2 text-gray-700 text-sm md:text-base">
                  {exp.responsibilities.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
