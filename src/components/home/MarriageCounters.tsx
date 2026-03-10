import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const counters = [
  { value: 2847, label: "Marriages Arranged" },
  { value: 156, label: "Countries Represented" },
  { value: 4200, label: "Exclusive Members" },
  { value: 15, label: "Global Offices" },
];

const Counter = ({ target, inView }: { target: number; inView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2500;
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

  return <span>{count.toLocaleString()}</span>;
};

const MarriageCounters = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-gradient-navy text-pearl">
      <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-12">
        {counters.map((c, i) => (
          <motion.div
            key={c.label}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="text-center"
          >
            <div className="heading-xl text-rose">
              <Counter target={c.value} inView={isInView} />
            </div>
            <p className="body-md text-pearl/60 mt-2">{c.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MarriageCounters;
