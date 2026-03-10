import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

const reviews = [
  {
    quote: "After years of failed introductions through other services, Éternel Match understood exactly what I needed. We married within a year.",
    initials: "A & J",
    location: "London & New York",
    years: "Together 4 years",
  },
  {
    quote: "The discretion was paramount for us. Not a single person outside our families knew we were using a service. Truly exceptional.",
    initials: "M & S",
    location: "Dubai & Paris",
    years: "Together 3 years",
  },
  {
    quote: "Our matchmaker felt like a trusted confidante. She knew us better than we knew ourselves, and the result was magical.",
    initials: "R & L",
    location: "Singapore & Geneva",
    years: "Together 5 years",
  },
];

const CoupleReviews = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-sans text-xs tracking-[0.4em] uppercase text-rose-deep mb-4">
            Testimonials
          </p>
          <h2 className="heading-lg text-foreground">Stories of Love Found</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <motion.div
              key={r.initials}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              className="p-8 rounded-2xl bg-card border border-border/50 magnetic-hover group"
            >
              <Quote className="w-8 h-8 text-rose/40 mb-4" />
              <p className="font-serif text-lg text-foreground leading-relaxed mb-8 italic">
                "{r.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-navy to-navy-light flex items-center justify-center">
                  <span className="font-serif text-sm text-pearl font-semibold">{r.initials}</span>
                </div>
                <div>
                  <p className="font-sans text-sm font-medium text-foreground">{r.location}</p>
                  <p className="font-sans text-xs text-muted-foreground">{r.years}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoupleReviews;
