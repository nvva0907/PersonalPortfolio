import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';

const Hero = () => {
  const typewriterRef = useRef<HTMLParagraphElement>(null);
  const text = "Full Stack Developer specializing in Java & React with expertise in AI solutions.";
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();
  
  // 3D animation effect for the name
  const nameVariants = {
    hidden: { opacity: 0, z: -100, rotateX: -45 },
    visible: { 
      opacity: 1, 
      z: 0, 
      rotateX: 0,
      transition: { 
        type: "spring", 
        stiffness: 60, 
        damping: 10,
        delay: 0.3
      }
    }
  };

  // Button hover animations
  const buttonVariants = {
    hover: { 
      scale: 1.05,
      boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
      transition: { type: "spring", stiffness: 400, damping: 10 }
    },
    tap: { scale: 0.95 }
  };

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
    const timer = setTimeout(() => {
      typeWriter();
      setIsVisible(true);
      controls.start({ opacity: 1, y: 0 });
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [controls]);

  // 3D floating animation for hero section
  const floatingAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      repeatType: "reverse" as const,
      ease: "easeInOut"
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 overflow-hidden relative">
      {/* Background particles effect */}
      <div className="absolute inset-0 z-0">
        {[...Array(15)].map((_, i) => (
          <motion.div 
            key={i}
            className="absolute h-2 w-2 rounded-full bg-blue-500 opacity-20"
            style={{ 
              left: `${Math.random() * 100}%`, 
              top: `${Math.random() * 100}%` 
            }}
            animate={{ 
              y: [0, Math.random() * 30, 0],
              opacity: [0.2, 0.6, 0.2]
            }}
            transition={{ 
              duration: 3 + Math.random() * 5, 
              repeat: Infinity,
              repeatType: "reverse" 
            }}
          />
        ))}
      </div>

      <motion.div 
        className="container mx-auto px-4 py-16 flex flex-col items-center text-center z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          animate={floatingAnimation}
          className="mb-6 perspective-1000"
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold"
            variants={nameVariants}
            initial="hidden"
            animate="visible"
          >
            <span className="text-white">Hello, I'm </span>
            <motion.span 
              className="text-primary"
              whileHover={{ 
                scale: 1.1, 
                color: "#60a5fa",
                transition: { duration: 0.2 } 
              }}
            >
              Nguyen Van Viet Anh
            </motion.span>
          </motion.h1>
        </motion.div>

        <p 
          ref={typewriterRef} 
          className="text-xl md:text-2xl text-slate-300 mb-12 max-w-2xl"
        ></p>

        <AnimatePresence>
          {isVisible && (
            <motion.div 
              className="flex flex-wrap justify-center gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.8 }}
            >
              <motion.a 
                href="#projects" 
                className="bg-primary hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-lg transition-colors shadow-lg"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <motion.span 
                  initial={{ z: 5 }}
                  className="block"
                >
                  View My Work
                </motion.span>
              </motion.a>
              <motion.a 
                href="#contact" 
                className="bg-transparent hover:bg-slate-800 text-white font-medium py-3 px-8 rounded-lg border border-slate-600 transition-colors shadow-lg"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Contact Me
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Hero;
