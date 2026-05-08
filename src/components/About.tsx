import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import aboutImg from "@/assets/about-travel.jpg";

const stats = [
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 5000, suffix: "+", label: "Happy Travelers" },
  { value: 24, suffix: "/7", label: "Customer Support" },
  { value: 100, suffix: "%", label: "Safe Journey" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const duration = 1600;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min((t - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.floor(eased * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return (
    <span ref={ref}>
      {n.toLocaleString()}
      {suffix}
    </span>
  );
}

export function About() {
  return (
    <section id="about" className="relative py-28 md:py-36">
      <div className="pointer-events-none absolute -left-20 top-40 h-80 w-80 rounded-full bg-primary/15 blur-[120px]" />

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-3xl border-gradient animate-float-slow">
            <img
              src={aboutImg}
              alt="Tourists enjoying Himalayan view"
              loading="lazy"
              width={1024}
              height={1280}
              className="h-[520px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
          </div>
          <div className="absolute -right-6 -top-6 h-28 w-28 rounded-2xl bg-gradient-gold p-px glow-gold">
            <div className="grid h-full w-full place-items-center rounded-2xl bg-background text-center">
              <div>
                <div className="font-display text-2xl font-black text-gradient-gold">10+</div>
                <div className="text-[10px] tracking-widest text-muted-foreground">YEARS</div>
              </div>
            </div>
          </div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -bottom-6 left-6 rounded-2xl glass-strong px-5 py-3"
          >
            <div className="text-xs text-muted-foreground">Trusted across</div>
            <div className="text-sm font-semibold text-gold">Himachal Pradesh</div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, delay: 0.1 }}
        >
          <div className="text-xs tracking-[0.3em] text-gold">— ABOUT US</div>
          <h2 className="mt-3 font-display text-4xl font-black leading-tight md:text-5xl lg:text-6xl">
            Your <span className="text-gradient-gold">Trusted</span>
            <br /> Travel Partner
          </h2>
          <p className="mt-6 max-w-xl text-foreground/75 leading-relaxed">
            Verma Tour & Travels delivers premium travel experiences with safety,
            comfort, and luxury vehicles. From hill stations to corporate transfers,
            our professional fleet and expert chauffeurs serve you across Himachal
            Pradesh and nearby destinations — every journey, unforgettable.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className="rounded-2xl glass p-5"
              >
                <div className="font-display text-3xl font-black text-gradient-gold md:text-4xl">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-1 text-xs tracking-widest text-muted-foreground">
                  {s.label.toUpperCase()}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
