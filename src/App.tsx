import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loader from './components/Loader';
import Cursor from './components/Cursor';
import Hero from './sections/Hero';
import About from './sections/About';
import Journey from './sections/Journey';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Achievements from './sections/Achievements';
import Testimonials from './sections/Testimonials';
import CTA from './sections/CTA';
import Contact from './sections/Contact';
import { useScroll } from './hooks/useScroll';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Initializes Lenis smooth scrolling for the entire document lifecycle.
  useScroll();

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isLoading]);

  return (
    <>
      <Loader isLoading={isLoading} />
      <Cursor />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Journey />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Testimonials />
        <CTA />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;