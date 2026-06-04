import { motion } from 'framer-motion';

const Navbar = () => {
  const navLinks = [
    { name: 'Journey', href: '#journey' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
  ];

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 mix-blend-difference text-white"
    >
      {/* Since mix-blend-difference is used, text-white over light background turns black. Over dark backgrounds, it turns white. Very premium feel. */}
      <a href="#" className="text-xl font-bold tracking-tight mix-blend-difference">
        SKK
      </a>
      
      <nav className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-sm font-medium opacity-80 hover:opacity-100 transition-opacity"
          >
            {link.name}
          </a>
        ))}
      </nav>

      <a 
        href="#contact"
        className="px-5 py-2 text-sm font-medium rounded-full border border-white/20 hover:bg-white hover:text-black transition-colors duration-300"
      >
        Let's Connect &rarr;
      </a>
    </motion.header>
  );
};

export default Navbar;
