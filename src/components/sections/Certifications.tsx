import React, { useRef } from 'react';
import { BadgeCheck, ChevronLeft, ChevronRight } from 'lucide-react';

const Certifications: React.FC = () => {
  const certifications = [
    {
      title: "Microsoft Technology Associate",
      details: [
        "Gained foundational knowledge in Python programming, including data structures, algorithms, and object-oriented programming.",
        "Demonstrated proficiency in writing, debugging, and optimizing Python code for various applications."
      ]
    },
    {
      title: "Data Bricks: Generative AI Fundamentals",
      details: [
        "Completed a comprehensive training covering key topics such as Large Language Model (LLM) applications, success strategies with generative AI, and risk assessment.",
        "Practical modules included hands-on experience with Generative Adversarial Networks (GANs) and Variational Autoencoders (VAEs) for tasks like synthetic data generation and content automation."
      ]
    },
    {
      title: "NPTEL: Big Data Computing",
      details: [
        "Acquired a deep understanding of big data technologies, including Hadoop, MapReduce, and Spark.",
        "Learned to design and implement scalable data processing systems for large datasets. Gained practical experience in data storage, retrieval, and analysis using distributed computing frameworks."
      ]
    },
    {
      title: "AWS Certified Machine Learning – Specialty",
      details: [
        "Demonstrated expertise in building, training, tuning, and deploying machine learning models on AWS.",
        "Validated knowledge of key AWS services including SageMaker, S3, IAM, and Lambda for implementing ML workflows."
      ]
    }
  ];

  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const { scrollLeft, scrollWidth, clientWidth } = container;
      const scrollAmount = direction === 'left' ? -clientWidth : clientWidth;
      const newPosition = scrollLeft + scrollAmount;

      if (direction === 'right' && scrollLeft + clientWidth >= scrollWidth) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else if (direction === 'left' && scrollLeft <= 0) {
        container.scrollTo({ left: scrollWidth, behavior: 'smooth' });
      } else {
        container.scrollTo({ left: newPosition, behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="certifications" className="py-5 px-6 bg-gray-100">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-800 mb-2">Certifications</h2>
        <div className="w-28 h-1 mx-auto mt-4 bg-blue-600 rounded-full animate-pulse" />
      </div>
      <div className="relative max-w-6xl mx-auto">
        <button onClick={() => scroll('left')} className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow">
          <ChevronLeft className="text-blue-600 w-5 h-5" />
        </button>
        <div ref={scrollRef} className="overflow-x-auto scrollbar-hide [&::-webkit-scrollbar]:hidden">
          <div className="flex gap-6 w-max px-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="min-w-[360px] max-w-[360px] bg-white rounded-2xl border border-gray-200 p-6 shadow hover:shadow-md transition duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                    <BadgeCheck className="text-purple-600 w-5 h-5" />
                  </div>
                  <h3 className="ml-4 text-lg font-semibold text-gray-800">{cert.title}</h3>
                </div>
                <ul className="list-disc list-inside text-base text-gray-700 space-y-1">
                  {cert.details.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <button onClick={() => scroll('right')} className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow">
          <ChevronRight className="text-blue-600 w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default Certifications;
