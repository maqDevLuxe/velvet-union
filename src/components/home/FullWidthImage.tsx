import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import sunsetImg from "@/assets/sunset-romantic.jpg";

const FullWidthImage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section ref={ref} className="relative h-[60vh] md:h-[70vh] overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 scale-110">
        <img
          src={sunsetImg}
          alt="Romantic sunset over the ocean"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy/30" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1.2 }}
        className="relative z-10 flex items-center justify-center h-full"
      >
        <p className="font-serif text-3xl md:text-5xl text-pearl text-center italic font-light max-w-3xl px-6 leading-relaxed">
          "The greatest thing you'll ever learn is just to love and be loved in return."
        </p>
      </motion.div>
    </section>
  );
};

export default FullWidthImage;
