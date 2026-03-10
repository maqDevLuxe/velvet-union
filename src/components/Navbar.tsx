import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Our Process", path: "/process" },
  { label: "Success Stories", path: "/success" },
  { label: "Private Portal", path: "/portal" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border/50"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-20">
        <Link to="/" className="font-serif text-2xl tracking-wide text-foreground">
          <span className="font-semibold">Éternel</span>
          <span className="text-rose-deep font-light ml-1">Match</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`body-md tracking-wide transition-colors duration-300 hover:text-rose-deep ${
                location.pathname === link.path ? "text-rose-deep" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/portal"
            className="px-6 py-2.5 bg-primary text-primary-foreground font-sans text-sm tracking-widest uppercase rounded-full magnetic-hover"
          >
            Apply Now
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border"
          >
            <div className="flex flex-col items-center gap-6 py-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="font-serif text-lg text-foreground hover:text-rose-deep transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/portal"
                onClick={() => setIsOpen(false)}
                className="px-8 py-3 bg-primary text-primary-foreground font-sans text-sm tracking-widest uppercase rounded-full"
              >
                Apply Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
