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
          className="flex items-center gap-2.5 z-50 relative"
        >
          {/* Logo icon — cropped to show only the hexagon brain, bg removed */}
          <div className="h-10 w-10 overflow-hidden relative flex-shrink-0">
            <img
              src={`${import.meta.env.BASE_URL}logo-icon.png`}
              alt="PrimeBot AI icon"
              className="absolute top-0 left-0 w-full"
              style={{ height: "160%", objectFit: "cover", objectPosition: "top center" }}
            />
          </div>

          <span className="text-[17px] font-extrabold tracking-wide leading-none">
            <span className="text-white">PrimeBot</span>{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">AI</span>
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
