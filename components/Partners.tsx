import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function Partners() {
  const partners = [
    { name: 'UNESCO', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/UNESCO_logo.svg' },
    { name: 'UNICEF', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/UNICEF_Logo.svg' },
    { name: 'WHO', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/47/Flag_of_WHO.svg' },
    { name: 'UN', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/UN_emblem_blue.svg' },
    { name: 'Red Cross', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d2/ICRC_logo.svg' },
    { name: 'World Bank', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f8/World_Bank_Group_logo.svg' },
  ];

  const [currentStartIndex, setCurrentStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);

  // Adjust visible count based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(2);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(3);
      } else {
        setVisibleCount(4);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-rotate partners
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStartIndex((prev) => (prev + 1) % partners.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [partners.length]);

  const getVisiblePartners = () => {
    const visible = [];
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentStartIndex + i) % partners.length;
      visible.push(partners[index]);
    }
    return visible;
  };

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-border/50">
      {/* Background */}
      <div className="absolute inset-0 bg-background/50 backdrop-blur-sm" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-foreground">OUR </span>
            <span className="gradient-text">PARTNERS</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Collaborating with leading organizations to maximize our global impact
          </p>
        </motion.div>

        {/* Partners Grid */}
        <div className="relative">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12">
            {getVisiblePartners().map((partner, index) => (
              <motion.div
                key={`${partner.name}-${currentStartIndex}-${index}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center justify-center"
              >
                <div className="relative group">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  {/* Logo container */}
                  <div className="relative glass rounded-2xl p-6 md:p-8 border border-primary/10 group-hover:border-primary/30 transition-all h-32 w-full flex items-center justify-center">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all opacity-60 group-hover:opacity-100"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Fade overlays for visual effect */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent pointer-events-none" />
        </div>

        {/* Progress indicator */}
        <div className="flex justify-center gap-1.5 mt-10">
          {partners.map((_, index) => (
            <div
              key={index}
              className={`h-1.5 rounded-full transition-all ${
                index === currentStartIndex
                  ? 'w-8 bg-primary'
                  : 'w-1.5 bg-muted-foreground/30'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
