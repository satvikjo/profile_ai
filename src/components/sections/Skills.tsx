import React from 'react';
import { Code2, Database, Layout, Server } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code2 className="text-blue-600" size={24} />,
      skills: ["Python", "JavaScript", "TypeScript", "SQL", "Java", "C++"]
    },
    {
      title: "Frontend Development",
      icon: <Layout className="text-blue-600" size={24} />,
      skills: ["HTML", "CSS", "React", "Angular", "Next.js", "Tailwind CSS", "Vue.js"]
    },
    {
      title: "Backend Development",
      icon: <Server className="text-blue-600" size={24} />,
      skills: ["Node.js", "Express.js", "Flask", "REST APIs", "Microservices"]
    },
    {
      title: "Databases",
      icon: <Database className="text-blue-600" size={24} />,
      skills: ["MongoDB", "PostgreSQL", "DynamoDB", "MySQL", "Firebase"]
    },
    {
      title: "Cloud & DevOps",
      icon: <Server className="text-blue-600" size={24} />,
      skills: ["AWS (EC2, S3, Lambda, DynamoDB)", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "GCP Cloud", "Azure Services"]
    },
    {
      title: "Tools & Platforms",
      icon: <Code2 className="text-blue-600" size={24} />,
      skills: ["Git", "GitHub", "VS Code", "Postman", "Figma", "Netlify", "Vercel", "Linux"]
    },
    {
      title: "Software Practices & APIs",
      icon: <Code2 className="text-blue-600" size={24} />,
      skills: ["WebSocket", "JWT", "OAuth", "CI/CD", "Agile"]
    },
    {
      title: "AI/ML Frameworks & Libraries",
      icon: <Code2 className="text-blue-600" size={24} />,
      skills: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenCV", "Pandas", "NumPy", "Matplotlib", "Seaborn"]
    }
  ];

  return (
    <section id="skills" className="py-28 px-6 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold text-gray-800 mb-2">Technical Skills</h2>
        <div className="w-24 h-1 mx-auto bg-blue-600 rounded-full animate-pulse" />
      </div>
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-8">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className="w-full sm:w-[45%] lg:w-[30%] bg-white border border-gray-200 p-6 rounded-xl shadow-md hover:shadow-lg transition"
          >
            <div className="flex items-center mb-3">
              {category.icon}
              <h3 className="text-lg font-semibold text-blue-800 ml-3">{category.title}</h3>
            </div>
            <div className="grid grid-cols-2 gap-x-3 gap-y-1 text-sm text-gray-700">
              {category.skills.map((skill, i) => (
                <div key={i} className="before:content-['•'] before:mr-2 before:text-blue-500">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
