import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Snowflake, Music, Navigation, Armchair, Users } from "lucide-react";
import innova from "@/assets/fleet-innova.jpg";
import tempo from "@/assets/fleet-tempo.jpg";
import dzire from "@/assets/fleet-dzire.jpg";

const fleet = [
  { name: "Toyota Innova Crysta", capacity: "7 Seater", image: innova, type: "Premium SUV" },
  { name: "Tempo Traveller", capacity: "12-17 Seater", image: tempo, type: "Group Travel" },
  { name: "Swift Dzire", capacity: "4 Seater", image: dzire, type: "Luxury Sedan" },
  { name: "Toyota Innova Crysta", capacity: "7 Seater", image: innova, type: "Family Choice" },
  { name: "Tempo Traveller", capacity: "12-17 Seater", image: tempo, type: "Luxury Bus" },
];

const features = [
  { icon: Snowflake, label: "AC" },
  { icon: Music, label: "Music" },
  { icon: Navigation, label: "GPS" },
  { icon: Armchair, label: "Comfort" },
];

export function Fleet() {
  const [idx, setIdx] = useState(0);
  const total = fleet.length;
  const next = () => setIdx((i) => (i + 1) % total);
  const prev = () => setIdx((i) => (i - 1 + total) % total);

  return (
    <section id="fleet" className="relative py-28 md:py-36">
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-[600px] -translate-x-1/2 rounded-full bg-primary/20 blur-[140px]" />

      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="text-xs tracking-[0.3em] text-gold">— OUR FLEET</div>
            <h2 className="mt-3 font-display text-4xl font-black md:text-5xl lg:text-6xl">
              Premium <span className="text-gradient-gold">Vehicles</span>
            </h2>
            <p className="mt-4 max-w-lg text-foreground/70">
              Modern, sanitized, and fully-equipped — chauffeured by experienced professionals.
            </p>
          </div>
          <div className="flex gap-3">
            <button onClick={prev} className="grid h-12 w-12 place-items-center rounded-full glass hover:text-gold">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button onClick={next} className="grid h-12 w-12 place-items-center rounded-full bg-gradient-gold text-gold-foreground glow-gold">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="relative mt-12 overflow-hidden">
          <motion.div
            animate={{ x: `-${idx * 100}%` }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex"
          >
            {fleet.map((v, i) => (
              <div key={i} className="w-full shrink-0 px-2 md:w-1/2 lg:w-1/3">
                <motion.div
                  whileHover={{ y: -10 }}
                  className="group relative overflow-hidden rounded-3xl border-gradient glass-strong"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={v.image}
                      alt={v.name}
                      loading="lazy"
                      width={1280}
                      height={832}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                    <div className="absolute left-4 top-4 rounded-full glass px-3 py-1 text-[10px] tracking-widest text-gold">
                      {v.type.toUpperCase()}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-bold">{v.name}</h3>
                    <div className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                      <Users className="h-4 w-4" /> {v.capacity}
                    </div>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {features.map((f) => (
                        <div key={f.label} className="inline-flex items-center gap-1.5 rounded-full glass px-3 py-1.5 text-xs">
                          <f.icon className="h-3 w-3 text-gold" /> {f.label}
                        </div>
                      ))}
                    </div>
                    <a href="#contact" className="mt-6 inline-flex items-center text-sm font-semibold text-gold hover:gap-2 transition-all">
                      Book this vehicle →
                    </a>
                  </div>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {fleet.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`h-1.5 rounded-full transition-all ${i === idx ? "w-10 bg-gradient-gold" : "w-2 bg-border"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
