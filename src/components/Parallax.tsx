import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import roadImg from "@/assets/parallax-road.jpg";

export function Parallax() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);

  return (
    <section ref={ref} className="relative h-[80vh] w-full overflow-hidden">
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img
          src={roadImg}
          alt="Mountain road through Himalayas"
          loading="lazy"
          width={1920}
          height={1080}
          className="h-full w-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/30 to-background/80" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-xs tracking-[0.4em] text-gold"
        >
          — DISCOVER THE ROAD
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1 }}
          className="mt-4 max-w-4xl font-display text-4xl font-black leading-tight md:text-6xl lg:text-7xl"
        >
          Travel With <span className="text-gradient-gold">Comfort</span>
          <br />& <span className="text-gradient-royal">Luxury</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-6 max-w-xl text-foreground/80"
        >
          Every winding road, every mountain pass — experienced in absolute comfort.
        </motion.p>
        <motion.a
          href="#contact"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          whileHover={{ scale: 1.05 }}
          className="mt-10 inline-flex items-center rounded-full bg-gradient-gold px-9 py-4 text-sm font-semibold text-gold-foreground shadow-gold animate-glow-pulse"
        >
          Reserve Your Journey →
        </motion.a>
      </div>
    </section>
  );
}
