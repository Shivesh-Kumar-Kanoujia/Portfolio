import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Atlas \u2013 AI Powered Smart Travel Guide',
    description: 'Full-stack travel assistance app with real-time translation, speech processing and personalized recommendations.',
    tech: ['Python', 'JavaScript', 'HTML', 'CSS'],
    image: '/images/atlas.png',
    github: '#'
  },
  {
    title: 'Personal Expense Tracker',
    description: 'Expense management system with data analysis and visualizations to help track and optimize spending.',
    tech: ['Flask', 'Pandas', 'NumPy', 'Matplotlib'],
    image: '/images/expense.png',
    github: '#'
  },
  {
    title: 'Perception Analyzer',
    description: 'Multimodal perception analysis tool with sentiment analysis and key phrase extraction using Azure AI.',
    tech: ['Python', 'Azure AI'],
    image: '/images/perception.png',
    github: '#'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 relative bg-white">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="mb-16 md:mb-24">
          <h2 className="text-sm font-semibold tracking-widest text-primary uppercase mb-3">03. Projects</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-text tracking-tight mb-6">Featured Work</h3>
        </div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const isEven = index % 2 === 0;

  return (
    <div 
      ref={ref}
      className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20 group`}
    >
      
      {/* Image Side */}
      <motion.div 
        style={{ y }}
        className="w-full lg:w-3/5 overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-700 relative"
      >
        <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500 z-10 mix-blend-overlay pointer-events-none" />
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-[300px] md:h-[450px] object-cover object-top scale-[1.02] group-hover:scale-105 transition-transform duration-700 ease-out"
        />
      </motion.div>

      {/* Content Side */}
      <div className={`w-full lg:w-2/5 flex flex-col ${isEven ? 'items-start' : 'items-start lg:items-end lg:text-right'}`}>
        <h4 className="text-2xl md:text-3xl font-bold text-text mb-4">{project.title}</h4>
        
        <div className="bg-gray-50/80 backdrop-blur-md p-6 rounded-xl border border-gray-100 shadow-sm mb-6 relative z-20">
          <p className="text-secondary text-base leading-relaxed">
            {project.description}
          </p>
        </div>

        <div className={`flex flex-wrap gap-2 mb-8 ${!isEven && 'lg:justify-end'}`}>
          {project.tech.map((tech: string) => (
            <span key={tech} className="text-xs font-mono font-medium text-primary bg-primary/5 px-3 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <a href={project.github} className="p-3 bg-white border border-gray-200 rounded-full text-text hover:bg-gray-50 hover:text-primary hover:border-primary/30 transition-all shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
          </a>
          <a href="#" className="p-3 bg-white border border-gray-200 rounded-full text-text hover:bg-gray-50 hover:text-primary hover:border-primary/30 transition-all shadow-sm">
            <ExternalLink size={20} />
          </a>
        </div>
      </div>

    </div>
  );
};

export default Projects;
