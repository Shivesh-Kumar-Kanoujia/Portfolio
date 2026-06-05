import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import MagneticButton from './MagneticButton';

const navLinks = [
  { name: 'Journey', href: '#journey' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certifications', href: '#certifications' },
];

const Navbar = () => {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('journey');

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  useEffect(() => {
    const sectionIds = navLinks.map(l => l.href.slice(1));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { threshold: 0.3 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach(o => o.disconnect());
  }, []);

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={twMerge(
        "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 transition-all duration-500",
        scrolled ? "bg-white/70 backdrop-blur-xl shadow-[0_1px_2px_rgba(0,0,0,0.05),0_4px_16px_rgba(0,0,0,0.02)] py-4 border-b border-gray-100/50" : "bg-transparent py-6"
      )}
    >
      <a href="#" className="text-xl font-bold tracking-tight text-text relative group">
        SKK
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
      </a>
      
      <nav className="hidden md:flex items-center gap-1 bg-surface/50 rounded-full px-2 py-1.5 border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] backdrop-blur-md">
        {navLinks.map((link) => {
          const isActive = activeSection === link.href.slice(1);
          return (
            <a
              key={link.name}
              href={link.href}
              className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                isActive ? 'text-text' : 'text-secondary hover:text-text'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="nav-active"
                  className="absolute inset-0 bg-gray-100/80 rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              {link.name}
            </a>
          );
        })}
      </nav>

      <MagneticButton href="#contact">
        <span className="px-5 py-2.5 text-sm font-medium rounded-full bg-text text-white hover:bg-text/90 shadow-[0_4px_14px_0_rgb(17,24,39,0.39)] transition-all duration-300 flex items-center">
          Let's Connect &rarr;
        </span>
      </MagneticButton>
    </motion.header>
  );
};

export default Navbar;
