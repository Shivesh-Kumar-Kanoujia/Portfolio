const certifications = [
  {
    name: 'Microsoft Azure Fundamentals (AZ-900)',
    issuer: 'Microsoft',
    icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5' // Abstract geometric icon placeholder
  },
  {
    name: 'Azure AI Fundamentals (AI-900)',
    issuer: 'Microsoft',
    icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'
  },
  {
    name: 'IBM SkillsBuild Design Thinking Practitioner',
    issuer: 'IBM',
    icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'
  },
  {
    name: 'Critical Thinking in AI Era',
    issuer: 'HP Life',
    icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'
  },
  {
    name: 'Professional Networking for Career Growth',
    issuer: 'HP Life',
    icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-32 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-sm font-semibold tracking-widest text-primary uppercase mb-3">04. Certifications</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-text tracking-tight mb-6">Continuous Learning</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <div 
              key={index} 
              className="group flex items-start gap-4 p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d={cert.icon} />
                </svg>
              </div>
              <div>
                <h4 className="text-base font-bold text-text mb-1 group-hover:text-primary transition-colors">{cert.name}</h4>
                <p className="text-sm font-medium text-secondary">{cert.issuer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
