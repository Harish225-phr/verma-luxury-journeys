import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-border/40 pt-16 pb-10">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
      <div className="pointer-events-none absolute -top-20 left-1/2 h-40 w-[600px] -translate-x-1/2 rounded-full bg-gold/10 blur-[100px]" />

      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-gold font-display text-lg font-black text-gold-foreground glow-gold">V</div>
              <div>
                <div className="text-sm font-bold tracking-[0.2em] text-gradient-gold">VERMA</div>
                <div className="text-[10px] tracking-[0.3em] text-muted-foreground">TOUR & TRAVELS</div>
              </div>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-foreground/65">
              Premium tour & travel services across Himachal Pradesh — luxury vehicles, expert chauffeurs, unforgettable journeys.
            </p>
            <div className="mt-5 flex gap-2">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="grid h-10 w-10 place-items-center rounded-full glass hover:bg-gradient-gold hover:text-gold-foreground transition-colors">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-xs tracking-[0.3em] text-gold">QUICK LINKS</div>
            <ul className="mt-5 space-y-3 text-sm">
              {["Home", "About", "Services", "Fleet", "Gallery", "Packages"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="text-foreground/70 hover:text-gold transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs tracking-[0.3em] text-gold">PACKAGES</div>
            <ul className="mt-5 space-y-3 text-sm">
              {["Shimla Tour", "Manali Tour", "Dharamshala", "Dalhousie", "Spiti Valley"].map((l) => (
                <li key={l} className="text-foreground/70 hover:text-gold transition-colors cursor-pointer">{l}</li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs tracking-[0.3em] text-gold">CONTACT</div>
            <ul className="mt-5 space-y-3 text-sm text-foreground/70">
              <li className="flex items-start gap-2"><Phone className="h-4 w-4 mt-0.5 text-gold" /> +91 9816492182</li>
              <li className="flex items-start gap-2"><Phone className="h-4 w-4 mt-0.5 text-gold" /> +91 7018474668</li>
              <li className="flex items-start gap-2"><Mail className="h-4 w-4 mt-0.5 text-gold" /> info@vermatravels.com</li>
              <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-gold" /> Himachal Pradesh, India</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/40 pt-6 text-xs text-muted-foreground md:flex-row">
          <div>© {new Date().getFullYear()} Verma Tour & Travels. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gold">Privacy Policy</a>
            <a href="#" className="hover:text-gold">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
