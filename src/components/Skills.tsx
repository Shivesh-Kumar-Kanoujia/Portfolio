import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Languages',
    icon: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM14 2v6h6',
    description: 'Core languages for systems, algorithms, and web development.',
    skills: ['Python', 'C', 'C++', 'JavaScript']
  },
  {
    title: 'Web',
    icon: 'M12 2a10 10 0 1 0 10 10 10 10 0 0 0-10-10zm-1 17.93A8 8 0 0 1 4 12a8 8 0 0 1 .07-1M12 2v20M2 12h20',
    description: 'Building responsive interfaces and backend APIs.',
    skills: ['HTML', 'CSS', 'Flask']
  },
  {
    title: 'Libraries',
    icon: 'M4 19.5A2.5 2.5 0 0 1 6.5 17H20M20 2H4v20h16V2zM8 7h8M8 11h6',
    description: 'Data analysis, numerical computing, and visualization tools.',
    skills: ['Pandas', 'NumPy', 'Matplotlib']
  },
  {
    title: 'Cloud',
    icon: 'M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z',
    description: 'Cognitive services and cloud-based AI solutions.',
    skills: ['Azure Cognitive Services']
  },
  {
    title: 'DBMS',
    icon: 'M4 7v10c0 2 1.5 4 4 4h8c2.5 0 4-2 4-4V7c0-2-1.5-4-4-4H8c-2.5 0-4 2-4 4z',
    description: 'Relational database design, querying, and data management.',
    skills: ['SQL', 'MySQL', 'PostgreSQL']
  },
  {
    title: 'Concepts',
    icon: 'M12 2a4 4 0 0 1 4 4c0 1.5-.8 2.8-2 3.5V11a2 2 0 0 1-2 2 2 2 0 0 1-2-2V9.5C8.8 8.8 8 7.5 8 6a4 4 0 0 1 4-4zM4 20c0-3.3 2.7-6 6-6h4c3.3 0 6 2.7 6 6v1H4v-1z',
    description: 'Foundational problem-solving and software design principles.',
    skills: ['DSA', 'OOP', 'Problem Solving']
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-32 bg-background border-t border-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-sm font-semibold tracking-widest text-primary uppercase mb-3"
          >
            02. Expertise
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-text tracking-tight mb-6"
          >
            Technical Arsenal
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="bg-surface border border-gray-100 p-8 rounded-3xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-500 group"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={category.icon} />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-text">{category.title}</h4>
              </div>
              <p className="text-sm text-secondary mb-5 leading-relaxed">{category.description}</p>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx} 
                    className="px-3 py-1.5 bg-background border border-gray-100 text-secondary text-xs font-medium rounded-full group-hover:border-primary/20 hover:!bg-primary hover:!text-white hover:!border-primary transition-all duration-300 cursor-default"
                  >
                    {skill}
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
