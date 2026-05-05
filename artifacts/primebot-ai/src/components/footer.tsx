import { Instagram, Linkedin, Mail, ArrowRight } from "lucide-react";
import { TransparentLogo } from "./transparent-logo";

export function Footer() {
  const scrollTo = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-background border-t border-white/5 pt-20 pb-10 relative overflow-hidden">
      {/* Decorative gradient orb */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Col */}
          <div className="lg:col-span-2">
            <a href="#home" onClick={(e) => { e.preventDefault(); scrollTo("#home"); }} className="inline-flex relative mb-6">
               <div className="relative h-20 w-48 flex items-center group">
                 <TransparentLogo className="absolute top-1/2 left-0 -translate-y-1/2 w-[150%] h-[150%] object-contain drop-shadow-[0_0_10px_rgba(0,180,255,0.4)]" />
              </div>
            </a>
            <p className="text-muted-foreground max-w-sm mb-8 leading-relaxed">
              Leading the AI revolution. We build intelligent systems that automate workflows, engage customers, and scale your business infinitely.
            </p>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/company/primebot-ai/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-white/70 hover:text-primary hover:border-primary/50 transition-all duration-300">
                <Linkedin size={20} />
              </a>
              <a href="https://www.instagram.com/primebot_ai?igsh=MXFybHQ1YXZsNHZjbQ==" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-white/70 hover:text-primary hover:border-primary/50 transition-all duration-300">
                <Instagram size={20} />
              </a>
              <a href="mailto:contact.primebotai@gmail.com" className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-white/70 hover:text-primary hover:border-primary/50 transition-all duration-300">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Links Col 1 */}
          <div>
            <h4 className="font-display font-semibold text-white mb-6">Navigation</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Services', 'Features'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    onClick={(e) => { e.preventDefault(); scrollTo(`#${item.toLowerCase()}`); }}
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Col 2 */}
          <div>
            <h4 className="font-display font-semibold text-white mb-6">Legal</h4>
            <ul className="space-y-4">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-muted-foreground hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} PrimeBot AI. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <span>Designed for the Future.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
