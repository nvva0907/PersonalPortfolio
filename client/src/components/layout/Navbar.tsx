import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full bg-background/90 backdrop-blur-sm z-50 border-b border-slate-800">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="text-xl font-bold text-white">
          <span className="text-primary">John</span>Doe
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#about" className="text-slate-300 hover:text-white transition-colors">About</a>
          <a href="#experience" className="text-slate-300 hover:text-white transition-colors">Experience</a>
          <a href="#projects" className="text-slate-300 hover:text-white transition-colors">Projects</a>
          <a href="#contact" className="text-slate-300 hover:text-white transition-colors">Contact</a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden text-white"
          aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden bg-[#1E293B] border-t border-slate-700 ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
          <a 
            href="#about" 
            className="text-slate-300 py-2 hover:text-white transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </a>
          <a 
            href="#experience" 
            className="text-slate-300 py-2 hover:text-white transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Experience
          </a>
          <a 
            href="#projects" 
            className="text-slate-300 py-2 hover:text-white transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </a>
          <a 
            href="#contact" 
            className="text-slate-300 py-2 hover:text-white transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
