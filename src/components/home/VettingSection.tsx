import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ShieldCheck, Brain, Fingerprint, Eye } from "lucide-react";

const pillars = [
  { icon: ShieldCheck, title: "Background Verification", desc: "Comprehensive screening including financial, professional, and personal references." },
  { icon: Brain, title: "Psychological Profiling", desc: "In-depth compatibility assessment using proprietary psychometric frameworks." },
  { icon: Fingerprint, title: "Identity Authentication", desc: "Rigorous identity verification ensuring absolute authenticity of every member." },
  { icon: Eye, title: "Lifestyle Assessment", desc: "Detailed evaluation of values, interests, and long-term relationship goals." },
];

const VettingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-gradient-navy text-pearl">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="font-sans text-xs tracking-[0.4em] uppercase text-rose mb-4">
            Our Standard
          </p>
          <h2 className="heading-lg mb-4">Vetting & Psychological Profiling</h2>
          <p className="body-lg text-pearl/60 max-w-2xl mx-auto">
            Every member undergoes our rigorous multi-stage evaluation to ensure only the most genuine, accomplished individuals enter our circle.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="flex gap-6 p-8 rounded-2xl border border-pearl/10 magnetic-hover hover:border-rose/30 transition-colors duration-500"
            >
              <div className="w-14 h-14 shrink-0 rounded-full bg-pearl/10 flex items-center justify-center">
                <p.icon className="w-6 h-6 text-rose" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold mb-2">{p.title}</h3>
                <p className="body-md text-pearl/60">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VettingSection;
