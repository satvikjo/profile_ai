import React from 'react';
import {
  MapPin,
  Film,
  Gamepad2,
  BrainCircuit,
  Github
} from 'lucide-react';

const Interests: React.FC = () => {
  const interests = [
    {
      icon: <Github size={24} className="text-blue-600" />,
      title: 'Open Source Contributions',
      description:
        'Actively contribute to open-source projects, exploring collaborative software development.',
    },
    {
      icon: <BrainCircuit size={24} className="text-blue-600" />,
      title: 'Problem Solving',
      description:
        'Enjoy solving complex coding challenges and algorithmic problems.',
    },
    {
      icon: <MapPin size={24} className="text-blue-600" />,
      title: 'Travel',
      description: 'Love exploring new places and cultures, and capturing memories.',
    },
    {
      icon: <Gamepad2 size={24} className="text-blue-600" />,
      title: 'Playing Chess',
      description: 'Enjoy strategic thinking and competitive play.',
    },
    {
      icon: <Film size={24} className="text-blue-600" />,
      title: 'Watching Movies',
      description: 'Enjoy storytelling through cinema, especially thrillers and sci-fi.',
    },
  ];

  return (
    <section id="interests" className="py-5 px-6 bg-gray-100">
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold text-gray-800 mb-2">Interests</h2>
        <div className="w-28 h-1 mx-auto mt-4 bg-blue-600 rounded-full animate-pulse" />
      </div>

      <div className="max-w-4xl mx-auto divide-y divide-gray-200">
        {interests.map((interest, idx) => (
          <div key={idx} className="flex items-start gap-4 py-6">
            <div className="mt-1">{interest.icon}</div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">{interest.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{interest.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Interests;
