import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useScrollSpy } from "@/hooks/use-scroll-spy";

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Features", href: "#features" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const activeSection = useScrollSpy(NAV_LINKS.map(l => l.href.substring(1)));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-4 glass-panel border-b border-white/10" : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a 
          href="#home" 
          onClick={(e) => { e.preventDefault(); scrollTo("#home"); }}
          className="flex items-center gap-3 z-50 relative"
        >
          {/* Inline SVG logo — no background box, blends with theme */}
          <svg width="36" height="36" viewBox="0 0 100 115" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="hexGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#a855f7" />
                <stop offset="50%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
                <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
              </filter>
            </defs>
            {/* Hexagon outline */}
            <polygon
              points="50,4 93,27 93,73 50,96 7,73 7,27"
              stroke="url(#hexGrad)"
              strokeWidth="4"
              fill="none"
              filter="url(#glow)"
            />
            {/* Brain network nodes */}
            <circle cx="50" cy="28" r="3.5" fill="#06b6d4" filter="url(#glow)" />
            <circle cx="30" cy="42" r="3.5" fill="#818cf8" filter="url(#glow)" />
            <circle cx="70" cy="42" r="3.5" fill="#3b82f6" filter="url(#glow)" />
            <circle cx="26" cy="60" r="3.5" fill="#a855f7" filter="url(#glow)" />
            <circle cx="74" cy="60" r="3.5" fill="#06b6d4" filter="url(#glow)" />
            <circle cx="50" cy="74" r="3.5" fill="#818cf8" filter="url(#glow)" />
            <circle cx="50" cy="50" r="3.5" fill="#06b6d4" filter="url(#glow)" />
            {/* Network connections */}
            <line x1="50" y1="28" x2="30" y2="42" stroke="#3b82f6" strokeWidth="1.5" strokeOpacity="0.7" />
            <line x1="50" y1="28" x2="70" y2="42" stroke="#3b82f6" strokeWidth="1.5" strokeOpacity="0.7" />
            <line x1="50" y1="28" x2="50" y2="50" stroke="#06b6d4" strokeWidth="1.5" strokeOpacity="0.7" />
            <line x1="30" y1="42" x2="50" y2="50" stroke="#818cf8" strokeWidth="1.5" strokeOpacity="0.7" />
            <line x1="70" y1="42" x2="50" y2="50" stroke="#818cf8" strokeWidth="1.5" strokeOpacity="0.7" />
            <line x1="30" y1="42" x2="26" y2="60" stroke="#a855f7" strokeWidth="1.5" strokeOpacity="0.7" />
            <line x1="70" y1="42" x2="74" y2="60" stroke="#3b82f6" strokeWidth="1.5" strokeOpacity="0.7" />
            <line x1="26" y1="60" x2="50" y2="74" stroke="#818cf8" strokeWidth="1.5" strokeOpacity="0.7" />
            <line x1="74" y1="60" x2="50" y2="74" stroke="#06b6d4" strokeWidth="1.5" strokeOpacity="0.7" />
            <line x1="50" y1="50" x2="26" y2="60" stroke="#a855f7" strokeWidth="1.5" strokeOpacity="0.7" />
            <line x1="50" y1="50" x2="74" y2="60" stroke="#3b82f6" strokeWidth="1.5" strokeOpacity="0.7" />
            <line x1="50" y1="50" x2="50" y2="74" stroke="#06b6d4" strokeWidth="1.5" strokeOpacity="0.7" />
          </svg>

          <span className="text-lg font-extrabold tracking-wide">
            <span className="text-white">PRIMEBOT</span>{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">AI</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(link.href);
                  }}
                  className={`text-sm font-medium transition-colors hover:text-primary relative py-2 ${
                    activeSection === link.href.substring(1) ? "text-white" : "text-white/60"
                  }`}
                >
                  {link.name}
                  {activeSection === link.href.substring(1) && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>
          <button 
            onClick={() => scrollTo("#contact")}
            className="px-6 py-2.5 rounded-full font-medium text-sm bg-white/5 border border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-[0_0_15px_-3px_rgba(0,240,255,0.3)] hover:shadow-[0_0_25px_0_rgba(0,240,255,0.5)]"
          >
            Get Started
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden relative z-50 text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 glass-panel border-b border-white/10 p-6 flex flex-col gap-6 md:hidden"
            >
              <ul className="flex flex-col gap-4">
                {NAV_LINKS.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollTo(link.href);
                      }}
                      className={`block text-lg font-medium ${
                        activeSection === link.href.substring(1) ? "text-primary" : "text-white/80"
                      }`}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => scrollTo("#contact")}
                className="w-full px-6 py-3 rounded-xl font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Get Started
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
