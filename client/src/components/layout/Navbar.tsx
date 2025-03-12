import { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const { t, i18n } = useTranslation('navbar');
  
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsLanguageOpen(false);
  };

  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);
      
      // Update active section based on scroll position
      const sections = ['hero', 'about', 'experience', 'projects', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const offset = 150; // Offset to trigger the active state a bit earlier
          
          if (rect.top <= offset && rect.bottom >= offset) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  // Animation variants
  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * custom,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };
  
  // Logo animation
  const logoVariants = {
    initial: { opacity: 0, x: -20 },
    animate: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: { 
      scale: 1.05,
      transition: { duration: 0.2 }
    }
  };

  // Mobile menu animation
  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1, 
      height: 'auto',
      transition: {
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    },
    exit: { 
      opacity: 0, 
      height: 0,
      transition: {
        duration: 0.3,
        when: "afterChildren",
        staggerDirection: -1,
        staggerChildren: 0.05
      }
    }
  };
  
  const mobileItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.3 }
    },
    exit: { 
      opacity: 0, 
      x: -20,
      transition: { duration: 0.2 }
    }
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg py-2' : 'bg-background/80 backdrop-blur-sm py-4 border-b border-slate-800'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.a 
          href="#" 
          className="text-xl font-bold text-white"
          variants={logoVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
        >
          <span className="text-primary">V</span>iet
          <span className="text-primary">A</span>nh
        </motion.a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {["about", "experience", "projects", "contact"].map((section, index) => (
            <motion.a 
              key={section}
              href={`#${section}`} 
              className={`relative px-2 py-1 ${
                activeSection === section 
                  ? 'text-white font-medium' 
                  : 'text-slate-300 hover:text-white'
              } transition-colors`}
              variants={navItemVariants}
              initial="hidden"
              animate="visible"
              custom={index}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              {t(section)}
              {activeSection === section && (
                <motion.span 
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"
                  layoutId="activeSection"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.a>
          ))}
          
          {/* Language Switcher */}
          <div className="relative">
            <motion.button
              className="flex items-center space-x-1 text-slate-300 hover:text-white"
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              variants={navItemVariants}
              initial="hidden"
              animate="visible"
              custom={4}
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm">{i18n.language === 'vi' ? 'VI' : 'EN'}</span>
            </motion.button>
            
            <AnimatePresence>
              {isLanguageOpen && (
                <motion.div
                  className="absolute top-full right-0 mt-2 bg-slate-800 rounded-lg shadow-lg py-2 w-32 border border-slate-700"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <button
                    className={`w-full text-left px-4 py-2 hover:bg-slate-700 ${i18n.language === 'en' ? 'text-primary' : 'text-slate-300'}`}
                    onClick={() => changeLanguage('en')}
                  >
                    English
                  </button>
                  <button
                    className={`w-full text-left px-4 py-2 hover:bg-slate-700 ${i18n.language === 'vi' ? 'text-primary' : 'text-slate-300'}`}
                    onClick={() => changeLanguage('vi')}
                  >
                    Tiếng Việt
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>
        
        {/* Mobile Menu Button */}
        <motion.button 
          onClick={toggleMenu} 
          className="md:hidden text-white p-1 rounded-md"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
        >
          <AnimatePresence mode="wait">
            {isMenuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="w-6 h-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
      
      {/* Mobile Menu with animations */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="md:hidden bg-[#1E293B]/95 backdrop-blur-md border-t border-slate-700 overflow-hidden"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
              {["about", "experience", "projects", "contact"].map((section) => (
                <motion.a 
                  key={section}
                  href={`#${section}`} 
                  className="text-slate-300 py-2 hover:text-white transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                  variants={mobileItemVariants}
                  whileHover={{ x: 5, color: "#fff" }}
                >
                  {t(section)}
                </motion.a>
              ))}
              
              {/* Language Switcher in Mobile Menu */}
              <div className="border-t border-slate-700 pt-3 mt-2">
                <p className="text-slate-400 text-sm mb-2">{t('language')}</p>
                <div className="flex space-x-4">
                  <button
                    className={`px-3 py-1 rounded ${i18n.language === 'en' ? 'bg-primary text-white' : 'bg-slate-700 text-slate-300'}`}
                    onClick={() => changeLanguage('en')}
                  >
                    English
                  </button>
                  <button
                    className={`px-3 py-1 rounded ${i18n.language === 'vi' ? 'bg-primary text-white' : 'bg-slate-700 text-slate-300'}`}
                    onClick={() => changeLanguage('vi')}
                  >
                    Tiếng Việt
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
