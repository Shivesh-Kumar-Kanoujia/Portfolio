import { Mail, Send } from 'lucide-react';

const Contact = () => {
  return (
    <footer id="contact" className="bg-background text-text py-24 relative overflow-hidden border-t border-gray-100">
      {/* Background glow for light theme */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          
          {/* Left: Info */}
          <div>
            <h2 className="text-sm font-semibold tracking-widest text-primary uppercase mb-3">05. Contact</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-text">Let's build something together.</h3>
            <p className="text-secondary text-lg mb-12 max-w-md leading-relaxed">
              Currently open to: Internship Opportunities, Collaboration, Open Source Projects, Freelance Work.
            </p>

            <div className="flex flex-col gap-6">
              <a href="mailto:shivesh@example.com" className="flex items-center gap-4 text-secondary hover:text-text transition-colors group w-max">
                <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-surface border border-gray-100 shadow-sm group-hover:border-primary/30 group-hover:bg-primary/5 group-hover:text-primary transition-all duration-300">
                  <Mail size={20} />
                </div>
                <span className="text-lg font-medium">shivesh@example.com</span>
              </a>
              <a href="https://github.com/shivesh-kanoujia" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-secondary hover:text-text transition-colors group w-max">
                <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-surface border border-gray-100 shadow-sm group-hover:border-primary/30 group-hover:bg-primary/5 group-hover:text-primary transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                </div>
                <span className="text-lg font-medium">github.com/shivesh-kanoujia</span>
              </a>
              <a href="https://linkedin.com/in/shivesh-kanoujia" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-secondary hover:text-text transition-colors group w-max">
                <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-surface border border-gray-100 shadow-sm group-hover:border-primary/30 group-hover:bg-primary/5 group-hover:text-primary transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                </div>
                <span className="text-lg font-medium">linkedin.com/in/shivesh-kanoujia</span>
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-surface border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] rounded-3xl p-8 lg:p-10">
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-2.5">
                <label htmlFor="name" className="text-sm font-semibold tracking-wide text-text">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-background border border-gray-200 rounded-xl px-4 py-3.5 text-text focus:outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/10 transition-all placeholder:text-gray-400"
                  placeholder="John Doe"
                />
              </div>
              <div className="flex flex-col gap-2.5">
                <label htmlFor="email" className="text-sm font-semibold tracking-wide text-text">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-background border border-gray-200 rounded-xl px-4 py-3.5 text-text focus:outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/10 transition-all placeholder:text-gray-400"
                  placeholder="john@example.com"
                />
              </div>
              <div className="flex flex-col gap-2.5">
                <label htmlFor="message" className="text-sm font-semibold tracking-wide text-text">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full bg-background border border-gray-200 rounded-xl px-4 py-3.5 text-text focus:outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/10 transition-all resize-none placeholder:text-gray-400"
                  placeholder="How can I help you?"
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-text text-white font-medium py-4 rounded-xl hover:bg-text/90 shadow-[0_4px_14px_0_rgb(17,24,39,0.39)] hover:shadow-[0_6px_20px_rgba(17,24,39,0.23)] hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 group mt-2"
              >
                Send Message
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
          
        </div>

        <div className="mt-24 pt-8 border-t border-gray-100 text-center text-secondary text-sm flex flex-col md:flex-row justify-between items-center gap-4 font-medium">
          <p>Designed &amp; Developed by Shivesh Kumar Kanoujia</p>
          <p className="flex items-center gap-1.5">&copy; {new Date().getFullYear()} &mdash; Built with: React &bull; TailwindCSS &bull; Framer Motion &bull; Three.js</p>
        </div>

      </div>
    </footer>
  );
};

export default Contact;
