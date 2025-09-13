import { Github, Linkedin, Mail } from 'lucide-react';
import { motion, useAnimation, useInView } from 'framer-motion';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { useCallback, useEffect, useRef, useState } from 'react';
import Typewriter from 'typewriter-effect';


const About = () => {
  const [init, setInit] = useState(false);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const particlesLoaded = useCallback(async (container: any) => {
    console.log(container);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-100 px-4 pt-20 overflow-hidden">
      {init && (
        <Particles
          className="absolute inset-0 z-0"
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={{
            fullScreen: false,
            background: {
              color: { value: 'transparent' }
            },
            particles: {
              number: { value: 40 },
              size: { value: 3 },
              move: { 
                enable: true, 
                speed: 1,
                outModes: "bounce"
              },
              links: { 
                enable: true, 
                distance: 120, 
                color: '#60a5fa', 
                opacity: 0.4, 
                width: 1 
              },
              shape: { type: 'circle' },
              opacity: { value: 0.8 },
            }
          }}
        />
      )}

      <div ref={ref} className="relative z-10 max-w-2xl w-full">
        <motion.div
          className="text-center space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.div variants={itemVariants}>
            <motion.h1
              className="text-3xl md:text-4xl font-lg text-gray-800 leading-tight mb-2"
            >
              Hi there!  <span className="text-blue-600"> I'm Satvik</span>
            </motion.h1>
          </motion.div>

          <motion.div variants={itemVariants} className="h-12 mb-2">
            <div className="text-lg text-blue-600 font-medium">
              <Typewriter
                options={{
                  strings: [
                    'Software Engineer',
                    'AI/ML Engineer',
                    'Full Stack Developer',
                    'Cloud Solutions Architect',
                    'Data Scientist',
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  deleteSpeed: 30,
                  wrapperClassName: "typewriter-text",
                  cursorClassName: "typewriter-cursor"
                }}
              />
            </div>
          </motion.div>

          <motion.div variants={itemVariants} >
            <motion.p
              className="text-base text-gray-600 leading-relaxed"
            >
              Master's student in Computer Science at University at Buffalo specializing in AI/ML. 
              Currently seeking <span className="font-semibold text-blue-700"> full-time opportunities </span> 
              in Software Development, AI Research, or Cloud-based AI Solutions.
            </motion.p>
          </motion.div>

          <motion.div
            className="flex justify-center space-x-6 pt-2"
            variants={itemVariants}
          >
            <motion.a 
              href="https://github.com/satvikjo" 
              className="text-gray-600 hover:text-gray-900 transition-colors"
              whileHover={{ y: -3 }}
            >
              <Github size={24} />
            </motion.a>
            <motion.a 
              href="https://linkedin.com/in/satvik-jonnalagadda" 
              className="text-gray-600 hover:text-gray-900 transition-colors"
              whileHover={{ y: -3 }}
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a 
              href="mailto:satvik.jonnalagadda@gmail.com" 
              className="text-gray-600 hover:text-gray-900 transition-colors"
              whileHover={{ y: -3 }}
            >
              <Mail size={24} />
            </motion.a>
          </motion.div>

          <motion.div
            className="pt-4"
            variants={itemVariants}
          >
            <motion.a
              href="https://drive.google.com/file/d/1tgzP1SzAWyEdzNq1nxd-3hMbiZCyDXj3/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 bg-blue-600 text-white text-lg font-medium rounded-md hover:bg-blue-700 transition-colors"
              whileHover={{ scale: 1.03 }}
            >
              Download Resume
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
