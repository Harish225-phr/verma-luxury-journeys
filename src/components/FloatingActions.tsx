import { MessageCircle, ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function FloatingActions() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <a
        href="https://wa.me/919816492182"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-[oklch(0.72_0.2_150)] text-white shadow-[0_10px_30px_-5px_oklch(0.72_0.2_150_/_60%)]"
        aria-label="WhatsApp"
      >
        <span className="absolute inset-0 rounded-full bg-[oklch(0.72_0.2_150_/_60%)] animate-pulse-ring" />
        <MessageCircle className="relative h-6 w-6" />
      </a>

      <AnimatePresence>
        {show && (
          <motion.button
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 left-6 z-40 grid h-12 w-12 place-items-center rounded-full glass-strong text-foreground hover:text-gold"
            aria-label="Back to top"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
