import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  ];

  return (
    <footer className="relative bg-background border-t border-primary/10 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl dark:opacity-20" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About Section */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center mb-6"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-primary/30 rounded-xl blur-md opacity-50" />
                <img 
                  src="/main._logo.png" 
                  alt="Team United Logo" 
                  className="relative h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 object-contain"
                />
              </div>
              <span className="ml-2 sm:ml-3 text-lg sm:text-xl font-bold text-foreground">
                Team United
              </span>
            </motion.div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Making a positive impact in communities through education, charity, 
              environmental conservation, and technology. Together, we build a better tomorrow.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 glass rounded-xl border border-primary/20 text-muted-foreground hover:text-primary hover:border-primary/40 transition-all"
                    aria-label={social.label}
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-foreground font-bold mb-6 text-lg">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Gallery', path: '/gallery' },
                { name: 'Our Story', path: '/story' },
                { name: 'Get in Touch', path: '/get-in-touch' }
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path}>
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="text-muted-foreground hover:text-primary transition-colors inline-block"
                    >
                      {link.name}
                    </motion.div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Join Us */}
          <div>
            <h3 className="text-foreground font-bold mb-6 text-lg">Join Us</h3>
            <ul className="space-y-3">
              {[
                { name: 'Become a Partner', path: '/become-partner' },
                { name: 'Become a Volunteer', path: '/become-volunteer' },
                { name: 'Share My Story', path: '/share-story' },
                { name: 'FAQ', path: '/faq' }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path}>
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="text-muted-foreground hover:text-primary transition-colors inline-block"
                    >
                      {link.name}
                    </motion.div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-foreground font-bold mb-6 text-lg">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin size={18} className="text-primary flex-shrink-0 mt-1" />
                <span className="text-sm">123 Community Street<br />City, Country</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Phone size={18} className="text-primary flex-shrink-0" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Mail size={18} className="text-primary flex-shrink-0" />
                <span className="text-sm">info@teamunited.org</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm text-center md:text-left">
              &copy; {currentYear} Team United. All rights reserved.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <Link to="/privacy" className="hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
                <span>•</span>
                <Link to="/terms" className="hover:text-primary transition-colors">
                  Terms & Conditions
                </Link>
              </div>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 text-muted-foreground text-sm"
              >
                <span>Made with</span>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <Heart className="text-primary" size={16} fill="currentColor" />
                </motion.div>
                <span>for a better tomorrow</span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
