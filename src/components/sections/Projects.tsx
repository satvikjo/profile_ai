import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Link } from 'lucide-react';

import doodleImg from '/src/assets/projects/doodle.png';
import cardamomImg from '/src/assets/projects/cardamom.png';
import houseImg from '/src/assets/projects/house.png';
import drowsinessImg from '/src/assets/projects/drowsiness.png';
import cloudmartImg from '/src/assets/projects/cloudmart.png';
import editorImg from '/src/assets/projects/editor.png';
import iplImg from '/src/assets/projects/ipl.png';
import doodleVideo from '/src/assets/videos/doodle.mp4';
import houseVideo from '/src/assets/videos/house.mp4';
import cloudmartPdf from '/src/assets/docs/CloudMart.pdf';


export type Project = {
  title: string;
  description: string;
  tech: string;
  github: string;
  demo: string | null;
  image: string;
  embed?: React.ReactNode;
};

const projectsByDomain: Record<string, Project[]> = {
  'AI & ML': [
    {
      title: "Doodle AI Assistant",
      description:
        "Voice-activated desktop AI assistant for notes, email, calendar, weather, music, and reminders. Uses OpenAI and multiple APIs.",
      tech:
        "Tech Stack: Python, OpenAI GPT-3.5, Gmail & Google Calendar API, Tkinter, Spotify API, SpeechRecognition, Porcupine",
      github: "https://github.com/satvikjo/Doodle-AI-Assistant",
      demo: null,
      image: doodleImg,
      embed: (
        <a href={doodleVideo} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline inline-flex items-center">
          <Link className="w-4 h-4 mr-1" /> Watch Demo
        </a>
      )
    },
    {
      title: "Cardamom Leaf Disease Detection",
      description:
        "Deep learning-based leaf classification using CNN, VGG, ResNet to automate crop disease detection for precision agriculture.",
      tech:
        "Tech Stack: TensorFlow, Flask, VGG, ResNet152V2, EfficientNet, MobileNet, CNN",
      github: "https://github.com/satvikjo/cardamom_plant_repository",
      demo: null,
      image: cardamomImg
    },
    {
      title: "House Price Forecasting",
      description:
        "ML-based house price prediction app with dynamic data visualization and user-friendly input features.",
      tech:
        "Tech Stack: Python, Scikit-learn, XGBoost, Flask, HTML/CSS/JS, Matplotlib, Pandas",
      github: "https://github.com/satvikjo/house-price-prediction",
      demo: null,
      image: houseImg,
      embed: (
        <a href={houseVideo} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline inline-flex items-center">
          <Link className="w-4 h-4 mr-1" /> Watch Demo
        </a>
      )
    },
    {
      title: "Drowsiness Detection System Using Hybrid Deep Learning and Facial Features",
      description:
        "Real-time drowsiness detection using facial landmarks and eye aspect ratio tracking to prevent driver fatigue. Supports alarm triggering and frame-wise analysis.",
      tech:
        "Tech Stack: Python, OpenCV, Dlib, PyTorch, Deep Learning, Haar cascades, GUI (Tkinter)",
      github: "https://github.com/satvikjo/Drowsiness-Detection",
      demo: null,
      image: drowsinessImg
    }
  ],
  'Full Stack & DevOps': [
    {
      title: "CloudMart – MultiCloud, DevOps & AI-Powered E-commerce Platform",
      description:
        "AI-powered e-commerce app with personalized recommendations (Bedrock) and GPT-4o chatbot support. Deployed on AWS EC2, S3, Lambda, DynamoDB using Terraform, Kubernetes (EKS), and Docker.",
      tech:
        "Tech Stack: Vue.js, Node.js, AWS (EC2, Lambda, S3, DynamoDB), Kubernetes, Terraform, OpenAI API, Amazon Bedrock",
      github: "https://github.com/satvikjo/cloudmart",
      demo: null,
      image: cloudmartImg,
      embed: (
        <a href={cloudmartPdf} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline inline-flex items-center">
          <Link className="w-4 h-4 mr-1" /> View Presentation
        </a>
      )
    },
    {
      title: "Real Time Collaborative Editor",
      description:
        "Multi-user editor supporting real-time syncing, versioning, authentication, and live cursor tracking using WebSockets.",
      tech:
        "Tech Stack: React, Node.js, Express, MongoDB, JWT, WebSocket, Mongoose",
      github: "https://github.com/satvikjo/realtime-collaborative-editor",
      demo: null,
      image: editorImg
    },
    {
      title: "Cricket Match Insights: IPL Edition",
      description:
        "Interactive app showing IPL match statistics using PostgreSQL and Node.js with visual filtering by season and metric.",
      tech:
        "Tech Stack: PostgreSQL, Node.js, HTML, CSS, Git",
      github: "https://github.com/satvikjo/Cricket-Insights-IPL",
      demo: null,
      image: iplImg
    }
  ]
};


const Projects = () => {
  const [activeTab, setActiveTab] = useState('All');

  const filteredProjects =
    activeTab === 'All'
      ? Object.values(projectsByDomain).flat()
      : projectsByDomain[activeTab] || [];

  return (
    <section id="projects" className="py-0 px-4">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-xl text-gray-800 inline-flex items-center">
          Projects
        </h2>
        <div className="w-28 h-1 mx-auto mt-4 bg-blue-600 rounded-full animate-pulse" />
      </div>

      {/* Tabs */}
      <div className="flex justify-center mb-12 gap-4 flex-wrap">
        {['All', 'AI & ML', 'Full Stack & DevOps'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2 rounded-full font-medium border transition duration-200 ${
              activeTab === tab
                ? 'bg-blue-600 text-white border-blue-600'
                : 'bg-white text-blue-600 border-blue-200 hover:bg-blue-50'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <div className="max-w-4xl mx-auto grid gap-10 md:grid-cols-2">
        {filteredProjects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition duration-300"
          >
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
            )}
            <h4 className="text-xl font-xl text-gray-800 mb-2">{project.title}</h4>
            <p className="text-gray-600 text-sm mb-3">{project.description}</p>
            <p className="text-sm text-gray-500 italic mb-4"> {project.tech}</p>
            <div className="flex items-center gap-4 mt-4">
              <a
                href={project.github}
                className="text-blue-600 hover:underline inline-flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-4 h-4 mr-1" /> View Code
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  className="text-blue-600 hover:underline inline-flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Link className="w-4 h-4 mr-1" /> Live Demo
                </a>
              )}
            </div>
            {project.embed && (
              <div className="mt-2">{project.embed}</div>
            )}

          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
