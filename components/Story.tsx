import { motion } from 'framer-motion';
import { Quote, MapPin, Star } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

interface Story {
  id: string;
  name: string;
  location: string;
  project: string;
  profile_image_url: string;
  quote: string;
  story: string;
  impact: string;
}

export function Story() {
  const [testimonials, setTestimonials] = useState<Story[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStories();
  }, []);

  const fetchStories = async () => {
    try {
      const { data, error } = await supabase
        .from('stories')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setTestimonials(data || []);
    } catch (error) {
      console.error('Error fetching stories:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="story" className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      
      {/* Animated orange orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl dark:opacity-20"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl dark:opacity-15"
      />

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
              Impact Stories
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">LIVES CHANGED,</span>
            <br />
            <span className="text-foreground">COMMUNITIES </span>
            <span className="gradient-text">TRANSFORMED</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real stories from the people whose lives have been transformed through Team United's projects and initiatives.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        {loading ? (
          <div className="text-center py-12 text-muted-foreground mb-20">Loading stories...</div>
        ) : testimonials.length === 0 ? (
          <div className="text-center py-12 text-muted-foreground mb-20">No stories available yet.</div>
        ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <Link key={testimonial.id} to={`/story/${testimonial.id}`}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative cursor-pointer"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                
                {/* Card */}
                <div className="relative glass rounded-3xl overflow-hidden border border-primary/10 group-hover:border-primary/30 transition-all h-full flex flex-col">
                {/* Header with Image and Info */}
                <div className="p-8 pb-6">
                  <div className="flex items-start gap-6 mb-6">
                    {/* Profile Image */}
                    <div className="relative flex-shrink-0">
                      <div className="absolute inset-0 bg-primary/30 rounded-2xl blur-lg" />
                      <div className="relative w-24 h-24 rounded-2xl overflow-hidden border-2 border-primary/30">
                        <ImageWithFallback
                          src={testimonial.profile_image_url}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Name and Location */}
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        {testimonial.name}
                      </h3>
                      <div className="flex items-center gap-2 text-muted-foreground mb-3">
                        <MapPin size={16} className="text-primary" />
                        <span>{testimonial.location}</span>
                      </div>
                      <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                        <span className="text-sm text-primary font-semibold">
                          {testimonial.project}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="relative mb-6">
                    <Quote className="text-primary/30 mb-2" size={32} />
                    <p className="text-lg text-foreground italic leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                  </div>
                </div>

                {/* Story */}
                <div className="px-8 pb-6 flex-1">
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {testimonial.story}
                  </p>
                </div>

                {/* Impact Badge */}
                <div className="px-8 pb-8">
                  <div className="rounded-xl bg-primary/5 border border-primary/20 p-4">
                    <div className="flex items-start gap-3">
                      <Star className="text-primary flex-shrink-0 mt-1" size={20} />
                      <div>
                        <p className="text-sm font-semibold text-primary mb-1">Impact</p>
                        <p className="text-sm text-foreground">{testimonial.impact}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </Link>
          ))}
        </div>
        )}

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="glass rounded-3xl p-12 md:p-16 border border-primary/20">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-foreground">Want to Share </span>
              <span className="gradient-text">Your Story?</span>
            </h3>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              If Team United has made a difference in your life, we'd love to hear from you. 
              Your story could inspire others to join our mission.
            </p>
            <Link to="/share-story">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-block"
              >
                <div className="absolute inset-0 bg-primary rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
                <div className="relative px-8 py-4 bg-primary rounded-xl text-white font-semibold">
                  Share Your Story
                </div>
              </motion.div>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
