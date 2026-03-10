import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Navbar from "@/components/Navbar";
import CTAFooter from "@/components/home/CTAFooter";
import { Quote, Heart } from "lucide-react";

const stories = [
  {
    initials: "K & D",
    location: "London & Milan",
    years: "Married 2023",
    story: "Both entrepreneurs, both guarded. Our matchmaker saw past the walls we'd built and introduced us at a private gallery viewing in Florence. We knew by dessert.",
  },
  {
    initials: "N & P",
    location: "New York & Tokyo",
    years: "Married 2024",
    story: "Cross-cultural, cross-continental—everyone said it was impossible. Éternel Match made the impossible feel inevitable. Our wedding had guests from 14 countries.",
  },
  {
    initials: "S & R",
    location: "Dubai & Geneva",
    years: "Married 2022",
    story: "Privacy was non-negotiable for our families. The team's discretion was flawless from day one. Not even our closest friends knew until the engagement.",
  },
  {
    initials: "L & M",
    location: "Singapore & Paris",
    years: "Married 2025",
    story: "I'd given up on finding someone who understood the demands of my career. My matchmaker introduced me to someone who didn't just understand—she thrived in the same world.",
  },
  {
    initials: "A & E",
    location: "Monaco & São Paulo",
    years: "Engaged 2025",
    story: "The psychological profiling was extraordinary. They identified compatibility we couldn't have articulated ourselves. Every date felt natural, not arranged.",
  },
  {
    initials: "T & C",
    location: "Hong Kong & Vancouver",
    years: "Married 2024",
    story: "Our matchmaker became like family. The personal attention, the thoughtful introductions, the follow-up coaching—it transformed how we both approach love.",
  },
];

const SuccessPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-20 section-padding bg-gradient-navy text-pearl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-3xl mx-auto"
        >
          <Heart className="w-10 h-10 text-rose mx-auto mb-6 animate-pulse-soft" />
          <p className="font-sans text-xs tracking-[0.4em] uppercase text-rose mb-4">Our Pride</p>
          <h1 className="heading-xl mb-6">Success Stories</h1>
          <p className="body-lg text-pearl/70">
            Real love stories from couples who found each other through our service. Names and details are anonymised to protect their privacy.
          </p>
        </motion.div>
      </section>

      <section ref={ref} className="section-padding">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {stories.map((s, i) => (
            <motion.div
              key={s.initials}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              className="p-8 rounded-2xl bg-card border border-border/50 magnetic-hover"
            >
              <Quote className="w-8 h-8 text-rose/40 mb-4" />
              <p className="font-serif text-lg text-foreground leading-relaxed mb-8 italic">
                "{s.story}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-navy to-navy-light flex items-center justify-center">
                  <span className="font-serif text-sm text-pearl font-semibold">{s.initials}</span>
                </div>
                <div>
                  <p className="font-sans text-sm font-medium text-foreground">{s.location}</p>
                  <p className="font-sans text-xs text-muted-foreground">{s.years}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <CTAFooter />
    </div>
  );
};

export default SuccessPage;
