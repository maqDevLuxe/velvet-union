import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Users, Gem, Crown } from "lucide-react";

const steps = [
  {
    icon: Crown,
    title: "Private Consultation",
    desc: "A confidential meeting with your dedicated matchmaker to understand your desires, values, and vision for partnership.",
  },
  {
    icon: Users,
    title: "Curated Introductions",
    desc: "Hand-selected matches from our exclusive network of vetted, accomplished individuals who share your aspirations.",
  },
  {
    icon: Gem,
    title: "Bespoke Date Design",
    desc: "Every encounter is orchestrated with precision—from venue selection to experience curation.",
  },
  {
    icon: Heart,
    title: "Relationship Nurturing",
    desc: "Ongoing guidance and coaching to ensure your connection deepens into a lasting, fulfilling partnership.",
  },
];

const BespokeProcess = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="font-sans text-xs tracking-[0.4em] uppercase text-rose-deep mb-4">
            The Journey
          </p>
          <h2 className="heading-lg text-foreground mb-4">
            A Bespoke Matching Process
          </h2>
          <div className="divider-rose mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="text-center group magnetic-hover p-8 rounded-2xl bg-card hover:bg-rose-soft/30 transition-colors duration-500"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-rose-soft flex items-center justify-center group-hover:glow-blush-sm transition-all duration-500">
                <step.icon className="w-7 h-7 text-rose-deep" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="body-md text-muted-foreground">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BespokeProcess;
