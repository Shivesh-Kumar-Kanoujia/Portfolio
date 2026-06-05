import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Atlas – AI Powered Smart Travel Guide',
    description: 'A comprehensive travel companion powered by artificial intelligence. Features intelligent itinerary generation, real-time translating capabilities, local currency conversion, and dynamic point-of-interest recommendations based on user preferences. Built with a scalable microservices architecture to ensure seamless performance.',
    tech: ['React.js', 'Node.js', 'MongoDB', 'OpenAI API', 'Azure Maps'],
    github: 'https://github.com/shivesh-kanoujia',
    demo: '#',
    image: '/images/atlas.png',
    featured: true
  },
  {
    title: 'Personal Expense Tracker',
    description: 'An elegant financial dashboard for tracking daily expenses, managing budgets, and visualizing spending habits over time. Includes categorised breakdown charts and predictive spending alerts.',
    tech: ['Next.js', 'TailwindCSS', 'PostgreSQL', 'Prisma'],
    github: 'https://github.com/shivesh-kanoujia',
    demo: '#',
    image: '/images/expense.png',
    featured: false
  },
  {
    title: 'Perception Analyzer',
    description: 'A sentiment analysis tool that processes social media feeds and news articles to gauge public opinion on specific topics or brands in real-time. Features interactive data visualizations.',
    tech: ['Python', 'Flask', 'React', 'NLTK', 'D3.js'],
    github: 'https://github.com/shivesh-kanoujia',
    demo: '#',
    image: '/images/perception.png',
    featured: false
  }
];

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
  image: string;
  featured: boolean;
}

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const isFeatured = project.featured;

  // Apply subtle tilt effect on mouse move
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -2; // max rotation 2deg
    const rotateY = ((x - centerX) / centerX) * 2;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)`;
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`group relative bg-surface border border-gray-100 rounded-3xl overflow-hidden flex flex-col ${isFeatured ? 'lg:flex-row lg:col-span-2 shadow-[0_8px_30px_rgba(0,0,0,0.06)]' : 'col-span-1 shadow-[0_2px_10px_rgba(0,0,0,0.02)]'} transition-all duration-300 ease-out`}
    >
      {/* Image Container */}
      <div className={`relative overflow-hidden bg-gray-100 ${isFeatured ? 'lg:w-[55%] h-64 lg:h-auto' : 'w-full h-56 md:h-64'}`}>
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          onError={(e) => {
            e.currentTarget.src = `https://ui-avatars.com/api/?name=${project.title.charAt(0)}&background=f3f4f6&color=9ca3af&size=800`;
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </div>

      {/* Content Container */}
      <div className={`flex flex-col justify-center p-8 lg:p-10 ${isFeatured ? 'lg:w-[45%]' : 'w-full'}`}>
        {isFeatured && (
          <div className="mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
              Featured Project
            </span>
          </div>
        )}
        
        <h4 className="text-2xl font-bold text-text mb-4 leading-tight group-hover:text-primary transition-colors">{project.title}</h4>
        
        <p className="text-secondary leading-relaxed mb-8 flex-grow text-sm md:text-base">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map((tech: string, i: number) => (
            <span key={i} className="px-3 py-1 bg-background border border-gray-200 text-secondary text-xs font-medium rounded-full cursor-default">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 mt-auto">
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center justify-center w-11 h-11 bg-background border border-gray-200 rounded-full text-text hover:bg-text hover:text-white hover:border-text transition-all duration-300 shadow-sm hover:-translate-y-1"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
          </a>
          <a 
            href={project.demo} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center justify-center w-11 h-11 bg-background border border-gray-200 rounded-full text-text hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-sm hover:-translate-y-1"
          >
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-32 bg-background border-t border-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-sm font-semibold tracking-widest text-primary uppercase mb-3"
          >
            03. Work
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-text tracking-tight mb-6"
          >
            Selected Projects
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
