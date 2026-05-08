import { useEffect, useState } from "react";

// Deterministic seeded PRNG so SSR and client agree, then we only render after mount
function seeded(seed: number) {
  let s = seed;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

export function Particles({ count = 30 }: { count?: number }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const rand = seeded(count * 1337);
  const dots = Array.from({ length: count }).map((_, i) => ({
    id: i,
    left: rand() * 100,
    top: rand() * 100,
    size: rand() * 3 + 1,
    delay: rand() * 8,
    duration: 6 + rand() * 8,
  }));

  if (!mounted) return null;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {dots.map((d) => (
        <span
          key={d.id}
          className="absolute rounded-full bg-gold/60 animate-float-slow"
          style={{
            left: `${d.left}%`,
            top: `${d.top}%`,
            width: d.size,
            height: d.size,
            animationDelay: `${d.delay}s`,
            animationDuration: `${d.duration}s`,
            boxShadow: "0 0 8px currentColor",
          }}
        />
      ))}
    </div>
  );
}
