import { motion } from 'framer-motion';
import { technologies } from '@/data/technologies';
import { workHistory } from '@/data/workHistory';
import { useTranslation } from 'react-i18next';

const Experience = () => {
  const { t } = useTranslation('experience');
  
  return (
    <section id="experience" className="py-24 bg-slate-900/50 section">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-primary">&lt;</span> {t('title')} <span className="text-primary">/&gt;</span>
        </h2>
        
        <h3 className="text-2xl font-semibold mb-8 text-center text-slate-200">{t('technologiesSubtitle')}</h3>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-16">
          {technologies.map((tech, index) => (
            <motion.div 
              key={index}
              className="tech-badge bg-slate-800 p-4 rounded-xl flex flex-col items-center text-center hover:border-primary/50 border border-slate-700 transition-all duration-300"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div className="bg-slate-800/50 p-3 rounded-lg mb-3 text-primary">
                <tech.icon className="h-6 w-6" />
              </div>
              <span className="font-medium">{tech.name}</span>
            </motion.div>
          ))}
        </div>
        
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold mb-8 text-center text-slate-200">{t('workHistorySubtitle')}</h3>
          
          {/* Work History Timeline */}
          <div className="space-y-12">
            {workHistory.map((job, index) => (
              <div key={index} className="relative pl-8 md:pl-0">
                <div className="md:flex gap-8 items-start">
                  <div className="md:w-1/3 mb-4 md:mb-0 md:text-right">
                    <span className="text-primary font-semibold">{job.period}</span>
                    <h4 className="text-xl font-bold">{t(`jobs.${index}.title`) || job.title}</h4>
                    <p className="text-slate-400">{t(`jobs.${index}.company`) || job.company}</p>
                  </div>
                  
                  <div className="hidden md:block absolute left-1/3 top-0 bottom-0 mx-auto w-px bg-slate-700"></div>
                  
                  <div className="md:w-2/3 relative">
                    <div className="absolute -left-8 md:left-[-21px] top-0 h-6 w-6 rounded-full bg-primary border-4 border-background"></div>
                    <motion.div 
                      className="bg-slate-800 p-6 rounded-xl border border-slate-700"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                    >
                      <p className="text-slate-300 mb-4">{t(`jobs.${index}.description`) || job.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {job.skills.map((skill, skillIndex) => (
                          <span key={skillIndex} className="px-3 py-1 bg-slate-700 rounded-full text-xs font-medium text-slate-300">
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
