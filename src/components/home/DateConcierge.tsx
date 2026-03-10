import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Wine, Plane, Music } from "lucide-react";

const services = [
  { icon: Wine, title: "Private Dining", desc: "Michelin-starred chefs and exclusive venues curated for your first encounter." },
  { icon: MapPin, title: "Bespoke Destinations", desc: "From Amalfi Coast terraces to Kyoto gardens—every setting tells your story." },
  { icon: Plane, title: "Travel Arrangements", desc: "Private jets, luxury accommodations, and seamless logistics for cross-border introductions." },
  { icon: Music, title: "Cultural Experiences", desc: "Private concerts, gallery viewings, and theatre experiences designed for connection." },
];

const DateConcierge = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-card">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="font-sans text-xs tracking-[0.4em] uppercase text-rose-deep mb-4">
            Beyond Matchmaking
          </p>
          <h2 className="heading-lg text-foreground mb-4">Exclusive Date Concierge</h2>
          <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
            Every introduction is an experience, meticulously crafted by our concierge team.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="flex gap-6 p-8 rounded-2xl bg-background magnetic-hover group border border-border/50 hover:border-rose/30 transition-all duration-500"
            >
              <div className="w-12 h-12 shrink-0 rounded-xl bg-rose-soft flex items-center justify-center group-hover:bg-rose/20 transition-colors duration-500">
                <s.icon className="w-5 h-5 text-rose-deep" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="body-md text-muted-foreground">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DateConcierge;
