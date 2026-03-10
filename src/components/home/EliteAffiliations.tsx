import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const affiliations = [
  "Forbes 400", "Tatler", "Burke's Peerage", "Debrett's",
  "The Ivy Club", "Soho House", "The Arts Club", "White's"
];

const EliteAffiliations = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-pearl-warm">
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
        className="max-w-6xl mx-auto text-center"
      >
        <p className="font-sans text-xs tracking-[0.4em] uppercase text-muted-foreground mb-12">
          Trusted by Members of
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {affiliations.map((name, i) => (
            <motion.span
              key={name}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="font-serif text-lg md:text-xl text-navy/40 tracking-wide"
            >
              {name}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default EliteAffiliations;
