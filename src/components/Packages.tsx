import { motion } from "framer-motion";
import { Check, MapPin, Calendar } from "lucide-react";
import shimla from "@/assets/pkg-shimla.jpg";
import manali from "@/assets/pkg-manali.jpg";
import dharamshala from "@/assets/pkg-dharamshala.jpg";
import dalhousie from "@/assets/pkg-dalhousie.jpg";
import spiti from "@/assets/pkg-spiti.jpg";

const packages = [
  { title: "Shimla Tour", img: shimla, days: "3D / 2N", price: "₹8,999", highlights: ["Mall Road", "Kufri", "Jakhoo Temple", "Hotel + Cab"] },
  { title: "Manali Tour", img: manali, days: "4D / 3N", price: "₹12,499", featured: true, highlights: ["Solang Valley", "Rohtang Pass", "Old Manali", "Snow Activities"] },
  { title: "Dharamshala", img: dharamshala, days: "3D / 2N", price: "₹9,499", highlights: ["McLeodganj", "Bhagsu Falls", "Monastery", "Hotel + Cab"] },
  { title: "Dalhousie", img: dalhousie, days: "4D / 3N", price: "₹11,999", highlights: ["Khajjiar", "Panchpula", "Subhash Baoli", "Hotel + Cab"] },
  { title: "Spiti Valley", img: spiti, days: "7D / 6N", price: "₹24,999", highlights: ["Key Monastery", "Chandratal", "Kaza", "Adventure Trip"] },
];

export function Packages() {
  return (
    <section id="packages" className="relative py-28 md:py-36">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[160px]" />

      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-xs tracking-[0.3em] text-gold">— TOUR PACKAGES</div>
          <h2 className="mt-3 font-display text-4xl font-black md:text-5xl lg:text-6xl">
            Curated <span className="text-gradient-gold">Himalayan</span> Escapes
          </h2>
          <p className="mt-5 text-foreground/70">All-inclusive packages with luxury stays, transport, and custom itineraries.</p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {packages.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`group relative flex flex-col overflow-hidden rounded-3xl glass-strong ${p.featured ? "border-gradient lg:row-span-2 lg:scale-[1.03]" : "border border-border/40"}`}
            >
              {p.featured && (
                <div className="absolute right-4 top-4 z-20 rounded-full bg-gradient-gold px-3 py-1 text-[10px] font-bold tracking-widest text-gold-foreground glow-gold">
                  POPULAR
                </div>
              )}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <div className="flex items-center gap-2 text-xs text-gold">
                    <MapPin className="h-3.5 w-3.5" /> Himachal Pradesh
                  </div>
                  <h3 className="mt-1 font-display text-2xl font-black">{p.title}</h3>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 text-gold" /> {p.days}
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] tracking-widest text-muted-foreground">STARTING</div>
                    <div className="font-display text-xl font-black text-gradient-gold">{p.price}</div>
                  </div>
                </div>
                <ul className="mt-5 space-y-2">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-sm text-foreground/80">
                      <Check className="h-4 w-4 text-gold" /> {h}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="mt-6 group/btn relative block overflow-hidden rounded-full bg-gradient-royal px-6 py-3 text-center text-sm font-semibold text-foreground transition-transform hover:scale-105"
                >
                  <span className="relative z-10">Book Now</span>
                  <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover/btn:translate-x-full" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
