import { motion } from 'framer-motion';
import { Target, Heart, Users, Lightbulb, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function AboutPreview() {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To create sustainable positive change in communities through innovative programs and collaborative action.'
    },
    {
      icon: Heart,
      title: 'Our Values',
      description: 'Compassion, integrity, innovation, and inclusivity guide everything we do at Team United.'
    },
    {
      icon: Users,
      title: 'Our Team',
      description: 'A diverse group of passionate individuals committed to making a real difference in people\'s lives.'
    },
    {
      icon: Lightbulb,
      title: 'Our Vision',
      description: 'A world where every individual has access to opportunities for growth, education, and a better quality of life.'
    }
  ];

  return (
    <section id="about" className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      
      {/* Orange gradient orbs */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary rounded-full blur-3xl opacity-5 dark:opacity-10" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary rounded-full blur-3xl opacity-5 dark:opacity-10" />

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
              Who We Are
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-foreground">About </span>
            <span className="gradient-text">Team United</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We are a community-driven organization dedicated to creating meaningful impact 
            through education, charity, environmental initiatives, and technology.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
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
                <div className="relative glass rounded-3xl p-8 border border-primary/10 group-hover:border-primary/30 transition-all h-full">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-all">
                      <Icon className="text-primary" size={32} />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* See More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link to="/about">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-primary text-white rounded-full hover:shadow-xl hover:shadow-primary/30 transition-all"
            >
              <span>See More About Us</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
