import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { projects } from '@/data/projects';

const Projects = () => {
  return (
    <section id="projects" className="py-24 section">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-primary">&lt;</span> Projects <span className="text-primary">/&gt;</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="project-card bg-[#1E293B] rounded-xl overflow-hidden border border-slate-700 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              whileHover={{ y: -8 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="h-52 overflow-hidden">
                <svg className="w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice">
                  <rect width="400" height="200" fill="#1e293b" />
                  <rect x="0" y="0" width="400" height="200" fill={project.color} fillOpacity="0.15" />
                  <g transform="translate(200, 100)" stroke={project.color} strokeWidth="1.5" strokeOpacity="0.7" fill="none"
                    dangerouslySetInnerHTML={{ __html: project.svgPattern }}
                  />
                  <text 
                    x="200" 
                    y="100" 
                    textAnchor="middle" 
                    dominantBaseline="middle" 
                    fill="white" 
                    fontSize="24"
                    fontWeight="bold"
                  >
                    {project.name[0]}
                  </text>
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                <p className="text-slate-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-slate-800 rounded-full text-xs font-medium text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>
                <a href="#" className="text-primary hover:text-blue-400 inline-flex items-center">
                  View Details <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
