import { useMemo } from "react";

interface StarfieldProps {
  count?: number;
  className?: string;
}

// Deterministic pseudo-random so SSR and client match
function seeded(i: number) {
  const x = Math.sin(i * 9301 + 49297) * 233280;
  return x - Math.floor(x);
}

export function Starfield({ count = 120, className = "" }: StarfieldProps) {
  const stars = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        top: seeded(i + 1) * 100,
        left: seeded(i + 1000) * 100,
        size: seeded(i + 2000) * 2 + 0.8,
        delay: seeded(i + 3000) * 4,
        duration: 2 + seeded(i + 4000) * 4,
        opacity: 0.4 + seeded(i + 5000) * 0.6,
      })),
    [count]
  );

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {stars.map((s, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-white animate-twinkle"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            opacity: s.opacity,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
            boxShadow: `0 0 ${s.size * 3}px rgba(255,255,255,${s.opacity * 0.8})`,
          }}
        />
      ))}
    </div>
  );
}
