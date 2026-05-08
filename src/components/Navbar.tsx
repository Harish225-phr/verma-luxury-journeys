import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#fleet", label: "Fleet" },
  { href: "#gallery", label: "Gallery" },
  { href: "#packages", label: "Packages" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div
          className={`flex items-center justify-between rounded-2xl px-5 py-3 transition-all duration-500 ${
            scrolled ? "glass-strong shadow-card" : "bg-transparent"
          }`}
        >
          <a href="#home" className="flex items-center gap-3">
            <div className="relative h-10 w-10 rounded-xl bg-gradient-gold grid place-items-center font-display text-lg font-black text-gold-foreground glow-gold">
              V
            </div>
            <div className="leading-tight">
              <div className="text-sm font-bold tracking-[0.2em] text-gradient-gold">VERMA</div>
              <div className="text-[10px] tracking-[0.3em] text-muted-foreground">TOUR & TRAVELS</div>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group relative px-3 py-2 text-sm text-foreground/80 hover:text-foreground transition-colors"
              >
                {l.label}
                <span className="absolute inset-x-3 -bottom-0.5 h-px origin-left scale-x-0 bg-gradient-to-r from-gold to-cyan transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:9816492182"
              className="flex items-center gap-2 text-sm text-foreground/80 hover:text-gold transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>9816492182</span>
            </a>
            <a
              href="#contact"
              className="relative overflow-hidden rounded-full bg-gradient-gold px-5 py-2.5 text-sm font-semibold text-gold-foreground shadow-gold transition-transform hover:scale-105"
            >
              Book Now
            </a>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden rounded-lg glass p-2"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -10, height: 0 }}
              className="lg:hidden mt-2 overflow-hidden rounded-2xl glass-strong p-4"
            >
              <div className="flex flex-col">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="border-b border-border/40 py-3 text-sm text-foreground/85 hover:text-gold"
                  >
                    {l.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="mt-3 rounded-full bg-gradient-gold px-5 py-3 text-center text-sm font-semibold text-gold-foreground"
                >
                  Book Your Ride
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
