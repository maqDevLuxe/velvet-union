import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const matchmakers = [
  {
    name: "Isabelle Fontaine",
    title: "Head Matchmaker",
    bio: "Former relationship psychologist with 18 years of luxury matchmaking experience across Europe and the Americas.",
    initials: "IF",
  },
  {
    name: "Alexander Whitmore",
    title: "Senior Consultant",
    bio: "Specialising in cross-cultural partnerships for C-suite executives and high-net-worth families.",
    initials: "AW",
  },
  {
    name: "Priya Kapoor",
    title: "Compatibility Analyst",
    bio: "PhD in behavioural psychology. Architect of our proprietary psychometric matching algorithm.",
    initials: "PK",
  },
];

const MatchmakerProfiles = () => {
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
            Your Guides
          </p>
          <h2 className="heading-lg text-foreground mb-4">Dedicated Matchmakers</h2>
          <div className="divider-rose mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10">
          {matchmakers.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              className="text-center magnetic-hover group"
            >
              <div className="w-28 h-28 mx-auto mb-6 rounded-full bg-gradient-to-br from-rose-soft to-rose flex items-center justify-center group-hover:glow-blush transition-all duration-500">
                <span className="font-serif text-2xl font-semibold text-foreground">
                  {m.initials}
                </span>
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground">{m.name}</h3>
              <p className="font-sans text-sm tracking-wider uppercase text-rose-deep mt-1 mb-4">
                {m.title}
              </p>
              <p className="body-md text-muted-foreground">{m.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MatchmakerProfiles;
