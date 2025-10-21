import { motion } from 'framer-motion';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, MapPin, Users, Target, TrendingUp, CheckCircle, Clock } from 'lucide-react';
import { projects } from '../lib/mockData';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === Number(id));

  if (!project) {
    return (
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Project Not Found</h2>
          <p className="text-muted-foreground mb-8">The project you're looking for doesn't exist.</p>
          <Link to="/projects">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-primary text-white rounded-xl font-semibold"
            >
              Back to Projects
            </motion.button>
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      
      {/* Orange gradient orbs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl opacity-5 dark:opacity-10" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl opacity-5 dark:opacity-10" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-semibold">Back</span>
        </motion.button>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden mb-12 h-[400px] md:h-[500px]"
        >
          <ImageWithFallback
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          
          {/* Status Badge */}
          <div className="absolute top-8 right-8">
            <div className={`px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 backdrop-blur-sm ${
              project.status === 'ongoing'
                ? 'bg-primary text-white'
                : 'bg-white dark:bg-gray-800 text-foreground'
            }`}>
              {project.status === 'ongoing' ? (
                <>
                  <Clock size={16} />
                  Ongoing
                </>
              ) : (
                <>
                  <CheckCircle size={16} />
                  Completed
                </>
              )}
            </div>
          </div>

          {/* Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="inline-block px-4 py-2 rounded-full bg-primary/20 border border-primary/30 backdrop-blur-sm mb-4">
                <span className="text-primary font-semibold capitalize">{project.category}</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                {project.title}
              </h1>
              <p className="text-xl text-white/90 max-w-3xl">
                {project.description}
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Project Meta Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          <div className="glass rounded-2xl p-6 border border-primary/10">
            <Calendar className="text-primary mb-3" size={24} />
            <p className="text-sm text-muted-foreground mb-1">Timeline</p>
            <p className="text-foreground font-semibold">{project.timeline || 'In Progress'}</p>
          </div>
          <div className="glass rounded-2xl p-6 border border-primary/10">
            <MapPin className="text-primary mb-3" size={24} />
            <p className="text-sm text-muted-foreground mb-1">Location</p>
            <p className="text-foreground font-semibold">{project.location || 'Multiple Locations'}</p>
          </div>
          <div className="glass rounded-2xl p-6 border border-primary/10">
            <Users className="text-primary mb-3" size={24} />
            <p className="text-sm text-muted-foreground mb-1">Team Size</p>
            <p className="text-foreground font-semibold">{project.teamSize || 'Volunteer-driven'}</p>
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Full Description */}
            {project.fullDescription && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  <span className="gradient-text">About</span> This Project
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {project.fullDescription}
                  </p>
                </div>
              </motion.div>
            )}

            {/* Goals */}
            {project.goals && project.goals.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <Target className="text-primary" size={28} />
                  <h2 className="text-3xl font-bold text-foreground">
                    Project <span className="gradient-text">Goals</span>
                  </h2>
                </div>
                <div className="space-y-4">
                  {project.goals.map((goal, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                      className="flex items-start gap-4 glass rounded-xl p-5 border border-primary/10 hover:border-primary/30 transition-all group"
                    >
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                        <CheckCircle className="text-primary" size={18} />
                      </div>
                      <p className="text-foreground leading-relaxed flex-1">{goal}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Gallery */}
            {project.gallery && project.gallery.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Project <span className="gradient-text">Gallery</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.gallery.map((image, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                      className="relative rounded-2xl overflow-hidden aspect-video group cursor-pointer"
                    >
                      <ImageWithFallback
                        src={image}
                        alt={`${project.title} gallery ${index + 1}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Right Column - Impact Metrics */}
          <div className="lg:col-span-1">
            {project.impact && project.impact.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="sticky top-24"
              >
                <div className="glass rounded-2xl p-8 border border-primary/10">
                  <div className="flex items-center gap-3 mb-8">
                    <TrendingUp className="text-primary" size={28} />
                    <h2 className="text-2xl font-bold text-foreground">
                      <span className="gradient-text">Impact</span> Metrics
                    </h2>
                  </div>
                  <div className="space-y-6">
                    {project.impact.map((metric, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                        className="relative"
                      >
                        <div className="absolute inset-0 bg-primary/10 rounded-xl blur-sm" />
                        <div className="relative bg-background/50 backdrop-blur-sm rounded-xl p-6 border border-primary/20">
                          <p className="text-sm text-muted-foreground mb-2">{metric.label}</p>
                          <p className="text-3xl font-bold gradient-text">{metric.value}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="mt-8 pt-8 border-t border-primary/10">
                    <p className="text-sm text-muted-foreground mb-4">
                      Want to contribute to this project?
                    </p>
                    <Link to="/become-volunteer">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full relative group"
                      >
                        <div className="absolute inset-0 bg-primary rounded-xl blur-md opacity-50 group-hover:opacity-75 transition-opacity" />
                        <div className="relative px-6 py-3 bg-primary rounded-xl text-white font-semibold">
                          Join as Volunteer
                        </div>
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Related Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-20 text-center"
        >
          <Link to="/projects">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass rounded-xl font-semibold text-primary border border-primary/20 hover:border-primary/40 transition-all"
            >
              View All Projects
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
