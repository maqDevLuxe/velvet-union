import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Navbar from "@/components/Navbar";
import CTAFooter from "@/components/home/CTAFooter";
import { Search, Heart, Users, MessageCircle, Gem, Crown } from "lucide-react";

const steps = [
  { icon: Search, title: "1. Confidential Application", desc: "Complete our discreet application form. Your information is encrypted and accessible only to your assigned matchmaker." },
  { icon: Crown, title: "2. Personal Interview", desc: "A private, in-depth conversation with your dedicated matchmaker—in person at one of our global offices or via secure video." },
  { icon: Users, title: "3. Vetting & Profiling", desc: "Our team conducts comprehensive background verification, psychological profiling, and lifestyle compatibility assessment." },
  { icon: Heart, title: "4. Curated Introductions", desc: "Receive hand-selected matches based on deep compatibility analysis. Each introduction is carefully considered and timed." },
  { icon: Gem, title: "5. Bespoke Date Design", desc: "Our concierge team designs every encounter—venue, ambiance, and experience—tailored to both personalities." },
  { icon: MessageCircle, title: "6. Ongoing Guidance", desc: "Regular check-ins, relationship coaching, and feedback sessions to nurture your connection into lasting love." },
];

const ProcessPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      {/* Hero */}
      <section className="pt-32 pb-20 section-padding bg-gradient-navy text-pearl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-3xl mx-auto"
        >
          <p className="font-sans text-xs tracking-[0.4em] uppercase text-rose mb-4">How It Works</p>
          <h1 className="heading-xl mb-6">Our Bespoke Process</h1>
          <p className="body-lg text-pearl/70">
            From first contact to forever—every step is designed with intention, discretion, and care.
          </p>
        </motion.div>
      </section>

      {/* Steps */}
      <section ref={ref} className="section-padding">
        <div className="max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="flex gap-8 mb-12 last:mb-0"
            >
              <div className="w-16 h-16 shrink-0 rounded-full bg-rose-soft flex items-center justify-center">
                <step.icon className="w-7 h-7 text-rose-deep" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="body-lg text-muted-foreground">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <CTAFooter />
    </div>
  );
};

export default ProcessPage;
