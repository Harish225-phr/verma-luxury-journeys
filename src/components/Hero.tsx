import { motion } from "framer-motion";
import { Snowflake, Navigation, Music, Armchair, Camera, ShieldCheck, HeartPulse, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero-mountains.jpg";
import { Particles } from "./Particles";

const features = [
  { icon: Snowflake, label: "AC Facility" },
  { icon: Navigation, label: "GPS System" },
  { icon: Music, label: "Music System" },
  { icon: Armchair, label: "Comfort Seats" },
  { icon: Camera, label: "CCTV Camera" },
  { icon: ShieldCheck, label: "ABS Safety" },
  { icon: HeartPulse, label: "First Aid" },
];

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      {/* Background image with parallax-ish ken burns */}
      <motion.div
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <img
          src={heroImg}
          alt="Himalayan mountain landscape at golden hour"
          width={1920}
          height={1080}
          className="h-full w-full object-cover"
        />
      </motion.div>

      {/* Overlay gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/40 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent" />
      <div className="absolute inset-0" style={{ background: "var(--gradient-glow)" }} />

      <Particles count={36} />

      {/* Floating glowing orbs */}
      <div className="pointer-events-none absolute -left-20 top-1/4 h-72 w-72 rounded-full bg-primary/30 blur-[100px] animate-float-slow" />
      <div className="pointer-events-none absolute right-10 top-1/3 h-96 w-96 rounded-full bg-accent/20 blur-[120px] animate-float-medium" />
      <div className="pointer-events-none absolute bottom-20 left-1/3 h-64 w-64 rounded-full bg-gold/20 blur-[100px] animate-float-slow" />

      {/* Animated road line */}
      <div className="pointer-events-none absolute bottom-24 left-0 right-0 h-px overflow-hidden opacity-40">
        <div className="h-full w-1/2 animate-drive bg-gradient-to-r from-transparent via-gold to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-4 pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex w-fit items-center gap-2 rounded-full glass px-4 py-2 text-xs tracking-[0.25em] text-gold"
        >
          <Sparkles className="h-3.5 w-3.5" />
          PREMIUM HIMACHAL TRAVEL EXPERIENCE
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-4xl font-display text-5xl font-black leading-[1.05] sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Explore Himachal{" "}
          <span className="text-gradient-gold">Like Never</span>{" "}
          <span className="text-gradient-royal">Before.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-6 max-w-xl text-base text-foreground/75 md:text-lg"
        >
          Premium Tour & Travel Services with luxury comfort, uncompromised safety,
          and unforgettable journeys across the Himalayas.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#contact"
            className="group relative overflow-hidden rounded-full bg-gradient-gold px-8 py-4 text-sm font-semibold text-gold-foreground shadow-gold transition-transform hover:scale-105"
          >
            <span className="relative z-10">Book Your Ride</span>
            <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-700 group-hover:translate-x-full" />
          </a>
          <a
            href="#packages"
            className="rounded-full glass px-8 py-4 text-sm font-semibold text-foreground hover:text-gold transition-colors"
          >
            Explore Tours →
          </a>
        </motion.div>

        {/* Feature cards */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08, delayChildren: 1.2 } },
          }}
          className="mt-16 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7"
        >
          {features.map((f) => (
            <motion.div
              key={f.label}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              whileHover={{ y: -6, scale: 1.03 }}
              className="group relative overflow-hidden rounded-2xl glass p-4 text-center"
            >
              <div className="mx-auto mb-2 grid h-10 w-10 place-items-center rounded-xl bg-gradient-royal text-foreground">
                <f.icon className="h-5 w-5" />
              </div>
              <div className="text-xs font-medium text-foreground/80">{f.label}</div>
              <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="pointer-events-none absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-xs tracking-[0.3em] text-foreground/50"
      >
        SCROLL
      </motion.div>
    </section>
  );
}
