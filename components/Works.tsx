import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { works } from '../lib/mockData';

export function Works() {
  return (
    <section id="works" className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      
      {/* Orange gradient orbs */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl opacity-5 dark:opacity-10" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl opacity-5 dark:opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 glass rounded-full text-primary border border-primary/20 text-sm font-semibold">
              What We Do
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-foreground">Our </span>
            <span className="gradient-text">Gallery</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the various causes and initiatives we're passionate about and actively working on.
          </p>
        </motion.div>

        {/* Works Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {works.map((work, index) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              
              {/* Card */}
              <div className="relative glass rounded-3xl overflow-hidden border border-primary/10 group-hover:border-primary/30 transition-all">
                {/* Image */}
                <div className="relative h-80 overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  
                  {/* Overlay content on image */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      className="relative"
                    >
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                        {work.title}
                      </h3>
                    </motion.div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                    {work.description}
                  </p>
                  <motion.a
                    href={work.link}
                    whileHover={{ x: 5 }}
                    className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-4 transition-all"
                  >
                    Learn More
                    <ArrowRight size={20} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 rounded-xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-primary transition-transform group-hover:scale-105" />
            <div className="absolute inset-0 bg-primary blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
            <span className="relative text-white flex items-center gap-2 font-semibold">
              View All Initiatives
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
