import { motion } from 'framer-motion';
import { Check, Building2, Globe, Users, Zap, Heart, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';

export function BecomePartner() {
  const [formData, setFormData] = useState({
    organizationName: '',
    contactName: '',
    email: '',
    phone: '',
    organizationType: '',
    website: '',
    partnershipInterest: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Partner application submitted:', formData);
    alert('Thank you for your interest! We will contact you soon.');
  };

  const benefits = [
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Access our network of chapters across 25 countries and 5 continents'
    },
    {
      icon: Users,
      title: 'Community Impact',
      description: 'Collaborate on initiatives that create meaningful change in communities'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Partner on cutting-edge solutions to address global challenges'
    },
    {
      icon: Heart,
      title: 'Shared Values',
      description: 'Align with organizations committed to sustainable development goals'
    }
  ];

  const partnershipTypes = [
    'Corporate Partnership',
    'NGO/Non-Profit Collaboration',
    'Educational Institution',
    'Government Agency',
    'Technology Partner',
    'Other'
  ];

  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-background" />
        
        {/* Orange gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl opacity-5 dark:opacity-10" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl opacity-5 dark:opacity-10" />

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
                  Partnership Opportunities
                </span>
              </motion.div>
              
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6">
                <span className="gradient-text">BECOME A</span>
                <br />
                <span className="text-foreground">PARTNER</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Join forces with Team United to amplify your impact and create lasting change. 
                Together, we can tackle global challenges and build a sustainable future.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-foreground">
                  <Check className="text-primary" size={20} />
                  <span>Global Network</span>
                </div>
                <div className="flex items-center gap-2 text-foreground">
                  <Check className="text-primary" size={20} />
                  <span>Youth-Led Initiative</span>
                </div>
                <div className="flex items-center gap-2 text-foreground">
                  <Check className="text-primary" size={20} />
                  <span>Proven Impact</span>
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
                  src="https://images.unsplash.com/photo-1758599543157-bc1a94fec33c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJ0bmVyc2hpcCUyMGhhbmRzaGFrZSUyMGJ1c2luZXNzfGVufDF8fHx8MTc2MDcwMDcxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Partnership"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-foreground">Partnership </span>
              <span className="gradient-text">Benefits</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                <span className="gradient-text">Apply for Partnership</span>
              </h2>
              <p className="text-muted-foreground">
                Fill out the form below and our partnerships team will get in touch with you
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-foreground mb-2 font-semibold">
                    Organization Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.organizationName}
                    onChange={(e) => setFormData({ ...formData, organizationName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl glass border border-primary/20 focus:border-primary/40 focus:outline-none text-foreground"
                    placeholder="Your Organization"
                  />
                </div>

                <div>
                  <label className="block text-foreground mb-2 font-semibold">
                    Contact Person *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.contactName}
                    onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl glass border border-primary/20 focus:border-primary/40 focus:outline-none text-foreground"
                    placeholder="Full Name"
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
                    placeholder="email@example.com"
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
                    Partnership Type *
                  </label>
                  <select
                    required
                    value={formData.organizationType}
                    onChange={(e) => setFormData({ ...formData, organizationType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl glass border border-primary/20 focus:border-primary/40 focus:outline-none text-foreground"
                  >
                    <option value="">Select Type</option>
                    {partnershipTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-foreground mb-2 font-semibold">
                    Website
                  </label>
                  <input
                    type="url"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl glass border border-primary/20 focus:border-primary/40 focus:outline-none text-foreground"
                    placeholder="https://yourwebsite.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-foreground mb-2 font-semibold">
                  Areas of Interest *
                </label>
                <input
                  type="text"
                  required
                  value={formData.partnershipInterest}
                  onChange={(e) => setFormData({ ...formData, partnershipInterest: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl glass border border-primary/20 focus:border-primary/40 focus:outline-none text-foreground"
                  placeholder="e.g., Education, Technology, Environmental Conservation"
                />
              </div>

              <div>
                <label className="block text-foreground mb-2 font-semibold">
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl glass border border-primary/20 focus:border-primary/40 focus:outline-none text-foreground resize-none"
                  placeholder="Tell us about your organization and partnership vision..."
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
