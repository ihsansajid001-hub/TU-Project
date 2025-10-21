import { motion } from 'framer-motion';
import { Heart, Users, Lightbulb, Clock, MapPin, ArrowRight, Check } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';

export function BecomeVolunteer() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    age: '',
    location: '',
    interests: [] as string[],
    availability: '',
    experience: '',
    motivation: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Volunteer application submitted:', formData);
    alert('Thank you for applying! We will review your application and contact you soon.');
  };

  const opportunities = [
    {
      icon: Users,
      title: 'Community Outreach',
      description: 'Engage directly with communities and help organize local events and initiatives'
    },
    {
      icon: Lightbulb,
      title: 'Project Development',
      description: 'Contribute your skills to design and implement impactful projects'
    },
    {
      icon: Heart,
      title: 'Fundraising',
      description: 'Help raise funds and resources to support our global initiatives'
    },
    {
      icon: Clock,
      title: 'Flexible Commitment',
      description: 'Choose opportunities that fit your schedule and availability'
    }
  ];

  const interestAreas = [
    'Education',
    'Environmental Conservation',
    'Technology & Innovation',
    'Community Development',
    'Charity & Fundraising',
    'Event Planning',
    'Social Media & Marketing',
    'Graphic Design',
    'Content Writing',
    'Other'
  ];

  const handleInterestToggle = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-background" />
        
        {/* Orange gradient orbs */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl opacity-5 dark:opacity-10" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl opacity-5 dark:opacity-10" />

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
                  Join Our Team
                </span>
              </motion.div>
              
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6">
                <span className="gradient-text">BECOME A</span>
                <br />
                <span className="text-foreground">VOLUNTEER</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Be part of a global movement of young changemakers. Use your skills, passion, 
                and time to create meaningful impact in communities around the world.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-foreground">
                  <Check className="text-primary" size={20} />
                  <span>Youth-Led Network</span>
                </div>
                <div className="flex items-center gap-2 text-foreground">
                  <Check className="text-primary" size={20} />
                  <span>Global Community</span>
                </div>
                <div className="flex items-center gap-2 text-foreground">
                  <Check className="text-primary" size={20} />
                  <span>Make Real Impact</span>
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
                  src="https://images.unsplash.com/photo-1652811717003-acaf7ed25c1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2b2x1bnRlZXJzJTIwY29tbXVuaXR5JTIwc2VydmljZXxlbnwxfHx8fDE3NjA2NTI2NzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Volunteers"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Opportunities Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-foreground">Volunteer </span>
              <span className="gradient-text">Opportunities</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {opportunities.map((opportunity, index) => {
              const Icon = opportunity.icon;
              return (
                <motion.div
                  key={opportunity.title}
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
                    <h3 className="text-xl font-bold text-foreground mb-2">{opportunity.title}</h3>
                    <p className="text-muted-foreground">{opportunity.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
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
                <span className="gradient-text">Volunteer Application</span>
              </h2>
              <p className="text-muted-foreground">
                Join our community of passionate volunteers making a difference
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-foreground mb-2 font-semibold">
                    First Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl glass border border-primary/20 focus:border-primary/40 focus:outline-none text-foreground"
                    placeholder="John"
                  />
                </div>

                <div>
                  <label className="block text-foreground mb-2 font-semibold">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl glass border border-primary/20 focus:border-primary/40 focus:outline-none text-foreground"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
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
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-foreground mb-2 font-semibold">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl glass border border-primary/20 focus:border-primary/40 focus:outline-none text-foreground"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-foreground mb-2 font-semibold">
                    Age *
                  </label>
                  <input
                    type="number"
                    required
                    value={formData.age}
                    onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl glass border border-primary/20 focus:border-primary/40 focus:outline-none text-foreground"
                    placeholder="18"
                    min="13"
                  />
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
                    placeholder="New York, USA"
                  />
                </div>
              </div>

              <div>
                <label className="block text-foreground mb-3 font-semibold">
                  Areas of Interest * (Select all that apply)
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {interestAreas.map(interest => (
                    <label
                      key={interest}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={formData.interests.includes(interest)}
                        onChange={() => handleInterestToggle(interest)}
                        className="w-4 h-4 rounded border-primary/20 text-primary focus:ring-primary"
                      />
                      <span className="text-foreground text-sm">{interest}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-foreground mb-2 font-semibold">
                  Availability *
                </label>
                <select
                  required
                  value={formData.availability}
                  onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl glass border border-primary/20 focus:border-primary/40 focus:outline-none text-foreground"
                >
                  <option value="">Select Availability</option>
                  <option value="1-5 hours/week">1-5 hours/week</option>
                  <option value="6-10 hours/week">6-10 hours/week</option>
                  <option value="11-20 hours/week">11-20 hours/week</option>
                  <option value="20+ hours/week">20+ hours/week</option>
                </select>
              </div>

              <div>
                <label className="block text-foreground mb-2 font-semibold">
                  Previous Volunteer Experience
                </label>
                <textarea
                  value={formData.experience}
                  onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl glass border border-primary/20 focus:border-primary/40 focus:outline-none text-foreground resize-none"
                  placeholder="Tell us about your previous volunteer work or relevant experience..."
                />
              </div>

              <div>
                <label className="block text-foreground mb-2 font-semibold">
                  Why do you want to volunteer with Team United? *
                </label>
                <textarea
                  required
                  value={formData.motivation}
                  onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl glass border border-primary/20 focus:border-primary/40 focus:outline-none text-foreground resize-none"
                  placeholder="Share your motivation and what you hope to achieve..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-primary text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-primary/30 transition-all flex items-center justify-center gap-2"
              >
                Submit Application
                <ArrowRight size={20} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
