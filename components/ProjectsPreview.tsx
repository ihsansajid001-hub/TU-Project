import { motion } from 'framer-motion';
import { Calendar, Tag, CheckCircle, Clock, ArrowRight } from 'lucide-react';
import { projects } from '../lib/mockData';
import { Link } from 'react-router-dom';

export function ProjectsPreview() {
  // Show only first 3 projects
  const previewProjects = projects.slice(0, 3);

  return (
    <section id="projects" className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      
      {/* Orange gradient orbs */}
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-primary rounded-full blur-3xl opacity-5 dark:opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 glass rounded-full text-primary border border-primary/20 text-sm font-semibold">
              Our Impact
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-foreground">Featured </span>
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our current and completed projects making a real difference in communities.
          </p>
        </motion.div>

        {/* Projects Grid - Only 3 cards */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {previewProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              
              {/* Card */}
              <div className="relative glass rounded-2xl overflow-hidden border border-primary/10 group-hover:border-primary/30 transition-all h-full flex flex-col">
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <div className={`px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 ${
                      project.status === 'ongoing'
                        ? 'bg-primary text-white'
                        : 'bg-white dark:bg-gray-800 text-foreground'
                    }`}>
                      {project.status === 'ongoing' ? (
                        <>
                          <Clock size={12} />
                          Ongoing
                        </>
                      ) : (
                        <>
                          <CheckCircle size={12} />
                          Completed
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 mb-4">
                    <Tag size={16} className="text-primary" />
                    <span className="text-sm font-semibold text-primary capitalize">{project.category}</span>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground mb-6 leading-relaxed flex-1">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground pt-4 border-t border-primary/10">
                    <Calendar size={16} className="text-primary" />
                    {new Date(project.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Show More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link to="/projects">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-primary text-white rounded-full hover:shadow-xl hover:shadow-primary/30 transition-all"
            >
              <span>Show More Projects</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
