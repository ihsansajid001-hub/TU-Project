import { motion } from 'framer-motion';
import { FileText, Calendar } from 'lucide-react';

export function TermsAndConditions() {
  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      
      {/* Orange gradient orbs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl opacity-5 dark:opacity-10" />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 glass rounded-full text-primary border border-primary/20 text-sm font-semibold flex items-center gap-2">
              <FileText size={16} />
              Legal
            </span>
          </motion.div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-foreground">Terms & </span>
            <span className="gradient-text">Conditions</span>
          </h1>
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Calendar size={16} />
            <span>Last Updated: October 2025</span>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass rounded-3xl p-8 md:p-12 border border-primary/20 space-y-8"
        >
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing and using the Team United website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these terms, please do not use our services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Use of Services</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Team United provides a platform for youth-led initiatives focused on sustainable development goals. You agree to use our services only for lawful purposes and in accordance with these terms.
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>You must be at least 13 years old to use our services</li>
              <li>You are responsible for maintaining the confidentiality of your account</li>
              <li>You agree not to use the service for any illegal or unauthorized purpose</li>
              <li>You will not transmit any harmful code or malicious software</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Volunteer Participation</h2>
            <p className="text-muted-foreground leading-relaxed">
              When you register as a volunteer with Team United, you acknowledge that:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mt-4">
              <li>Participation is voluntary and unpaid unless otherwise specified</li>
              <li>You will conduct yourself professionally and respectfully</li>
              <li>You will comply with project guidelines and safety protocols</li>
              <li>Team United reserves the right to remove volunteers who violate our code of conduct</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Intellectual Property</h2>
            <p className="text-muted-foreground leading-relaxed">
              All content on the Team United website, including text, graphics, logos, images, and software, is the property of Team United or its content suppliers and is protected by international copyright laws. You may not reproduce, distribute, or create derivative works without our express written permission.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">5. User-Generated Content</h2>
            <p className="text-muted-foreground leading-relaxed">
              By submitting content to Team United (including stories, photos, or project proposals), you grant us a non-exclusive, worldwide, royalty-free license to use, reproduce, and display such content for promotional and operational purposes. You retain ownership of your content.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Donations and Payments</h2>
            <p className="text-muted-foreground leading-relaxed">
              All donations to Team United are voluntary and non-refundable unless required by law. We are committed to using donations responsibly and transparently for our stated mission and projects.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">7. Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              Team United and its directors, officers, employees, and volunteers shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services or participation in our programs.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">8. Third-Party Links</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our website may contain links to third-party websites. Team United is not responsible for the content, privacy policies, or practices of these external sites. We encourage you to review their terms and policies.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">9. Modifications to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              Team United reserves the right to modify these terms at any time. We will notify users of significant changes via email or website notice. Continued use of our services after changes constitutes acceptance of the modified terms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">10. Termination</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to terminate or suspend access to our services immediately, without prior notice, for conduct that we believe violates these terms or is harmful to other users, us, or third parties.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">11. Governing Law</h2>
            <p className="text-muted-foreground leading-relaxed">
              These terms shall be governed by and construed in accordance with applicable international laws and regulations governing nonprofit organizations.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">12. Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about these Terms and Conditions, please contact us through our website's contact form or reach out via our official communication channels.
            </p>
          </div>

          <div className="pt-8 border-t border-primary/10">
            <p className="text-sm text-muted-foreground italic">
              By using Team United's services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
            </p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground mb-4">Have questions about our terms?</p>
          <a href="/get-in-touch">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 glass rounded-xl font-semibold text-primary border border-primary/20 hover:border-primary/40 transition-all"
            >
              Contact Us
            </motion.button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
