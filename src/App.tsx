import Navbar from './components/Navbar';
import About from './components/sections/About';
import Education from './components/sections/Education';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Certifications from './components/sections/Certifications';
import Contact from './components/sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <section id="about" className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
          < About />
        </section>
        
        <section id="education" className="py-20 bg-white">
          <Education />
        </section>
        
        <section id="experience" className="py-20 bg-gray-50">
          <Experience />
        </section>

        <section id="projects" className="py-20 bg-white">
          <Projects />
        </section>
        
        <section id="certifications" className="py-20 bg-gray-50">
          <Certifications />
        </section>
        
        <section id="contact" className="py-20 bg-gray-50">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;