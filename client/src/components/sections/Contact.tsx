import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, GithubIcon, Linkedin, Twitter, Instagram, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const controls = useAnimation();

  // 3D card tilt effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };
  
  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    card.style.transition = 'transform 0.5s ease';
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    
    // Reset form and show success state
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
    setIsSuccess(true);
    
    // Reset success state after 3 seconds
    setTimeout(() => setIsSuccess(false), 3000);
  };
  
  // Social media icon hover effects
  const iconVariants = {
    initial: { scale: 1, y: 0 },
    hover: { 
      scale: 1.2, 
      y: -8,
      transition: { 
        type: "spring", 
        stiffness: 500, 
        damping: 10 
      } 
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-900/50 section">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-[#10B981]">&lt;</span> Contact Me <span className="text-[#10B981]">/&gt;</span>
        </h2>
        
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
            <p className="text-slate-300 mb-8">
              Have a project in mind or just want to connect? Feel free to reach out through any of the channels below or fill out the contact form.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="bg-[#1E293B] p-3 rounded-lg mr-4 text-[#10B981]">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Email</p>
                  <p className="text-slate-200">vietanh.nguyen@example.com</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-[#1E293B] p-3 rounded-lg mr-4 text-[#10B981]">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Location</p>
                  <p className="text-slate-200">San Francisco, CA</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h4 className="text-lg font-semibold mb-6">Connect with me</h4>
              <div className="flex space-x-6">
                <motion.div
                  className="perspective-1000"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <motion.a 
                    href="#" 
                    className="flex items-center justify-center w-14 h-14 bg-[#1E293B] rounded-xl shadow-lg text-slate-300 transition-all relative"
                    variants={iconVariants}
                    initial="initial"
                    whileHover="hover"
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-blue-400/0 rounded-xl"
                      animate={{ 
                        rotateZ: [0, 360],
                        opacity: [0.3, 0.6, 0.3]
                      }}
                      transition={{ 
                        duration: 8, 
                        repeat: Infinity,
                        repeatType: "loop" 
                      }}
                    />
                    <GithubIcon className="h-7 w-7 relative" style={{ transform: 'translateZ(20px)' }}/>
                  </motion.a>
                </motion.div>
                
                <motion.div
                  className="perspective-1000"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <motion.a 
                    href="#" 
                    className="flex items-center justify-center w-14 h-14 bg-[#1E293B] rounded-xl shadow-lg text-slate-300 transition-all relative"
                    variants={iconVariants}
                    initial="initial"
                    whileHover="hover"
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-500/0 rounded-xl"
                      animate={{ 
                        rotateZ: [0, -360],
                        opacity: [0.3, 0.6, 0.3]
                      }}
                      transition={{ 
                        duration: 8, 
                        repeat: Infinity,
                        repeatType: "loop" 
                      }}
                    />
                    <Linkedin className="h-7 w-7 relative" style={{ transform: 'translateZ(20px)' }}/>
                  </motion.a>
                </motion.div>
                
                <motion.div
                  className="perspective-1000"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <motion.a 
                    href="#" 
                    className="flex items-center justify-center w-14 h-14 bg-[#1E293B] rounded-xl shadow-lg text-slate-300 transition-all relative"
                    variants={iconVariants}
                    initial="initial"
                    whileHover="hover"
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-bl from-blue-400/20 to-cyan-400/0 rounded-xl"
                      animate={{ 
                        rotateZ: [0, 360],
                        opacity: [0.3, 0.6, 0.3]
                      }}
                      transition={{ 
                        duration: 8, 
                        repeat: Infinity,
                        repeatType: "loop" 
                      }}
                    />
                    <Twitter className="h-7 w-7 relative" style={{ transform: 'translateZ(20px)' }}/>
                  </motion.a>
                </motion.div>
                
                <motion.div
                  className="perspective-1000"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <motion.a 
                    href="#" 
                    className="flex items-center justify-center w-14 h-14 bg-[#1E293B] rounded-xl shadow-lg text-slate-300 transition-all relative"
                    variants={iconVariants}
                    initial="initial"
                    whileHover="hover"
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-pink-500/0 rounded-xl"
                      animate={{ 
                        rotateZ: [0, -360],
                        opacity: [0.3, 0.6, 0.3]
                      }}
                      transition={{ 
                        duration: 8, 
                        repeat: Infinity,
                        repeatType: "loop" 
                      }}
                    />
                    <Instagram className="h-7 w-7 relative" style={{ transform: 'translateZ(20px)' }}/>
                  </motion.a>
                </motion.div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              className="relative transition-all duration-500 ease-out"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <form 
                onSubmit={handleSubmit} 
                className="bg-[#1E293B] p-8 rounded-xl border border-slate-700 shadow-xl"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* 3D floating elements in the background */}
                <div className="absolute inset-0 z-0 overflow-hidden rounded-xl pointer-events-none">
                  {[...Array(5)].map((_, i) => (
                    <motion.div 
                      key={i}
                      className="absolute w-20 h-20 bg-blue-500/5 rounded-full"
                      style={{ 
                        left: `${Math.random() * 100}%`, 
                        top: `${Math.random() * 100}%`,
                        transformStyle: 'preserve-3d',
                        transform: 'translateZ(10px)'
                      }}
                      animate={{ 
                        y: [0, Math.random() * 40 - 20],
                        x: [0, Math.random() * 40 - 20],
                        scale: [1, 1.1, 1],
                        opacity: [0.2, 0.4, 0.2]
                      }}
                      transition={{ 
                        duration: 5 + Math.random() * 5, 
                        repeat: Infinity,
                        repeatType: "reverse" 
                      }}
                    />
                  ))}
                </div>
                
                <div className="relative z-10">
                  <motion.div 
                    className="mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Name</label>
                    <Input 
                      id="name" 
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Nguyen Van Viet Anh"
                      required
                      className="bg-slate-800/80 backdrop-blur-sm border-slate-700 focus:border-blue-500 transition-all transform hover:translate-y-[-2px]"
                      style={{ transform: 'translateZ(20px)' }}
                    />
                  </motion.div>
                  
                  <motion.div 
                    className="mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                    <Input 
                      type="email" 
                      id="email" 
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="vietanh@example.com"
                      required
                      className="bg-slate-800/80 backdrop-blur-sm border-slate-700 focus:border-blue-500 transition-all transform hover:translate-y-[-2px]"
                      style={{ transform: 'translateZ(20px)' }}
                    />
                  </motion.div>
                  
                  <motion.div 
                    className="mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                    <Textarea 
                      id="message" 
                      value={formData.message}
                      onChange={handleChange}
                      rows={5} 
                      placeholder="How can I help you?"
                      required
                      className="bg-slate-800/80 backdrop-blur-sm border-slate-700 focus:border-blue-500 transition-all transform hover:translate-y-[-2px]"
                      style={{ transform: 'translateZ(20px)' }}
                    />
                  </motion.div>
                  
                  <AnimatePresence>
                    {isSuccess ? (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="bg-green-500/20 text-green-300 p-3 rounded-lg mb-6 flex items-center"
                        style={{ transform: 'translateZ(30px)' }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Message sent successfully!
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                  
                  <motion.button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-blue-600 text-white font-medium py-4 px-6 rounded-lg shadow-lg flex items-center justify-center"
                    whileHover={{ 
                      scale: 1.03, 
                      boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.25)"
                    }}
                    whileTap={{ scale: 0.97 }}
                    disabled={isSubmitting}
                    style={{ transform: 'translateZ(40px)' }}
                  >
                    {isSubmitting ? (
                      <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="mr-2"
                      >
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" strokeOpacity="0.3" />
                          <path d="M12 2C6.47715 2 2 6.47715 2 12C2 12.7286 2.08566 13.4385 2.24918 14.1184" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                        </svg>
                      </motion.div>
                    ) : (
                      <Send className="mr-2 h-5 w-5" />
                    )}
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
