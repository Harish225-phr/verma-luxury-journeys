import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useEffect, useState } from "react";

const reviews = [
  { name: "Rahul Sharma", role: "Family Trip — Manali", text: "Absolutely premium experience! The Innova was spotless, the driver was professional, and the entire Manali itinerary was perfectly planned. Highly recommend Verma Tour & Travels.", initials: "RS" },
  { name: "Priya Kapoor", role: "Honeymoon — Shimla", text: "We felt completely safe and pampered. Beautiful clean vehicles, on-time pickups, and incredible mountain views. Worth every rupee.", initials: "PK" },
  { name: "Amit Verma", role: "Corporate — Delhi to Shimla", text: "Booked for an executive team trip — flawless coordination and luxury comfort throughout. Will definitely book again.", initials: "AV" },
  { name: "Neha Singh", role: "Group — Spiti Valley", text: "The Tempo Traveller was fully loaded with AC, music, and comfortable seats. Our 7-day Spiti adventure was unforgettable!", initials: "NS" },
  { name: "Karan Malhotra", role: "Wedding Transport", text: "Decorated, on time, and beautifully maintained. Verma made our wedding logistics effortless.", initials: "KM" },
];

export function Testimonials() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % reviews.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="testimonials" className="relative py-28 md:py-36">
      <div className="pointer-events-none absolute right-0 top-1/3 h-80 w-80 rounded-full bg-gold/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-xs tracking-[0.3em] text-gold">— TESTIMONIALS</div>
          <h2 className="mt-3 font-display text-4xl font-black md:text-5xl lg:text-6xl">
            Stories from <span className="text-gradient-gold">Happy Travelers</span>
          </h2>
        </div>

        <div className="relative mt-16 mx-auto max-w-3xl">
          <Quote className="absolute -left-4 -top-4 h-20 w-20 text-gold/20" />
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              animate={{ opacity: i === idx ? 1 : 0, y: i === idx ? 0 : 20 }}
              transition={{ duration: 0.6 }}
              className={`${i === idx ? "relative" : "absolute inset-0 pointer-events-none"} rounded-3xl glass-strong border-gradient p-8 md:p-12`}
            >
              <div className="flex items-center gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-5 text-lg leading-relaxed text-foreground/90 md:text-xl">"{r.text}"</p>
              <div className="mt-7 flex items-center gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-gradient-royal font-bold text-foreground">
                  {r.initials}
                </div>
                <div>
                  <div className="font-semibold">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
          <div className="mt-8 flex justify-center gap-2">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className={`h-1.5 rounded-full transition-all ${i === idx ? "w-10 bg-gradient-gold" : "w-2 bg-border"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
