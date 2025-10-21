import { motion } from 'framer-motion';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Quote, Star, Target, CheckCircle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
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

export function StoryDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [story, setStory] = useState<Story | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStory();
  }, [id]);

  const fetchStory = async () => {
    try {
      const { data, error } = await supabase
        .from('stories')
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw error;
      setStory(data);
    } catch (error) {
      console.error('Error fetching story:', error);
      setStory(null);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground">Loading story...</p>
        </div>
      </section>
    );
  }

  if (!story) {
    return (
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Story Not Found</h2>
          <p className="text-muted-foreground mb-8">The story you're looking for doesn't exist.</p>
          <Link to="/story">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-primary text-white rounded-xl font-semibold"
            >
              Back to Stories
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

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass rounded-3xl overflow-hidden border border-primary/20 mb-12"
        >
          <div className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-start gap-8 mb-8">
              {/* Profile Image */}
              <div className="relative flex-shrink-0">
                <div className="absolute inset-0 bg-primary/30 rounded-3xl blur-xl" />
                <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-3xl overflow-hidden border-4 border-primary/30">
                  <ImageWithFallback
                    src={story.profile_image_url}
                    alt={story.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Name and Info */}
              <div className="flex-1">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  {story.name}
                </h1>
                <div className="flex items-center gap-2 text-lg text-muted-foreground mb-4">
                  <MapPin size={20} className="text-primary" />
                  <span>{story.location}</span>
                </div>
                <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                  <span className="text-primary font-semibold">{story.project}</span>
                </div>
              </div>
            </div>

            {/* Quote */}
            <div className="relative">
              <Quote className="text-primary/30 mb-4" size={40} />
              <blockquote className="text-2xl md:text-3xl text-foreground italic leading-relaxed">
                "{story.quote}"
              </blockquote>
            </div>
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Main Story */}
          <div className="lg:col-span-2 space-y-12">
            {/* Full Story */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">
                <span className="gradient-text">The</span> Full Story
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed text-lg whitespace-pre-line">
                  {story.story}
                </p>
              </div>
            </motion.div>

            {/* Hide old sections */}
            {false && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <Target className="text-primary" size={28} />
                  <h2 className="text-3xl font-bold text-foreground">
                    Challenges <span className="gradient-text">Overcome</span>
                  </h2>
                </div>
                <div className="space-y-4">
                  {story.challenges.map((challenge, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                      className="flex items-start gap-4 glass rounded-xl p-5 border border-primary/10 hover:border-primary/30 transition-all group"
                    >
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                      </div>
                      <p className="text-foreground leading-relaxed flex-1">{challenge}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Achievements */}
            {story.achievements && story.achievements.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <Star className="text-primary" size={28} />
                  <h2 className="text-3xl font-bold text-foreground">
                    Key <span className="gradient-text">Achievements</span>
                  </h2>
                </div>
                <div className="space-y-4">
                  {story.achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                      className="flex items-start gap-4 glass rounded-xl p-5 border border-primary/10 hover:border-primary/30 transition-all group"
                    >
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                        <CheckCircle className="text-primary" size={18} />
                      </div>
                      <p className="text-foreground leading-relaxed flex-1">{achievement}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Right Column - Impact Card */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="sticky top-24"
            >
              <div className="glass rounded-2xl p-8 border border-primary/10 mb-6">
                <div className="flex items-center gap-3 mb-6">
                  <Star className="text-primary" size={28} />
                  <h2 className="text-2xl font-bold text-foreground">
                    <span className="gradient-text">Impact</span>
                  </h2>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/10 rounded-xl blur-sm" />
                  <div className="relative bg-background/50 backdrop-blur-sm rounded-xl p-6 border border-primary/20">
                    <p className="text-foreground leading-relaxed">{story.impact}</p>
                  </div>
                </div>
              </div>

              {/* CTA Cards */}
              <div className="space-y-4">
                <div className="glass rounded-2xl p-6 border border-primary/10">
                  <h3 className="font-bold text-foreground mb-3">Inspired by this story?</h3>
                  <Link to="/share-story">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full relative group"
                    >
                      <div className="absolute inset-0 bg-primary rounded-xl blur-md opacity-50 group-hover:opacity-75 transition-opacity" />
                      <div className="relative px-6 py-3 bg-primary rounded-xl text-white font-semibold">
                        Share Your Story
                      </div>
                    </motion.button>
                  </Link>
                </div>

                <div className="glass rounded-2xl p-6 border border-primary/10">
                  <h3 className="font-bold text-foreground mb-3">Want to make a difference?</h3>
                  <Link to="/become-volunteer">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full px-6 py-3 glass rounded-xl font-semibold text-primary border border-primary/20 hover:border-primary/40 transition-all"
                    >
                      Become a Volunteer
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* More Stories CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-20 text-center"
        >
          <Link to="/story">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass rounded-xl font-semibold text-primary border border-primary/20 hover:border-primary/40 transition-all"
            >
              Read More Stories
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
