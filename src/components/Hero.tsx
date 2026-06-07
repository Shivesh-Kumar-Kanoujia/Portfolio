import { motion, type Variants } from 'framer-motion';
import { ArrowRight, Download, Mail } from 'lucide-react';
import Canvas3D from './Canvas3D';
import MagneticButton from './MagneticButton';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-background">
      {/* Subtle radial glow */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center relative z-10 h-full">
        
        {/* Left Content */}
        <motion.div 
          className="w-full md:w-[55%] flex flex-col items-start"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Profile Photo - Premium presentation */}
          <motion.div variants={itemVariants} className="mb-8 relative group">
            <div className="w-24 h-24 md:w-28 md:h-28 rounded-[20px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 bg-white relative z-10 transition-all duration-500 group-hover:scale-105 group-hover:-rotate-2 group-hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)]">
              <img 
                src={`${import.meta.env.BASE_URL}images/profile.jpg`} 
                alt="Shivesh Kumar Kanoujia" 
                className="w-full h-full object-cover saturate-0 group-hover:saturate-100 transition-all duration-700"
                onError={(e) => {
                  e.currentTarget.src = "https://ui-avatars.com/api/?name=SK&background=2563EB&color=fff&size=200";
                }}
              />
            </div>
            {/* Subtle backlight */}
            <div className="absolute inset-0 bg-primary/20 blur-xl rounded-[20px] scale-90 -z-10 group-hover:scale-110 group-hover:bg-primary/30 transition-all duration-500" />
          </motion.div>

          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface text-secondary text-xs font-semibold tracking-wide uppercase mb-6 shadow-sm border border-gray-100">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Available for opportunities
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-[2.75rem] md:text-6xl lg:text-7xl font-extrabold tracking-tight text-text leading-[1.1] mb-6"
          >
            Building intelligent software <br />
            that transforms ideas into <br />
            <span className="text-primary relative inline-block">
              real-world experiences.
              <span className="absolute -bottom-2 left-0 w-full h-[6px] md:h-[8px] bg-primary/10 rounded-full" />
            </span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-lg md:text-xl text-secondary leading-relaxed max-w-2xl mb-6">
            I'm Shivesh Kumar Kanoujia,<br />
            a B.Tech CSE (AI & ML) student focused on<br />
            full-stack development, AI-powered applications,<br />
            and creating impactful software experiences.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-2 md:gap-3 mb-8 text-lg md:text-xl text-text font-medium">
            <span>B.Tech CSE (AI & ML)</span>
            <span className="hidden md:inline text-gray-300">•</span>
            <span className="text-secondary">Full Stack Developer</span>
            <span className="hidden md:inline text-gray-300">•</span>
            <span className="text-secondary">AI Enthusiast</span>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 mt-4">
            <MagneticButton href="#projects">
              <span className="group flex items-center gap-2 px-7 py-4 bg-text text-white rounded-full font-medium hover:bg-text/90 shadow-[0_4px_14px_0_rgb(17,24,39,0.39)] transition-all duration-300">
                View Projects
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </MagneticButton>
            <MagneticButton href={`${import.meta.env.BASE_URL}resume.pdf`} target="_blank" rel="noopener noreferrer">
              <span className="flex items-center gap-2 px-7 py-4 bg-surface text-text border border-gray-200 rounded-full font-medium shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:border-gray-300 transition-all duration-300">
                <Download size={18} />
                Resume
              </span>
            </MagneticButton>
            <MagneticButton href="#contact">
              <span className="flex items-center gap-2 px-7 py-4 bg-surface text-text border border-gray-200 rounded-full font-medium shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:border-gray-300 transition-all duration-300">
                <Mail size={18} />
                Contact
              </span>
            </MagneticButton>
          </motion.div>
        </motion.div>

        {/* Right 3D Visual */}
        <div className="w-full md:w-[45%] relative h-[40vh] md:h-auto hidden md:block mt-12 md:mt-0">
           <Canvas3D />
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-secondary"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-secondary/60">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-secondary/50 to-transparent origin-top animate-pulse" />
      </motion.div>
    </section>
  );
};

export default Hero;
