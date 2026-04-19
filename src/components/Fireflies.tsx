import { useMemo } from "react";

function seeded(i: number) {
  const x = Math.sin(i * 12.9898 + 78.233) * 43758.5453;
  return x - Math.floor(x);
}

export function Fireflies({ count = 40 }: { count?: number }) {
  const flies = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        top: seeded(i + 1) * 90 + 5,
        left: seeded(i + 200) * 100,
        size: 3 + seeded(i + 400) * 5,
        delay: seeded(i + 600) * 5,
        duration: 4 + seeded(i + 800) * 6,
        hue: seeded(i + 1000) > 0.5 ? "60 100% 75%" : "180 90% 80%",
      })),
    [count]
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {flies.map((f, i) => (
        <span
          key={i}
          className="absolute rounded-full animate-float-y"
          style={{
            top: `${f.top}%`,
            left: `${f.left}%`,
            width: `${f.size}px`,
            height: `${f.size}px`,
            background: `hsl(${f.hue} / 0.95)`,
            boxShadow: `0 0 ${f.size * 4}px hsl(${f.hue} / 0.9), 0 0 ${f.size * 8}px hsl(${f.hue} / 0.5)`,
            animationDelay: `${f.delay}s`,
            animationDuration: `${f.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
