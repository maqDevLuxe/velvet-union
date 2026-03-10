import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

const CTAFooter = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <>
      {/* CTA */}
      <section ref={ref} className="section-padding bg-gradient-navy text-pearl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="max-w-3xl mx-auto"
        >
          <Heart className="w-10 h-10 text-rose mx-auto mb-6 animate-pulse-soft" />
          <h2 className="heading-xl mb-6">Ready to Meet Your Match?</h2>
          <p className="body-lg text-pearl/70 mb-10">
            Join our exclusive circle of accomplished individuals. Begin with a confidential interview—no obligation, complete discretion.
          </p>
          <Link
            to="/portal"
            className="inline-block px-12 py-4 bg-rose-deep text-pearl font-sans text-sm tracking-widest uppercase rounded-full magnetic-hover glow-blush"
          >
            Apply for an Interview
          </Link>
          <p className="font-sans text-xs text-pearl/40 mt-6 tracking-wider">
            Acceptance rate: 12% · Response within 48 hours
          </p>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-navy text-pearl/60 py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="font-serif text-xl text-pearl mb-4">
                <span className="font-semibold">Éternel</span>
                <span className="text-rose font-light ml-1">Match</span>
              </h3>
              <p className="body-md text-pearl/40">
                The world's premier discreet matchmaking service for extraordinary individuals.
              </p>
            </div>
            <div>
              <h4 className="font-sans text-xs tracking-[0.3em] uppercase text-pearl/80 mb-4">Navigate</h4>
              <div className="flex flex-col gap-3">
                <Link to="/" className="body-md hover:text-rose transition-colors">Home</Link>
                <Link to="/process" className="body-md hover:text-rose transition-colors">Our Process</Link>
                <Link to="/success" className="body-md hover:text-rose transition-colors">Success Stories</Link>
                <Link to="/portal" className="body-md hover:text-rose transition-colors">Private Portal</Link>
              </div>
            </div>
            <div>
              <h4 className="font-sans text-xs tracking-[0.3em] uppercase text-pearl/80 mb-4">Offices</h4>
              <div className="flex flex-col gap-3 body-md">
                <span>London · Mayfair</span>
                <span>New York · Upper East Side</span>
                <span>Dubai · DIFC</span>
                <span>Singapore · Orchard</span>
              </div>
            </div>
            <div>
              <h4 className="font-sans text-xs tracking-[0.3em] uppercase text-pearl/80 mb-4">Contact</h4>
              <div className="flex flex-col gap-3 body-md">
                <span>enquiries@eternelmatch.com</span>
                <span>+44 20 7946 0958</span>
                <span>By appointment only</span>
              </div>
            </div>
          </div>
          <div className="border-t border-pearl/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-sans text-xs text-pearl/30">
              © 2026 Éternel Match. All rights reserved. Strictly confidential.
            </p>
            <div className="flex gap-6">
              <span className="font-sans text-xs text-pearl/30 hover:text-pearl/60 cursor-pointer transition-colors">Privacy Policy</span>
              <span className="font-sans text-xs text-pearl/30 hover:text-pearl/60 cursor-pointer transition-colors">Terms of Service</span>
              <span className="font-sans text-xs text-pearl/30 hover:text-pearl/60 cursor-pointer transition-colors">NDA Policy</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default CTAFooter;
