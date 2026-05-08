import { motion } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";
import shimla from "@/assets/pkg-shimla.jpg";
import manali from "@/assets/pkg-manali.jpg";
import dharamshala from "@/assets/pkg-dharamshala.jpg";
import dalhousie from "@/assets/pkg-dalhousie.jpg";
import spiti from "@/assets/pkg-spiti.jpg";
import road from "@/assets/parallax-road.jpg";
import about from "@/assets/about-travel.jpg";
import innova from "@/assets/fleet-innova.jpg";

const items = [
  { src: shimla, alt: "Shimla", span: "row-span-2" },
  { src: manali, alt: "Manali", span: "" },
  { src: road, alt: "Mountain road", span: "" },
  { src: dharamshala, alt: "Dharamshala", span: "row-span-2" },
  { src: spiti, alt: "Spiti Valley", span: "" },
  { src: dalhousie, alt: "Dalhousie", span: "" },
  { src: about, alt: "Travelers", span: "" },
  { src: innova, alt: "Luxury vehicle", span: "" },
];

export function Gallery() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section id="gallery" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-xs tracking-[0.3em] text-gold">— GALLERY</div>
          <h2 className="mt-3 font-display text-4xl font-black md:text-5xl lg:text-6xl">
            Moments from the <span className="text-gradient-gold">Mountains</span>
          </h2>
        </div>

        <div className="mt-14 grid auto-rows-[180px] grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {items.map((it, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.05 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => setOpen(it.src)}
              className={`group relative overflow-hidden rounded-2xl ${it.span}`}
            >
              <img
                src={it.src}
                alt={it.alt}
                loading="lazy"
                width={1024}
                height={1280}
                className="h-full w-full object-cover blur-[2px] grayscale-[20%] transition-all duration-700 group-hover:scale-110 group-hover:blur-0 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent opacity-100 transition-opacity duration-500 group-hover:opacity-30" />
              <div className="absolute bottom-3 left-3 translate-y-2 text-xs font-semibold text-foreground opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                {it.alt}
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setOpen(null)}
          className="fixed inset-0 z-[80] grid place-items-center bg-background/85 p-6 backdrop-blur-xl"
        >
          <motion.img
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            src={open}
            alt=""
            className="max-h-[85vh] max-w-[90vw] rounded-2xl border-gradient"
          />
          <button onClick={() => setOpen(null)} className="absolute right-6 top-6 grid h-12 w-12 place-items-center rounded-full glass">
            <X className="h-5 w-5" />
          </button>
        </motion.div>
      )}
    </section>
  );
}
