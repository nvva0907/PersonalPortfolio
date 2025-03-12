import { Code, Coffee, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation('about');
  
  return (
    <section id="about" className="py-24 section">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-primary">&lt;</span> {t('title')} <span className="text-primary">/&gt;</span>
        </h2>
        
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/3">
            <motion.div 
              className="rounded-2xl overflow-hidden border-2 border-primary/20 bg-slate-800 shadow-lg shadow-primary/10 aspect-square"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <svg
                viewBox="0 0 400 400"
                className="w-full h-full"
              >
                <rect width="400" height="400" fill="#1e293b" />
                <circle cx="200" cy="150" r="80" fill="#3b82f6" opacity="0.3" />
                <rect x="120" y="240" width="160" height="120" rx="10" fill="#3b82f6" opacity="0.2" />
                <circle cx="200" cy="150" r="60" fill="#1e293b" />
                <circle cx="200" cy="120" r="40" fill="#4b5563" />
                <rect x="160" y="180" width="80" height="100" rx="10" fill="#4b5563" />
              </svg>
            </motion.div>
          </div>
          
          <div className="md:w-2/3 space-y-6">
            <p className="text-lg text-slate-300 leading-relaxed">
              I am a Full Stack Developer and DevOps Engineer with experience working with Java, Node.js, Python, ReactJS, PostgreSQL, MySQL, MongoDB, Redis, and Kafka. I deploy applications to servers using Docker, CI/CD, and have expertise with GPU servers, as well as implementing LLM & NLP solutions including VN NLP, LangChain, RAG, and Llama Studio API Server.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              In the short term, alongside software development and operations, I aim to deepen my expertise in practical AI applications and large-scale system architecture. My long-term goal is to build intelligent AI platforms optimized for business operations, with the ambition of becoming a Solution Architect.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <motion.div 
                className="bg-slate-800 px-4 py-2 rounded-md text-primary border border-slate-700 flex items-center"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <Code className="inline-block mr-2 h-5 w-5" /> Problem Solver
              </motion.div>
              <motion.div 
                className="bg-slate-800 px-4 py-2 rounded-md text-primary border border-slate-700 flex items-center"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <Coffee className="inline-block mr-2 h-5 w-5" /> Coffee Enthusiast
              </motion.div>
              <motion.div 
                className="bg-slate-800 px-4 py-2 rounded-md text-primary border border-slate-700 flex items-center"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <BookOpen className="inline-block mr-2 h-5 w-5" /> Lifelong Learner
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
