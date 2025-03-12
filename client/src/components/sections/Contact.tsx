import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { motion } from 'framer-motion';
import { Mail, MapPin, GithubIcon, Linkedin, Twitter, Instagram } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
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
                  <p className="text-slate-200">john.doe@example.com</p>
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
            
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4">Connect with me</h4>
              <div className="flex space-x-4">
                <motion.a 
                  href="#" 
                  className="bg-[#1E293B] p-3 rounded-lg text-slate-300 hover:text-primary transition-colors"
                  whileHover={{ y: -5, color: '#3B82F6' }}
                  transition={{ duration: 0.2 }}
                >
                  <GithubIcon className="h-6 w-6" />
                </motion.a>
                <motion.a 
                  href="#" 
                  className="bg-[#1E293B] p-3 rounded-lg text-slate-300 hover:text-primary transition-colors"
                  whileHover={{ y: -5, color: '#3B82F6' }}
                  transition={{ duration: 0.2 }}
                >
                  <Linkedin className="h-6 w-6" />
                </motion.a>
                <motion.a 
                  href="#" 
                  className="bg-[#1E293B] p-3 rounded-lg text-slate-300 hover:text-primary transition-colors"
                  whileHover={{ y: -5, color: '#3B82F6' }}
                  transition={{ duration: 0.2 }}
                >
                  <Twitter className="h-6 w-6" />
                </motion.a>
                <motion.a 
                  href="#" 
                  className="bg-[#1E293B] p-3 rounded-lg text-slate-300 hover:text-primary transition-colors"
                  whileHover={{ y: -5, color: '#3B82F6' }}
                  transition={{ duration: 0.2 }}
                >
                  <Instagram className="h-6 w-6" />
                </motion.a>
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
            <form onSubmit={handleSubmit} className="bg-[#1E293B] p-8 rounded-xl border border-slate-700">
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Name</label>
                <Input 
                  id="name" 
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Smith"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                <Input 
                  type="email" 
                  id="email" 
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                <Textarea 
                  id="message" 
                  value={formData.message}
                  onChange={handleChange}
                  rows={5} 
                  placeholder="How can I help you?"
                  required
                />
              </div>
              
              <motion.button 
                type="submit" 
                className="w-full bg-primary hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-colors"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
