import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail } from 'lucide-react';
import Canvas3D from './Canvas3D';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-background to-background -z-10" />
      
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center relative z-10">
        
        {/* Left Content */}
        <motion.div 
          className="w-full md:w-1/2 flex flex-col items-start pt-10 md:pt-0"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Available for opportunities
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold tracking-tight text-text leading-[1.1] mb-6"
          >
            Shivesh Kumar <br />
            <span className="text-primary">Kanoujia</span>
          </motion.h1>

          <motion.div variants={itemVariants} className="space-y-2 mb-8 text-lg md:text-xl text-secondary font-medium">
            <p className="text-text">B.Tech CSE (AI & ML)</p>
            <p>Full Stack Developer</p>
            <p>AI Enthusiast</p>
          </motion.div>

          <motion.p variants={itemVariants} className="text-secondary max-w-md mb-10 text-base leading-relaxed">
            I build intelligent applications and modern web experiences that combine technology with meaningful impact.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4">
            <a href="#projects" className="group flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-blue-700 transition-colors">
              View Projects
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-white text-text border border-gray-200 rounded-full font-medium shadow-sm hover:shadow-md hover:border-gray-300 transition-all">
              <Download size={16} />
              Resume
            </a>
            <a href="#contact" className="flex items-center gap-2 px-6 py-3 bg-white text-text border border-gray-200 rounded-full font-medium shadow-sm hover:shadow-md hover:border-gray-300 transition-all">
              <Mail size={16} />
              Contact
            </a>
          </motion.div>
        </motion.div>

        {/* Right 3D Visual */}
        <div className="w-full md:w-1/2 relative h-[50vh] md:h-auto hidden md:block">
           <Canvas3D />
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-xs uppercase tracking-widest font-medium">Scroll to explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-text to-transparent origin-top animate-pulse" />
      </motion.div>
    </section>
  );
};

export default Hero;
