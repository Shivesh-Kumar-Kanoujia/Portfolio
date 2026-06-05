import { useEffect } from 'react';
import Lenis from 'lenis';
import Hero from './components/Hero';
import Journey from './components/Journey';
import Skills from './components/Skills';
import CurrentlyBuilding from './components/CurrentlyBuilding';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-background text-text min-h-screen selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <Journey />
        <Skills />
        <CurrentlyBuilding />
        <Projects />
        <Certifications />
      </main>
      <Contact />
    </div>
  );
}

export default App;
