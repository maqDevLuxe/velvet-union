import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const metrics = [
  { value: 97, suffix: "%", label: "Client Satisfaction" },
  { value: 89, suffix: "%", label: "Match Success Rate" },
  { value: 3, suffix: " months", label: "Average Time to Match" },
  { value: 12, suffix: "+", label: "Years of Excellence" },
];

const AnimatedCounter = ({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span className="heading-xl text-gradient-rose">
      {count}{suffix}
    </span>
  );
};

const SuccessMetrics = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-rose-soft/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-sans text-xs tracking-[0.4em] uppercase text-rose-deep mb-4">
            Proven Results
          </p>
          <h2 className="heading-lg text-foreground">Our Track Record Speaks</h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="text-center"
            >
              <AnimatedCounter target={m.value} suffix={m.suffix} inView={isInView} />
              <p className="body-md text-muted-foreground mt-2">{m.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessMetrics;
