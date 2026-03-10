import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Lock, Send } from "lucide-react";

const PortalPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-20 section-padding bg-gradient-navy text-pearl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-3xl mx-auto"
        >
          <Lock className="w-10 h-10 text-rose mx-auto mb-6" />
          <p className="font-sans text-xs tracking-[0.4em] uppercase text-rose mb-4">Confidential</p>
          <h1 className="heading-xl mb-6">Private Portal</h1>
          <p className="body-lg text-pearl/70">
            Begin your journey with a confidential application. All information is encrypted and protected under our strict NDA policy.
          </p>
        </motion.div>
      </section>

      <section className="section-padding">
        <div className="max-w-2xl mx-auto">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center py-16"
            >
              <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-rose-soft flex items-center justify-center glow-blush">
                <Send className="w-8 h-8 text-rose-deep" />
              </div>
              <h2 className="heading-md text-foreground mb-4">Application Received</h2>
              <p className="body-lg text-muted-foreground">
                Thank you. A senior matchmaker will review your application and contact you within 48 hours via your preferred method.
              </p>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2 block">First Name</label>
                  <input required className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground font-sans focus:outline-none focus:ring-2 focus:ring-rose/30 focus:border-rose transition-all" />
                </div>
                <div>
                  <label className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2 block">Last Name</label>
                  <input required className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground font-sans focus:outline-none focus:ring-2 focus:ring-rose/30 focus:border-rose transition-all" />
                </div>
              </div>
              <div>
                <label className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2 block">Email</label>
                <input type="email" required className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground font-sans focus:outline-none focus:ring-2 focus:ring-rose/30 focus:border-rose transition-all" />
              </div>
              <div>
                <label className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2 block">Phone</label>
                <input type="tel" className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground font-sans focus:outline-none focus:ring-2 focus:ring-rose/30 focus:border-rose transition-all" />
              </div>
              <div>
                <label className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2 block">City & Country of Residence</label>
                <input required className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground font-sans focus:outline-none focus:ring-2 focus:ring-rose/30 focus:border-rose transition-all" />
              </div>
              <div>
                <label className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2 block">Tell Us About Yourself</label>
                <textarea rows={5} required className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground font-sans focus:outline-none focus:ring-2 focus:ring-rose/30 focus:border-rose transition-all resize-none" placeholder="Share your background, what you're looking for, and what matters most to you in a partner..." />
              </div>
              <div>
                <label className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2 block">How Did You Hear About Us?</label>
                <select className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground font-sans focus:outline-none focus:ring-2 focus:ring-rose/30 focus:border-rose transition-all">
                  <option value="">Select...</option>
                  <option value="referral">Personal Referral</option>
                  <option value="press">Press / Media</option>
                  <option value="event">Private Event</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full py-4 bg-primary text-primary-foreground font-sans text-sm tracking-widest uppercase rounded-full magnetic-hover"
                >
                  Submit Confidential Application
                </button>
                <p className="font-sans text-xs text-muted-foreground text-center mt-4">
                  <Lock className="w-3 h-3 inline mr-1" />
                  256-bit encrypted · Covered by NDA · Response within 48 hours
                </p>
              </div>
            </motion.form>
          )}
        </div>
      </section>
    </div>
  );
};

export default PortalPage;
