import { motion } from 'framer-motion';

const certifications = [
  {
    name: 'Microsoft Azure Fundamentals (AZ-900)',
    issuer: 'Microsoft',
    icon: 'M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z'
  },
  {
    name: 'Azure AI Fundamentals (AI-900)',
    issuer: 'Microsoft',
    icon: 'M12 2l1.5 5.5L19 9l-5.5 3.5L15 18l-3-4-3 4 1.5-5.5L5 9l5.5-1.5z'
  },
  {
    name: 'IBM SkillsBuild Design Thinking Practitioner',
    issuer: 'IBM',
    icon: 'M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z'
  },
  {
    name: 'Critical Thinking in AI Era',
    issuer: 'HP Life',
    icon: 'M13 2L3 14h9l-1 8 10-12h-9l1-8z'
  },
  {
    name: 'Professional Networking for Career Growth',
    issuer: 'HP Life',
    icon: 'M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z'
  },
  {
    name: 'Data Analysis with Python',
    issuer: 'IBM',
    icon: 'M4 20h16M4 4v16m4-12v8m4-6v6m4-3v3'
  },
  {
    name: 'Data Visualization with Python',
    issuer: 'IBM',
    icon: 'M23 6l-9.5 9.5-5-5L1 18M17 6h6v6'
  },
  {
    name: 'Applied Data Science with Python',
    issuer: 'IBM',
    icon: 'M4 6c0 1.1 3.6 2 8 2s8-.9 8-2M4 6v12c0 1.1 3.6 2 8 2s8-.9 8-2V6M4 12c0 1.1 3.6 2 8 2s8-.9 8-2'
  },
  {
    name: 'SQL (Basic)',
    issuer: 'HackerRank',
    icon: 'M4 7v10c0 2 1.5 4 4 4h8c2.5 0 4-2 4-4V7c0-2-1.5-4-4-4H8c-2.5 0-4 2-4 4z'
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-32 bg-surface border-t border-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-sm font-semibold tracking-widest text-primary uppercase mb-3"
          >
            04. Certifications
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-text tracking-tight mb-6"
          >
            5+ Industry Certifications
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="text-lg text-secondary max-w-2xl mx-auto"
          >
            Validating my knowledge and skills through recognized industry certifications.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className="group flex items-start gap-5 p-6 bg-background border border-gray-100 rounded-3xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-500 cursor-default"
            >
              <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-2xl bg-white border border-gray-100 text-secondary group-hover:border-primary/20 group-hover:bg-primary/5 group-hover:text-primary transition-all duration-300 shadow-sm">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d={cert.icon} />
                </svg>
              </div>
              <div className="flex flex-col justify-center h-14">
                <h4 className="text-sm font-bold text-text mb-1 leading-tight group-hover:text-primary transition-colors line-clamp-2">{cert.name}</h4>
                <p className="text-xs font-medium tracking-wide text-secondary uppercase">{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
