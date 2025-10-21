import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      category: "About Team United",
      questions: [
        {
          question: "What is Team United?",
          answer: "Team United is a youth-led global organization dedicated to advancing the United Nations Sustainable Development Goals (SDGs) through education, charity, environmental initiatives, and technology. We empower young people to create meaningful change in their communities."
        },
        {
          question: "When was Team United founded?",
          answer: "Team United was founded with the vision of bringing together passionate young individuals from around the world to work towards a sustainable and equitable future for all."
        },
        {
          question: "Who can join Team United?",
          answer: "Team United welcomes anyone who shares our vision and values, regardless of age, background, or location. We especially encourage young people who are passionate about making a positive impact in their communities."
        }
      ]
    },
    {
      category: "Our Projects",
      questions: [
        {
          question: "What types of projects does Team United work on?",
          answer: "We work on four main categories: Education (providing learning opportunities), Technology (digital literacy and innovation), Environment (sustainability and conservation), and Charity (community support and humanitarian aid)."
        },
        {
          question: "How can I participate in a project?",
          answer: "You can participate by becoming a volunteer through our website. Once registered, you'll receive information about ongoing and upcoming projects that match your interests and skills."
        },
        {
          question: "Can I propose a new project idea?",
          answer: "Absolutely! We encourage innovative ideas from our community. You can submit your project proposal through our contact form or by reaching out to our team directly."
        }
      ]
    },
    {
      category: "Volunteering",
      questions: [
        {
          question: "How do I become a volunteer?",
          answer: "Click on the 'Become a Volunteer' button on our website, fill out the application form with your details and interests, and our team will get back to you with next steps and available opportunities."
        },
        {
          question: "Is there a minimum time commitment?",
          answer: "Time commitments vary by project. Some require ongoing involvement while others are one-time events. We work with your schedule to find opportunities that fit your availability."
        },
        {
          question: "Do I need specific skills to volunteer?",
          answer: "Not necessarily! While some projects may require specific skills, we have opportunities for everyone. Your enthusiasm and willingness to learn are what matter most."
        }
      ]
    },
    {
      category: "Partnerships",
      questions: [
        {
          question: "How can my organization partner with Team United?",
          answer: "We're always looking for meaningful partnerships! Click on 'Become a Partner' on our website to submit your organization's information and partnership proposal. Our team will review and reach out to discuss collaboration opportunities."
        },
        {
          question: "What are the benefits of partnering with Team United?",
          answer: "Partners gain access to our global network of passionate youth, collaborative project opportunities, increased visibility for their initiatives, and the chance to make a real impact on the SDGs."
        }
      ]
    },
    {
      category: "Donations & Support",
      questions: [
        {
          question: "How can I support Team United financially?",
          answer: "We appreciate any support! You can contribute through our donation channels or sponsor specific projects. Contact us for more information about donation options and how your contribution will be used."
        },
        {
          question: "Is Team United a registered nonprofit?",
          answer: "Yes, Team United operates as a nonprofit organization dedicated to social impact. All contributions go directly towards our projects and initiatives."
        }
      ]
    },
    {
      category: "Contact & Communication",
      questions: [
        {
          question: "How can I contact Team United?",
          answer: "You can reach us through the 'Get in Touch' page on our website, via WhatsApp using the button on our site, or through our social media channels. We typically respond within 24-48 hours."
        },
        {
          question: "Where is Team United located?",
          answer: "Team United is a global organization with members and projects in multiple countries. Our team works remotely and collaborates across different time zones to maximize our impact."
        }
      ]
    }
  ];

  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      
      {/* Orange gradient orbs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl opacity-5 dark:opacity-10" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl opacity-5 dark:opacity-10" />

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
              <HelpCircle size={16} />
              Help Center
            </span>
          </motion.div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-foreground">Frequently Asked </span>
            <span className="gradient-text">Questions</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about Team United, our projects, and how you can get involved.
          </p>
        </motion.div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {faqs.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <h2 className="text-2xl font-bold text-foreground mb-6">
                <span className="gradient-text">{category.category}</span>
              </h2>
              
              <div className="space-y-4">
                {category.questions.map((faq, faqIndex) => {
                  const globalIndex = categoryIndex * 100 + faqIndex;
                  const isOpen = openIndex === globalIndex;
                  
                  return (
                    <motion.div
                      key={faqIndex}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.4, delay: (categoryIndex * 0.1) + (faqIndex * 0.05) }}
                      className="glass rounded-2xl border border-primary/10 overflow-hidden"
                    >
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-primary/5 transition-colors"
                      >
                        <span className="text-lg font-semibold text-foreground pr-4">
                          {faq.question}
                        </span>
                        <motion.div
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="flex-shrink-0"
                        >
                          <ChevronDown className="text-primary" size={24} />
                        </motion.div>
                      </button>
                      
                      <motion.div
                        initial={false}
                        animate={{
                          height: isOpen ? 'auto' : 0,
                          opacity: isOpen ? 1 : 0
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-5 text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Still Have Questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center glass rounded-3xl p-12 border border-primary/20"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            <span className="text-foreground">Still Have </span>
            <span className="gradient-text">Questions?</span>
          </h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Can't find the answer you're looking for? Our team is here to help!
          </p>
          <a href="/get-in-touch">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group inline-block"
            >
              <div className="absolute inset-0 bg-primary rounded-xl blur-md opacity-50 group-hover:opacity-75 transition-opacity" />
              <div className="relative px-8 py-3 bg-primary rounded-xl text-white font-semibold">
                Contact Us
              </div>
            </motion.button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
