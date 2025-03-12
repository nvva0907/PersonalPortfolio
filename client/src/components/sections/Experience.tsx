import { motion } from 'framer-motion';
import { technologies } from '@/data/technologies';
import { workHistory } from '@/data/workHistory';

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-slate-900/50 section">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-[#10B981]">&lt;</span> Experience <span className="text-[#10B981]">/&gt;</span>
        </h2>
        
        <h3 className="text-2xl font-semibold mb-8 text-center text-slate-200">Technologies I've Worked With</h3>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-16">
          {technologies.map((tech, index) => (
            <motion.div 
              key={index}
              className="tech-badge bg-[#1E293B] p-4 rounded-xl flex flex-col items-center text-center hover:border-[#10B981]/50 border border-slate-700 transition-all duration-300"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div className="bg-slate-800 p-3 rounded-lg mb-3 text-[#10B981]">
                <tech.icon className="h-6 w-6" />
              </div>
              <span className="font-medium">{tech.name}</span>
            </motion.div>
          ))}
        </div>
        
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold mb-8 text-center text-slate-200">Work History</h3>
          
          {/* Work History Timeline */}
          <div className="space-y-12">
            {workHistory.map((job, index) => (
              <div key={index} className="relative pl-8 md:pl-0">
                <div className="md:flex gap-8 items-start">
                  <div className="md:w-1/3 mb-4 md:mb-0 md:text-right">
                    <span className="text-primary font-semibold">{job.period}</span>
                    <h4 className="text-xl font-bold">{job.title}</h4>
                    <p className="text-slate-400">{job.company}</p>
                  </div>
                  
                  <div className="hidden md:block absolute left-1/3 top-0 bottom-0 mx-auto w-px bg-slate-700"></div>
                  
                  <div className="md:w-2/3 relative">
                    <div className="absolute -left-8 md:left-[-21px] top-0 h-6 w-6 rounded-full bg-[#10B981] border-4 border-background"></div>
                    <motion.div 
                      className="bg-[#1E293B] p-6 rounded-xl border border-slate-700"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                    >
                      <p className="text-slate-300 mb-4">{job.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {job.skills.map((skill, skillIndex) => (
                          <span key={skillIndex} className="px-3 py-1 bg-slate-800 rounded-full text-xs font-medium text-slate-300">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
