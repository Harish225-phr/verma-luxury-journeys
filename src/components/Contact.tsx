import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, Snowflake, Video, Navigation, Music, Camera, Armchair, ShieldCheck, HeartPulse } from "lucide-react";
import { useState } from "react";

const phones = ["9816492182", "7018474668", "7018182353", "9816829511"];
const facilities = [
  { icon: Snowflake, label: "AC" },
  { icon: Video, label: "Video" },
  { icon: Navigation, label: "GPS" },
  { icon: Music, label: "Music" },
  { icon: Camera, label: "Camera" },
  { icon: Armchair, label: "Comfort Seat" },
  { icon: ShieldCheck, label: "ABS" },
  { icon: HeartPulse, label: "First Aid" },
];

export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="relative py-28 md:py-36">
      <div className="pointer-events-none absolute left-0 top-0 h-96 w-96 rounded-full bg-primary/20 blur-[140px]" />

      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-xs tracking-[0.3em] text-gold">— GET IN TOUCH</div>
          <h2 className="mt-3 font-display text-4xl font-black md:text-5xl lg:text-6xl">
            Let's Plan Your <span className="text-gradient-gold">Journey</span>
          </h2>
          <p className="mt-5 text-foreground/70">Reach out for bookings, custom itineraries, or any travel queries.</p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {/* Contact info cards */}
          <div className="space-y-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl glass-strong border-gradient p-6"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-gold text-gold-foreground">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs tracking-widest text-muted-foreground">CALL US ANYTIME</div>
                  <div className="text-sm text-foreground/80">24/7 Booking Support</div>
                </div>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-2">
                {phones.map((p) => (
                  <a
                    key={p}
                    href={`tel:${p}`}
                    className="rounded-xl glass px-4 py-3 text-sm font-semibold transition-colors hover:text-gold"
                  >
                    +91 {p}
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-3xl glass-strong p-6"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-royal">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs tracking-widest text-muted-foreground">VISIT US</div>
                  <div className="text-sm font-semibold text-foreground">Himachal Pradesh, India</div>
                </div>
              </div>
              <div className="mt-5 overflow-hidden rounded-2xl border border-border">
                <iframe
                  title="Verma Tour & Travels location"
                  src="https://www.google.com/maps?q=Himachal+Pradesh&output=embed"
                  width="100%"
                  height="200"
                  loading="lazy"
                  className="grayscale"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-3xl glass-strong p-6"
            >
              <div className="text-xs tracking-widest text-gold">VEHICLE FACILITIES</div>
              <div className="mt-4 grid grid-cols-4 gap-3">
                {facilities.map((f) => (
                  <div key={f.label} className="rounded-xl glass p-3 text-center">
                    <f.icon className="mx-auto h-5 w-5 text-gold" />
                    <div className="mt-1.5 text-[10px] text-foreground/80">{f.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              setTimeout(() => setSent(false), 3000);
            }}
            className="rounded-3xl glass-strong border-gradient p-8 md:p-10"
          >
            <h3 className="font-display text-2xl font-bold">Book Your Ride</h3>
            <p className="mt-2 text-sm text-muted-foreground">We'll get back to you within minutes.</p>
            <div className="mt-6 grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Input label="Full Name" placeholder="John Doe" />
                <Input label="Phone" placeholder="+91 ..." type="tel" />
              </div>
              <Input label="Email" placeholder="you@example.com" type="email" />
              <div className="grid gap-4 sm:grid-cols-2">
                <Input label="Pickup Location" placeholder="Shimla, Manali..." />
                <Input label="Travel Date" type="date" />
              </div>
              <div>
                <label className="mb-2 block text-xs tracking-widest text-muted-foreground">MESSAGE</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your journey..."
                  className="w-full rounded-xl border border-input bg-background/40 px-4 py-3 text-sm outline-none focus:border-gold/50 focus:ring-2 focus:ring-gold/20"
                />
              </div>
              <button
                type="submit"
                className="group relative mt-2 inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-gold px-6 py-4 text-sm font-bold text-gold-foreground shadow-gold transition-transform hover:scale-[1.02]"
              >
                <Send className="h-4 w-4" />
                {sent ? "Message Sent ✓" : "Send Booking Request"}
                <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-700 group-hover:translate-x-full" />
              </button>
              <div className="flex items-center gap-2 pt-2 text-xs text-muted-foreground">
                <Mail className="h-3.5 w-3.5" /> info@vermatravels.com
              </div>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Input({ label, ...rest }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="mb-2 block text-xs tracking-widest text-muted-foreground">{label.toUpperCase()}</label>
      <input
        {...rest}
        className="w-full rounded-xl border border-input bg-background/40 px-4 py-3 text-sm outline-none focus:border-gold/50 focus:ring-2 focus:ring-gold/20"
      />
    </div>
  );
}
