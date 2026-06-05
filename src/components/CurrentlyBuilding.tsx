import { motion } from 'framer-motion';

const CurrentlyBuilding = () => {
  return (
    <section className="py-32 bg-surface border-t border-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-sm font-semibold tracking-widest text-primary uppercase mb-3"
          >
            Currently Building
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto bg-background border border-gray-100 rounded-3xl p-8 md:p-12 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-500"
        >
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="w-full md:w-1/3 aspect-video md:aspect-square rounded-2xl overflow-hidden bg-gray-100 border border-gray-100">
              <img
                src="/images/atlas.png"
                alt="Atlas AI Travel Guide"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "https://ui-avatars.com/api/?name=AT&background=2563EB&color=fff&size=400";
                }}
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-xs font-semibold tracking-widest text-primary uppercase">In Development</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-text mb-4 tracking-tight">
                Atlas – AI Powered Smart Travel Guide
              </h3>
              <p className="text-secondary leading-relaxed mb-6">
                Improving travel assistance through translation, speech processing, and intelligent user experiences.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {['React', 'Node.js', 'OpenAI API', 'Azure'].map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-surface border border-gray-200 text-secondary text-xs font-medium rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "65%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="h-full bg-primary rounded-full"
                />
              </div>
              <div className="flex justify-between items-center mt-2">
                <span className="text-xs text-secondary font-medium">Progress</span>
                <span className="text-xs text-primary font-bold">65%</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CurrentlyBuilding;
