import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { supabase } from '../lib/supabase';

interface Story {
  id: string;
  name: string;
  location: string;
  profile_image_url: string;
  quote: string;
}

export function StoryPreview() {
  const [testimonials, setTestimonials] = useState<Story[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetchStories();
  }, []);

  const fetchStories = async () => {
    try {
      const { data, error } = await supabase
        .from('stories')
        .select('id, name, location, profile_image_url, quote')
        .order('created_at', { ascending: false })
        .limit(4);

      if (error) throw error;
      setTestimonials(data || []);
    } catch (error) {
      console.error('Error fetching stories:', error);
    } finally {
      setLoading(false);
    }
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
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
          className="text-center mb-16"
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
            <span className="gradient-text">VOICES OF CHANGE</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from the people whose lives have been transformed by our projects
          </p>
        </motion.div>

        {/* Carousel Container */}
        {loading ? (
          <div className="text-center py-12 text-muted-foreground mb-12">Loading stories...</div>
        ) : testimonials.length === 0 ? (
          <div className="text-center py-12 text-muted-foreground mb-12">No stories available yet.</div>
        ) : (
        <div className="relative max-w-5xl mx-auto mb-12">
          {/* Main Carousel Card */}
          <div className="relative glass rounded-3xl border border-primary/20 overflow-hidden">
            <div className="p-8 md:p-12">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col md:flex-row items-center gap-8 md:gap-12"
                >
                  {/* Image */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="absolute inset-0 bg-primary/30 rounded-3xl blur-2xl" />
                      <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-3xl overflow-hidden border-4 border-primary/30">
                        <ImageWithFallback
                          src={testimonials[currentIndex].profile_image_url}
                          alt={testimonials[currentIndex].name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-center md:text-left">
                    <div className="mb-6">
                      <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                        {testimonials[currentIndex].name}
                      </h3>
                      <p className="text-lg text-primary font-semibold">
                        {testimonials[currentIndex].location}
                      </p>
                    </div>
                    
                    <div className="relative">
                      <svg className="absolute -top-4 -left-2 text-primary/20" width="40" height="40" viewBox="0 0 40 40" fill="currentColor">
                        <path d="M10 20c0-5.523 4.477-10 10-10v10H10zm20 0c0-5.523 4.477-10 10-10v10H30z"/>
                      </svg>
                      <p className="text-xl md:text-2xl text-foreground italic leading-relaxed pl-8">
                        {testimonials[currentIndex].quote}
                      </p>
                    </div>
                  </div>
                </motion.div>
            </div>

            {/* Navigation Arrows */}
            <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none">
              <motion.button
                onClick={handlePrevious}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="pointer-events-auto w-12 h-12 rounded-full bg-primary/90 hover:bg-primary text-white flex items-center justify-center shadow-lg backdrop-blur-sm transition-all"
                aria-label="Previous story"
              >
                <ChevronLeft size={24} />
              </motion.button>
              
              <motion.button
                onClick={handleNext}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="pointer-events-auto w-12 h-12 rounded-full bg-primary/90 hover:bg-primary text-white flex items-center justify-center shadow-lg backdrop-blur-sm transition-all"
                aria-label="Next story"
              >
                <ChevronRight size={24} />
              </motion.button>
            </div>
          </div>

          {/* Indicator Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'bg-primary w-8' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
                aria-label={`Go to story ${index + 1}`}
              />
            ))}
          </div>
        </div>
        )}

        {/* More Stories Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link to="/story">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-primary text-white rounded-full hover:shadow-xl hover:shadow-primary/30 transition-all"
            >
              <span className="font-semibold">Read More Stories</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
