import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Lock, Shield, EyeOff } from "lucide-react";

const AnonymityGuarantee = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-pearl-warm">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-6 mb-8">
            <Lock className="w-6 h-6 text-rose-deep" />
            <Shield className="w-8 h-8 text-navy" />
            <EyeOff className="w-6 h-6 text-rose-deep" />
          </div>
          <p className="font-sans text-xs tracking-[0.4em] uppercase text-rose-deep mb-4">
            Our Promise
          </p>
          <h2 className="heading-lg text-foreground mb-6">Absolute Anonymity Guaranteed</h2>
          <p className="body-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Your identity is sacred. We employ military-grade encryption, NDA-protected staff, and compartmentalised data architecture. No profile is ever searchable. No data is ever shared.
          </p>
          <div className="divider-rose" />
          <div className="grid grid-cols-3 gap-8 mt-12">
            {[
              { value: "256-bit", label: "Encryption" },
              { value: "Zero", label: "Data Breaches" },
              { value: "100%", label: "NDA Coverage" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
              >
                <p className="font-serif text-2xl md:text-3xl font-semibold text-gradient-rose">{item.value}</p>
                <p className="body-md text-muted-foreground mt-1">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AnonymityGuarantee;
