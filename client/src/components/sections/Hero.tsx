import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const typewriterRef = useRef<HTMLParagraphElement>(null);
  const text = "Full Stack Developer specializing in Java & React with expertise in AI solutions.";

  useEffect(() => {
    let i = 0;
    const typeWriter = () => {
      if (typewriterRef.current && i < text.length) {
        typewriterRef.current.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
      }
    };
    
    // Start typewriter after a short delay
    const timer = setTimeout(typeWriter, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16">
      <motion.div 
        className="container mx-auto px-4 py-16 flex flex-col items-center text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          <span className="text-white">Hello, I'm </span>
          <span className="text-primary">John Doe</span>
        </h1>
        <p 
          ref={typewriterRef} 
          className="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl"
        ></p>
        <div className="flex flex-wrap justify-center gap-4">
          <a 
            href="#projects" 
            className="bg-primary hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-colors"
          >
            View My Work
          </a>
          <a 
            href="#contact" 
            className="bg-transparent hover:bg-slate-800 text-white font-medium py-3 px-6 rounded-lg border border-slate-600 transition-colors"
          >
            Contact Me
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
