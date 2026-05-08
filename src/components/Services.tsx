import { motion } from "framer-motion";
import {
  Users, Mountain, Plane, Heart, Briefcase, UsersRound, Car, TreePine,
} from "lucide-react";

const services = [
  { icon: Users, title: "Family Tours", desc: "Curated trips designed around comfort and memories." },
  { icon: Mountain, title: "Himachal Tours", desc: "Snow valleys, hill stations & hidden gems." },
  { icon: Plane, title: "Airport Pickup", desc: "Punctual, premium transfers — door to gate." },
  { icon: Heart, title: "Wedding Transport", desc: "Decorated luxury fleet for your special day." },
  { icon: Briefcase, title: "Corporate Travel", desc: "Reliable executive travel & MICE solutions." },
  { icon: UsersRound, title: "Group Booking", desc: "Tempo travellers and buses for large groups." },
  { icon: Car, title: "Luxury Taxi", desc: "Premium sedans & SUVs at your fingertips." },
  { icon: TreePine, title: "Hill Station Tours", desc: "Manali, Shimla, Spiti, Dharamshala & more." },
];

export function Services() {
  return (
    <section id="services" className="relative py-28 md:py-36">
      <div className="pointer-events-none absolute right-0 top-40 h-96 w-96 rounded-full bg-accent/20 blur-[140px]" />

      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-xs tracking-[0.3em] text-gold">— OUR SERVICES</div>
          <h2 className="mt-3 font-display text-4xl font-black md:text-5xl lg:text-6xl">
            Crafted for <span className="text-gradient-gold">Luxury</span> Travel
          </h2>
          <p className="mt-5 text-foreground/70">
            From intimate family escapes to corporate fleets — every service designed around you.
          </p>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              whileHover={{ y: -8, rotateX: 4, rotateY: -4 }}
              style={{ transformStyle: "preserve-3d" }}
              className="group relative overflow-hidden rounded-2xl border-gradient glass-strong p-6"
            >
              <div className="absolute inset-0 -z-0 bg-gradient-royal opacity-0 transition-opacity duration-500 group-hover:opacity-20" />
              <div className="relative z-10">
                <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-royal glow-royal transition-transform duration-500 group-hover:scale-110">
                  <s.icon className="h-7 w-7 text-foreground" />
                </div>
                <h3 className="font-display text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-foreground/70 leading-relaxed">{s.desc}</p>
                <div className="mt-5 inline-flex items-center text-xs font-semibold text-gold opacity-0 transition-all duration-300 group-hover:opacity-100">
                  Learn more →
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
