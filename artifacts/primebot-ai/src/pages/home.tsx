import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Bot, Zap, Target, Lock, ArrowRight, ChevronRight, 
  MessageSquareCode, Settings2, Sparkles, Send, CheckCircle2, User, Mail, CheckCircle
} from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ChatWidget } from "@/components/chat-widget";
import { useLocalStorage } from "@/hooks/use-local-storage";

export default function Home() {
  return (
    <div className="min-h-screen bg-background selection:bg-primary/30 selection:text-white">
      <Navbar />
      
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <FeaturesSection />
        <DemoSection />
        <ContactSection />
      </main>

      <Footer />
      <ChatWidget />
    </div>
  );
}

function HeroSection() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={`${import.meta.env.BASE_URL}images/hero-bg.png`} 
          alt="Abstract Tech Background" 
          className="w-full h-full object-cover opacity-40 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
      </div>

      {/* Animated Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-blob mix-blend-screen" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-screen" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-8 backdrop-blur-md"
        >
          <Sparkles size={16} />
          <span>Next-Gen AI Automation</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-white leading-tight mb-6"
        >
          Automate Your Business with{" "}
          <span className="shimmer-text">AI</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed"
        >
          Empower your workflows, engage customers 24/7, and scale infinitely with PrimeBot's advanced artificial intelligence solutions.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <button 
            onClick={() => scrollTo("#contact")}
            className="px-8 py-4 rounded-full font-semibold text-primary-foreground bg-primary hover:bg-primary/90 transition-all hover:scale-105 shadow-[0_0_20px_rgba(0,240,255,0.4)] flex items-center justify-center gap-2"
          >
            Get Started <ArrowRight size={18} />
          </button>
          <button 
            onClick={() => scrollTo("#about")}
            className="px-8 py-4 rounded-full font-semibold text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-all backdrop-blur-sm"
          >
            Learn More
          </button>
        </motion.div>
      </div>
    </section>
  );
}

function AboutSection() {
  const stats = [
    { value: "500+", label: "Active Clients" },
    { value: "99.9%", label: "Uptime Guaranteed" },
    { value: "24/7", label: "Automated Support" },
    { value: "10x", label: "ROI Average" }
  ];

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Leading the <span className="shimmer-text">AI Revolution</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              At PrimeBot AI, we believe in a future where technology amplifies human potential. We build intelligent systems that work tirelessly in the background, allowing your team to focus on creativity, strategy, and growth.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our proprietary models are trained to understand context, execute complex multi-step workflows, and integrate seamlessly with your existing tech stack.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, i) => (
                <div key={i} className="glass-panel p-6 rounded-2xl border-l-2 border-l-primary">
                  <h3 className="text-3xl font-display font-bold text-white mb-1">{stat.value}</h3>
                  <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="relative h-[500px] rounded-3xl overflow-hidden glass-panel border-white/20 p-2"
          >
            <img 
              src={`${import.meta.env.BASE_URL}images/about-art.png`} 
              alt="AI Core Abstraction" 
              className="w-full h-full object-cover rounded-2xl"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-tr from-background/80 via-transparent to-transparent pointer-events-none rounded-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const services = [
    {
      icon: MessageSquareCode,
      title: "AI Chatbots",
      desc: "Intelligent customer service agents that resolve queries instantly, capture leads, and provide personalized 24/7 support across all your channels.",
      color: "from-blue-500 to-cyan-400"
    },
    {
      icon: Settings2,
      title: "Business Automation",
      desc: "Streamline repetitive tasks. Our AI connects your apps, moves data, and triggers actions without human intervention, saving thousands of hours.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Bot,
      title: "AI Digital Assistants",
      desc: "Internal productivity boosters for your team. Draft emails, summarize documents, analyze data, and schedule meetings through conversational interfaces.",
      color: "from-emerald-400 to-teal-500"
    }
  ];

  return (
    <section id="services" className="py-24 bg-black/40 border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold mb-6"
          >
            Solutions that <span className="shimmer-text">Scale</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            Discover our suite of AI-powered tools designed to transform how your business operates from the inside out.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              className="glass-panel glass-panel-hover p-8 rounded-3xl group"
            >
              <div className={`w-14 h-14 rounded-2xl mb-6 flex items-center justify-center bg-gradient-to-br ${service.color} bg-opacity-10 shadow-lg`}>
                <service.icon size={28} className="text-white" />
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-4">{service.title}</h3>
              <p className="text-muted-foreground mb-8 line-clamp-3 group-hover:line-clamp-none transition-all">
                {service.desc}
              </p>
              <a href="#contact" className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                Learn More <ChevronRight size={16} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const features = [
    { icon: Zap, title: "Lightning Speed", desc: "Responses generated in under 200ms, ensuring your customers never wait." },
    { icon: Target, title: "High Accuracy", desc: "Advanced NLP models that understand intent, slang, and context with 99% precision." },
    { icon: Sparkles, title: "Infinite Scalability", desc: "Handle 10 or 10,000 concurrent conversations without breaking a sweat." },
    { icon: Lock, title: "Enterprise Security", desc: "Bank-grade encryption, SOC2 compliance, and strict data privacy protocols." },
  ];

  return (
    <section id="features" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Why Choose <span className="shimmer-text">PrimeBot?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              We don't just build wrappers around existing models. We engineer robust, enterprise-grade systems designed for mission-critical applications.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
              {features.map((f, i) => (
                <div key={i} className="relative">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4 shadow-[0_0_15px_rgba(0,240,255,0.2)]">
                    <f.icon size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">{f.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Abstract code/node visual */}
          <div className="relative h-[600px] glass-panel rounded-3xl p-8 border-white/10 hidden lg:flex flex-col justify-center overflow-hidden group">
             {/* decorative background lines */}
             <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
             
             <div className="relative z-10 space-y-6">
                <div className="w-full h-12 bg-white/5 rounded-lg border border-white/10 flex items-center px-4 gap-3 animate-pulse">
                  <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                </div>
                {[60, 80, 40, 90, 50].map((width, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="text-primary/50 font-mono text-xs">0{i+1}</div>
                    <div className="h-4 bg-primary/20 rounded" style={{ width: `${width}%` }}>
                      <div className="h-full bg-primary rounded w-0 group-hover:w-full transition-all duration-1000 ease-out" style={{ transitionDelay: `${i * 100}ms` }} />
                    </div>
                  </div>
                ))}
             </div>
             {/* Glow overlay */}
             <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/30 blur-[100px] rounded-full pointer-events-none" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function DemoSection() {
  return (
    <section id="portfolio" className="py-24 bg-black/40 border-y border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src={`${import.meta.env.BASE_URL}images/demo-bg.png`} 
          alt="Tech background" 
          className="w-full h-full object-cover opacity-10 mix-blend-screen"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold mb-6"
          >
            See it in <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">Action</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            Experience the fluency and intelligence of our models. This is a simulated environment showing a typical customer support interaction.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto glass-panel rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-white/10"
        >
          {/* Mac window header */}
          <div className="bg-black/60 px-4 py-3 flex items-center gap-2 border-b border-white/10">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <div className="mx-auto text-xs text-white/50 font-mono">primebot-demo.exe</div>
          </div>
          
          <div className="p-6 md:p-10 space-y-6 bg-gradient-to-b from-transparent to-black/40">
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                <User size={14} className="text-white/70" />
              </div>
              <div className="glass-panel px-5 py-3 rounded-2xl rounded-tl-sm text-sm md:text-base text-white/90">
                I'm having trouble integrating the API with my existing CRM. Do you support Salesforce?
              </div>
            </div>

            <div className="flex gap-4 flex-row-reverse">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(0,240,255,0.5)]">
                <Bot size={14} className="text-primary" />
              </div>
              <div className="bg-primary/10 border border-primary/20 px-5 py-3 rounded-2xl rounded-tr-sm text-sm md:text-base text-white/90">
                Yes, absolutely! We have a native Salesforce integration. You can connect it by navigating to <strong>Settings {'>'} Integrations {'>'} Salesforce</strong> in your dashboard. You'll just need your SFDC API token. Would you like me to walk you through the steps or send a link to the documentation?
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                <User size={14} className="text-white/70" />
              </div>
              <div className="glass-panel px-5 py-3 rounded-2xl rounded-tl-sm text-sm md:text-base text-white/90">
                A link to the docs would be great, thanks.
              </div>
            </div>

             <div className="flex gap-4 flex-row-reverse">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(0,240,255,0.5)]">
                <Bot size={14} className="text-primary" />
              </div>
              <div className="bg-primary/10 border border-primary/20 px-5 py-3 rounded-2xl rounded-tr-sm text-sm md:text-base text-white/90">
                Here is the direct link to our Salesforce integration guide: <a href="#" className="text-primary underline underline-offset-2">docs.primebot.ai/salesforce</a>. <br/><br/>If you run into any issues with the token permissions, just let me know and I can diagnose it for you!
              </div>
            </div>
            
          </div>
          
          <div className="p-4 border-t border-white/10 bg-black/40 flex items-center gap-4">
             <div className="flex-1 bg-white/5 border border-white/10 rounded-full h-12 flex items-center px-4 text-white/30 text-sm">
               Type your message... (Interactive demo disabled)
             </div>
             <button className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white/50 cursor-not-allowed">
               <Send size={18} />
             </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submissions, setSubmissions] = useLocalStorage<any[]>('primebot_form_submissions', []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate network request
    setTimeout(() => {
      setSubmissions([...submissions, { ...formData, date: new Date().toISOString() }]);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset after 3s
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Decorative large circle */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-[800px] h-[800px] border border-white/5 rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] border border-white/5 rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Ready to Upgrade your <span className="shimmer-text">Workflow?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Drop us a line to discuss your custom automation needs, get pricing details, or schedule a personalized live demo.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-primary">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-white font-medium">Email Us</h4>
                  <a href="mailto:contact.primebotai@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                    contact.primebotai@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-primary">
                  <MessageSquareCode size={20} />
                </div>
                <div>
                  <h4 className="text-white font-medium">Live Chat</h4>
                  <p className="text-muted-foreground">Click the bot icon bottom right</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="glass-panel p-8 md:p-10 rounded-3xl space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-white/80">Full Name</label>
                <input
                  id="name"
                  required
                  type="text"
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-white/20"
                  placeholder="John Doe"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-white/80">Email Address</label>
                <input
                  id="email"
                  required
                  type="email"
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-white/20"
                  placeholder="john@company.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-white/80">How can we help?</label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-white/20 resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={status !== 'idle'}
                className="w-full py-4 rounded-xl font-bold bg-primary text-primary-foreground hover:bg-primary/90 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {status === 'idle' && <>Send Message <Send size={18} /></>}
                {status === 'submitting' && <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />}
                {status === 'success' && <>Message Sent! <CheckCircle2 size={18} /></>}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
