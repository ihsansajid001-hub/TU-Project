import { motion } from 'framer-motion';
import { Globe, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

interface Leader {
  id: string;
  name: string;
  role: string;
  image_url: string;
}

export function Leaders() {
  const [leaders, setLeaders] = useState<Leader[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLeaders();
  }, []);

  const fetchLeaders = async () => {
    try {
      const { data, error } = await supabase
        .from('leaders')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setLeaders(data || []);
    } catch (error) {
      console.error('Error fetching leaders:', error);
    } finally {
      setLoading(false);
    }
  };

  const globalStats = [
    { number: '15+', label: 'Chapters Worldwide' },
    { number: '50+', label: 'Partner Organizations' },
    { number: '25', label: 'Countries Reached' }
  ];



  return (
    <section id="leaders" className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      
      {/* Orange gradient orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl opacity-5 dark:opacity-10" />

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
              Our Team
            </span>
          </motion.div>
          <h2 className="text-display text-4xl md:text-5xl lg:text-7xl font-bold mb-6">
            <span className="text-foreground">MEET OUR </span>
            <span className="gradient-text">CHANGE LEADERS</span>
          </h2>
          <p className="text-body text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate individuals driving positive change in communities around the world
          </p>
        </motion.div>

        {/* Team Grid */}
        {loading ? (
          <div className="text-center py-12 text-muted-foreground mb-32">Loading leaders...</div>
        ) : leaders.length === 0 ? (
          <div className="text-center py-12 text-muted-foreground mb-32">No leaders available yet.</div>
        ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.id}
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
                <div className="relative h-96 overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="w-full h-full"
                  >
                    <ImageWithFallback
                      src={leader.image_url}
                      alt={leader.name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80" />
                  
                  {/* Content overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                    >
                      <h3 className="text-heading text-3xl font-bold text-white mb-2">
                        {leader.name}
                      </h3>
                      <p className="text-accent text-primary text-lg">
                        {leader.role}
                      </p>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        )}

        {/* Global Partnerships Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-primary/5 rounded-3xl blur-3xl" />
          
          <div className="relative glass rounded-3xl p-8 md:p-12 border border-primary/20">
            {/* Title */}
            <div className="text-center mb-12">
              <h2 className="text-display text-3xl md:text-4xl lg:text-6xl font-bold mb-3">
                <span className="gradient-text">GLOBAL NETWORK, </span>
                <span className="text-foreground">LOCAL </span>
                <span className="gradient-text">IMPACT</span>
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mt-4">
                Youth-led chapters collaborating across continents to create sustainable change
              </p>
            </div>

            {/* Interactive World Map - Coming Soon */}
            <div className="mb-10">
              <div className="relative rounded-2xl overflow-hidden border-2 border-primary/30 shadow-2xl bg-background" style={{ minHeight: '600px' }}>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <Globe className="text-primary/30 mb-6" size={80} />
                  <h3 className="text-3xl md:text-4xl font-bold gradient-text mb-3">
                    Interactive World Map
                  </h3>
                  <p className="text-lg text-muted-foreground">
                    Coming Soon
                  </p>
                  <p className="text-sm text-muted-foreground/70 mt-2">
                    Explore our global chapters across 18 countries
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Stats Cards */}
              {globalStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative rounded-2xl p-6 border border-primary/20 bg-primary/5 backdrop-blur-sm group-hover:border-primary/40 transition-all">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center">
                        <Globe className="text-primary" size={28} />
                      </div>
                      <div className="text-4xl md:text-5xl font-bold gradient-text">{stat.number}</div>
                    </div>
                    <p className="text-base md:text-lg text-foreground font-semibold">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Description Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-10 rounded-2xl p-8 border border-primary/20 bg-primary shadow-xl"
            >
              <p className="text-white leading-relaxed text-base md:text-lg mb-4">
                Our mission unites young leaders worldwide to drive meaningful change through collaborative action. 
                With a focus on the <span className="font-bold">United Nations Sustainable Development Goals,</span> 
                we're building a movement where every chapter contributes to our shared vision of a better tomorrow.
              </p>
              <p className="text-white leading-relaxed text-base md:text-lg">
                As a proud member of the <span className="font-bold">UNESCO GAP Partner Network,</span> Team United operates 
                <span className="font-bold"> 14 active chapters spanning 5 continents.</span> Together, we're empowering 
                the next generation to tackle global challenges while creating lasting impact in their local communities.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center">
              <Link to="/become-partner">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-8 py-4 rounded-xl overflow-hidden"
                >
                  <div className="absolute inset-0 bg-primary transition-transform group-hover:scale-105" />
                  <div className="absolute inset-0 bg-primary blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
                  <span className="relative text-white font-semibold flex items-center justify-center gap-2">
                    BECOME A PARTNER
                    <ArrowRight size={20} />
                  </span>
                </motion.button>
              </Link>
              
              <Link to="/become-volunteer">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 glass rounded-xl border border-primary/30 hover:border-primary/60 transition-all"
                >
                  <span className="text-foreground font-semibold">BECOME A VOLUNTEER</span>
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
