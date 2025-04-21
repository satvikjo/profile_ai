import Navbar from './components/Navbar';
import About from './components/sections/About';
import Education from './components/sections/Education';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Certifications from './components/sections/Certifications';
import Contact from './components/sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 via-purple-100 to-blue-100">
      <Navbar />
      <main>
        <section id="about" className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
          < About />
        </section>
        
        <section id="education" className="py-10">
          <Education />
        </section>
        
        <section id="experience" className="py-10">
          <Experience />
        </section>

        <section id="projects" className="py-10">
          <Projects />
        </section>
        
        <section id="certifications" className="py-10">
          <Certifications />
        </section>
        
        <section id="contact" className="py-10">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;
