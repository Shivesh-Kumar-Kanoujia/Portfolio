import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const skillsData = [
  {
    category: 'Languages',
    items: ['Python', 'C', 'C++', 'JavaScript'],
  },
  {
    category: 'Web',
    items: ['HTML', 'CSS', 'Flask'],
  },
  {
    category: 'Libraries',
    items: ['Pandas', 'NumPy', 'Matplotlib'],
  },
  {
    category: 'Cloud',
    items: ['Azure Cognitive Services'],
  },
  {
    category: 'Concepts',
    items: ['DSA', 'OOP', 'Problem Solving'],
  },
];

const Skills = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section id="skills" className="py-32 relative bg-background overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <div className="mb-16 md:mb-24 text-center">
          <h2 className="text-sm font-semibold tracking-widest text-primary uppercase mb-3">02. Skills</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-text tracking-tight mb-6">Technical Arsenal</h3>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            A comprehensive overview of the languages, frameworks, and concepts I use to build robust and scalable applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              style={{ y: index % 2 === 0 ? y1 : y2 }}
              className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 group"
            >
              <h4 className="text-xl font-bold text-text mb-6 group-hover:text-primary transition-colors">
                {skillGroup.category}
              </h4>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((item) => (
                  <span 
                    key={item} 
                    className="px-4 py-2 bg-gray-50 text-secondary text-sm font-medium rounded-lg group-hover:bg-primary/5 group-hover:text-text transition-colors duration-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
