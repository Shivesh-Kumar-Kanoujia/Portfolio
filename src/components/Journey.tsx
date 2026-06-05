import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const timeline = [
  {
    year: '2022 - 2025',
    title: 'Senior Secondary Education',
    company: 'High School',
    description: 'Completed with a strong focus on Computer Science and Mathematics, building the foundational logic for programming.',
    type: 'education'
  },
  {
    year: '2026',
    title: 'Full Stack Developer',
    company: 'Freelance / Open Source',
    description: 'Built and contributed to various open-source projects. Architected scalable web applications using React, Node.js, and MongoDB.',
    type: 'experience'
  },
  {
    year: '2026 - Present',
    title: 'B.Tech CSE (AI & ML)',
    company: 'University / Institute',
    description: 'Specializing in Artificial Intelligence and Machine Learning, focusing on deep learning, neural networks, and scalable web applications.',
    type: 'education'
  }
];

const Journey = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="journey" className="py-32 bg-surface border-t border-gray-100" ref={containerRef}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-20 md:mb-32">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-sm font-semibold tracking-widest text-primary uppercase mb-3"
          >
            01. Journey
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-text tracking-tight mb-6"
          >
            My Path So Far
          </motion.h3>
        </div>

        <div className="max-w-4xl mx-auto relative">
          
          {/* Animated Timeline Track */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gray-100 rounded-full overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 right-0 bg-gradient-to-b from-primary via-primary to-primary/20 w-full origin-top"
              style={{ scaleY, bottom: 0 }}
            />
          </div>

          <div className="space-y-12 md:space-y-24">
            {timeline.map((item, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className={`relative flex items-center justify-between md:justify-normal w-full ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Glowing Node */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 flex items-center justify-center z-10">
                    <motion.div 
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: false, margin: "-20%" }}
                      transition={{ type: "spring", delay: 0.2 }}
                      className="w-4 h-4 rounded-full bg-white border-4 border-primary shadow-[0_0_20px_rgba(37,99,235,0.6)]"
                    />
                  </div>

                  {/* Empty space for alternating layout on desktop */}
                  <div className="hidden md:block w-5/12" />

                  {/* Card Content */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? 50 : -50, y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: "-15%" }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                    className="w-[calc(100%-3rem)] md:w-5/12 ml-12 md:ml-0 group"
                  >
                    <div className="bg-background border border-gray-100 p-8 rounded-3xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-500 relative overflow-hidden">
                      {/* Subtle hover gradient background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                      
                      <div className="flex flex-col mb-4 relative z-10">
                        <span className="text-primary font-bold text-sm tracking-wider uppercase mb-2 flex items-center gap-2">
                          <span className="w-8 h-[1px] bg-primary/30" />
                          {item.year}
                        </span>
                        <h4 className="text-xl md:text-2xl font-bold text-text mb-1 tracking-tight">{item.title}</h4>
                        <span className="text-secondary font-medium">{item.company}</span>
                      </div>
                      <p className="text-secondary leading-relaxed relative z-10">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
