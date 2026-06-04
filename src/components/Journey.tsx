import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const milestones = [
  {
    year: '2025 - Present',
    title: 'Started B.Tech CSE (AI & ML)',
    description: 'Enrolled at Chandigarh University in B.Tech Computer Science Engineering specializing in AI & ML.',
  },
  {
    year: 'Early 2025',
    title: 'Learned Python & C++',
    description: 'Deep-dived into core programming languages, building a strong foundation in data structures, algorithms, and OOP principles.',
  },
  {
    year: 'Mid 2025',
    title: 'Started building projects',
    description: 'Transitioned from learning to building. Created functional applications applying learned concepts to real-world scenarios.',
  },
  {
    year: 'Late 2025',
    title: 'Worked with Azure technologies',
    description: 'Explored Cloud & AI. Integrated Azure Cognitive Services into projects, building intelligent applications.',
  },
  {
    year: '2026',
    title: 'Built intelligent applications',
    description: 'Developed advanced systems like Atlas (Smart Travel Guide) and Perception Analyzer, combining full-stack dev with AI.',
  },
  {
    year: 'Future Goal',
    title: 'Build impactful software',
    description: 'Continuously learning and improving problem-solving skills to build software that creates meaningful impact.',
  },
];

const Journey = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section id="journey" className="py-32 relative bg-white" ref={containerRef}>
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        
        <div className="mb-16 md:mb-24">
          <h2 className="text-sm font-semibold tracking-widest text-primary uppercase mb-3">01. Journey</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-text tracking-tight mb-6">The Path So Far</h3>
          <p className="text-lg text-secondary max-w-2xl">
            A cinematic timeline of my educational and professional growth, driven by curiosity and a passion for technology.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[15px] md:left-[19px] top-0 bottom-0 w-[2px] bg-gray-100" />
          
          {/* Animated Line Progress */}
          <motion.div 
            className="absolute left-[15px] md:left-[19px] top-0 w-[2px] bg-primary origin-top"
            style={{ height: lineHeight }}
          />

          <div className="space-y-16">
            {milestones.map((milestone, index) => (
              <JourneyItem key={index} milestone={milestone} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

const JourneyItem = ({ milestone }: { milestone: any }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 85%', 'center center'],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [40, 0]);

  return (
    <motion.div 
      ref={ref}
      style={{ opacity, y }}
      className="relative pl-12 md:pl-20 group"
    >
      {/* Node indicator */}
      <div className="absolute left-[11px] md:left-[15px] top-1.5 w-[10px] h-[10px] rounded-full bg-white border-2 border-primary ring-4 ring-white z-10 group-hover:scale-150 transition-transform duration-300" />
      
      <div className="flex flex-col">
        <span className="text-sm font-medium text-primary mb-1">{milestone.year}</span>
        <h4 className="text-xl md:text-2xl font-bold text-text mb-2">{milestone.title}</h4>
        <p className="text-secondary text-base leading-relaxed">{milestone.description}</p>
      </div>
    </motion.div>
  );
};

export default Journey;
