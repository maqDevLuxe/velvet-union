import { motion } from "framer-motion";
import heroCoupleImg from "@/assets/hero-couple.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroCoupleImg}
          alt="Elegant couple in golden light"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/40 to-background" />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="font-sans text-sm tracking-[0.35em] uppercase text-rose-soft mb-6"
        >
          By Invitation Only
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="heading-xl text-pearl mb-8"
        >
          Where Extraordinary
          <br />
          <span className="italic font-normal">Souls</span> Find Each Other
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="body-lg text-pearl/80 max-w-2xl mx-auto mb-12"
        >
          The world's most discreet matchmaking service for accomplished
          individuals seeking a life partner of equal calibre.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="/portal"
            className="px-10 py-4 bg-rose-deep text-pearl font-sans text-sm tracking-widest uppercase rounded-full magnetic-hover glow-blush"
          >
            Begin Your Journey
          </a>
          <a
            href="/process"
            className="px-10 py-4 border border-pearl/30 text-pearl font-sans text-sm tracking-widest uppercase rounded-full magnetic-hover hover:border-rose/50"
          >
            Our Process
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-px h-12 bg-gradient-to-b from-pearl/0 via-pearl/40 to-pearl/0"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
