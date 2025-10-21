import { motion } from 'framer-motion';
import { MessageCircle, Heart, Image as ImageIcon, Upload, ArrowRight, Check } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';

export function ShareStory() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    location: '',
    storyTitle: '',
    storyType: '',
    projectInvolvement: '',
    story: '',
    consent: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Story submitted:', formData);
    alert('Thank you for sharing your story! We will review it and may feature it on our platform.');
  };

  const storyTypes = [
    'Personal Transformation',
    'Community Impact',
    'Educational Journey',
    'Environmental Initiative',
    'Technology Innovation',
    'Volunteer Experience',
    'Other'
  ];

  const benefits = [
    {
      icon: Heart,
      title: 'Inspire Others',
      description: 'Your story can motivate and encourage others to take action'
    },
    {
      icon: MessageCircle,
      title: 'Share Impact',
      description: 'Highlight the real change happening in communities worldwide'
    },
    {
      icon: ImageIcon,
      title: 'Build Community',
      description: 'Connect with fellow changemakers and share experiences'
    }
  ];

  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-background" />
        
        {/* Orange gradient orbs */}
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-primary rounded-full blur-3xl opacity-5 dark:opacity-10" />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-primary rounded-full blur-3xl opacity-5 dark:opacity-10" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-block mb-6"
              >
                <span className="px-4 py-2 glass rounded-full text-primary border border-primary/20 text-sm font-semibold">
                  Your Voice Matters
                </span>
              </motion.div>
              
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6">
                <span className="gradient-text">SHARE YOUR</span>
                <br />
                <span className="text-foreground">STORY</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Every story of change, impact, and transformation matters. Share your journey 
                with Team United and inspire a global community of changemakers.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-foreground">
                  <Check className="text-primary" size={20} />
                  <span>Inspire Change</span>
                </div>
                <div className="flex items-center gap-2 text-foreground">
                  <Check className="text-primary" size={20} />
                  <span>Build Community</span>
                </div>
                <div className="flex items-center gap-2 text-foreground">
                  <Check className="text-primary" size={20} />
                  <span>Amplify Impact</span>
                </div>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-2xl" />
              <div className="relative rounded-3xl overflow-hidden border border-primary/20">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1758525865744-3f0f0fa9a752?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW9wbGUlMjBzaGFyaW5nJTIwc3Rvcmllc3xlbnwxfHx8fDE3NjA3MzkyMjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Sharing Stories"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Share Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-foreground">Why </span>
              <span className="gradient-text">Share Your Story?</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-primary/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative glass rounded-2xl p-6 border border-primary/20 group-hover:border-primary/40 transition-all">
                    <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                      <Icon className="text-primary" size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Story Submission Form */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8 md:p-12 border border-primary/20"
          >
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="gradient-text">Submit Your Story</span>
              </h2>
              <p className="text-muted-foreground">
                Share how Team United's projects have impacted your life or community
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-foreground mb-2 font-semibold">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl glass border border-primary/20 focus:border-primary/40 focus:outline-none text-foreground"
                    placeholder="Full Name"
                  />
                </div>

                <div>
                  <label className="block text-foreground mb-2 font-semibold">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl glass border border-primary/20 focus:border-primary/40 focus:outline-none text-foreground"
                    placeholder="email@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-foreground mb-2 font-semibold">
                  Location (City, Country) *
                </label>
                <input
                  type="text"
                  required
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl glass border border-primary/20 focus:border-primary/40 focus:outline-none text-foreground"
                  placeholder="e.g., Nairobi, Kenya"
                />
              </div>

              <div>
                <label className="block text-foreground mb-2 font-semibold">
                  Story Title *
                </label>
                <input
                  type="text"
                  required
                  value={formData.storyTitle}
                  onChange={(e) => setFormData({ ...formData, storyTitle: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl glass border border-primary/20 focus:border-primary/40 focus:outline-none text-foreground"
                  placeholder="Give your story a compelling title"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-foreground mb-2 font-semibold">
                    Story Type *
                  </label>
                  <select
                    required
                    value={formData.storyType}
                    onChange={(e) => setFormData({ ...formData, storyType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl glass border border-primary/20 focus:border-primary/40 focus:outline-none text-foreground"
                  >
                    <option value="">Select Type</option>
                    {storyTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-foreground mb-2 font-semibold">
                    Project/Initiative Involved
                  </label>
                  <input
                    type="text"
                    value={formData.projectInvolvement}
                    onChange={(e) => setFormData({ ...formData, projectInvolvement: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl glass border border-primary/20 focus:border-primary/40 focus:outline-none text-foreground"
                    placeholder="e.g., Clean Water Initiative"
                  />
                </div>
              </div>

              <div>
                <label className="block text-foreground mb-2 font-semibold">
                  Your Story * (Minimum 200 characters)
                </label>
                <textarea
                  required
                  value={formData.story}
                  onChange={(e) => setFormData({ ...formData, story: e.target.value })}
                  rows={8}
                  minLength={200}
                  className="w-full px-4 py-3 rounded-xl glass border border-primary/20 focus:border-primary/40 focus:outline-none text-foreground resize-none"
                  placeholder="Share your experience, transformation, or the impact you've witnessed. Include specific details about how the project changed your life or community..."
                />
                <p className="text-sm text-muted-foreground mt-2">
                  {formData.story.length} / 200 characters minimum
                </p>
              </div>

              <div className="glass rounded-xl p-6 border border-primary/20">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    className="mt-1 w-5 h-5 rounded border-primary/20 text-primary focus:ring-primary"
                  />
                  <div>
                    <span className="text-foreground font-semibold block mb-1">
                      Consent to Share *
                    </span>
                    <p className="text-sm text-muted-foreground">
                      I consent to Team United using my story and potentially my name/location in promotional 
                      materials, website, and social media to inspire others and showcase the impact of our work. 
                      I understand that my story may be edited for clarity and length.
                    </p>
                  </div>
                </label>
              </div>

              <div className="glass rounded-xl p-6 border border-primary/20 bg-primary/5">
                <div className="flex gap-3">
                  <Upload className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="text-foreground font-semibold mb-2">Optional: Add Photos</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      After submitting this form, you'll receive an email with instructions to upload photos 
                      that support your story (optional but encouraged).
                    </p>
                  </div>
                </div>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-primary text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-primary/30 transition-all flex items-center justify-center gap-2"
              >
                Submit My Story
                <ArrowRight size={20} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Impact Statement */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center glass rounded-3xl p-8 md:p-12 border border-primary/20"
          >
            <Heart className="mx-auto mb-6 text-primary" size={48} />
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Your Story Creates Ripples of Change
            </h3>
            <p className="text-lg text-muted-foreground">
              Every story shared helps us demonstrate the real impact of our work, 
              inspire more people to get involved, and secure support for future initiatives. 
              Thank you for being part of the Team United story.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
