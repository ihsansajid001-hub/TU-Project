import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Heart, Users, Lightbulb } from 'lucide-react';
import { milestones } from '../lib/mockData';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
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
                <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative glass rounded-2xl p-8 border border-primary/10 group-hover:border-primary/30 transition-all h-full">
                  <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Timeline */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-32"
        >
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-foreground">Our </span>
              <span className="gradient-text">Journey</span>
            </h3>
            <p className="text-xl text-muted-foreground">The story of growth, impact, and transformation</p>
          </div>
          
          <div className="relative max-w-5xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-primary/30 md:transform md:-translate-x-1/2" />

            {/* Timeline Items */}
            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <motion.div
                    whileHover={{ scale: 1.5 }}
                    className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background md:transform md:-translate-x-1/2 z-10"
                  >
                    <div className="absolute inset-0 bg-primary rounded-full blur-md animate-pulse" />
                  </motion.div>

                  {/* Content */}
                  <div className={`ml-16 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="relative group"
                    >
                      <div className="absolute inset-0 bg-primary/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="relative glass rounded-2xl p-8 border border-primary/10 group-hover:border-primary/30 transition-all">
                        <div className="text-4xl font-bold gradient-text mb-3">{milestone.year}</div>
                        <h4 className="text-xl font-bold text-foreground mb-3">{milestone.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
