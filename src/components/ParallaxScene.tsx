import { useParallax } from "@/hooks/use-parallax";
import { Starfield } from "@/components/Starfield";
import { Fireflies } from "@/components/Fireflies";
import starsImg from "@/assets/layer-stars.jpg";
import moonImg from "@/assets/layer-moon.png";
import mountainsFar from "@/assets/layer-mountains-far.png";
import mountainsMid from "@/assets/layer-mountains-mid.png";
import treesFar from "@/assets/layer-trees-far.png";
import treesNear from "@/assets/layer-trees-near.png";
import petalsImg from "@/assets/layer-petals.png";
import valleyImg from "@/assets/scene-valley.jpg";

export function ParallaxScene() {
  const y = useParallax();

  // Helper: translate Y by speed multiplier
  const t = (speed: number) => ({ transform: `translate3d(0, ${y * speed}px, 0)` });

  return (
    <div className="relative w-full">
      {/* ==================== CHAPTER 1 — COSMIC NIGHT ==================== */}
      <section
        aria-label="A starlit beginning"
        className="relative h-[100vh] w-full overflow-hidden bg-sky-gradient"
      >
        {/* Star background image */}
        <img
          src={starsImg}
          alt=""
          aria-hidden
          className="parallax-layer top-0 h-[120%] w-full object-cover opacity-70"
          style={t(0.3)}
          width={1920}
          height={1280}
        />
        {/* Twinkling stars overlay */}
        <div className="parallax-layer top-0 h-full w-full" style={t(0.15)}>
          <Starfield count={150} />
        </div>

        {/* Moon */}
        <img
          src={moonImg}
          alt=""
          aria-hidden
          loading="lazy"
          width={1024}
          height={1024}
          className="parallax-layer left-1/2 top-[8%] w-[42vmin] -translate-x-1/2 drop-shadow-[0_0_80px_rgba(255,240,200,0.4)] animate-float-y"
          style={{ ...t(0.1), transform: `translate3d(-50%, ${y * 0.1}px, 0)` }}
        />

        {/* Title */}
        <div
          className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
          style={{ transform: `translateY(${y * -0.2}px)`, opacity: Math.max(0, 1 - y / 600) }}
        >
          <p className="font-sans-ui text-xs uppercase tracking-[0.4em] text-aurora-2/90 text-glow">
            A parallax journey
          </p>
          <h1 className="font-display mt-4 text-6xl font-light leading-[0.95] text-foreground text-glow sm:text-8xl md:text-[10rem]">
            Beyond the
            <br />
            <span className="bg-aurora bg-clip-text italic text-transparent">Veil</span>
          </h1>
          <p className="mt-6 max-w-md font-sans-ui text-sm text-foreground/70 sm:text-base">
            Scroll gently. Let each layer carry you deeper into a universe of light.
          </p>
          <div className="mt-12 h-12 w-[1px] bg-gradient-to-b from-foreground/60 to-transparent" />
        </div>

        {/* Far mountain layer */}
        <img
          src={mountainsFar}
          alt=""
          aria-hidden
          loading="lazy"
          width={1920}
          height={800}
          className="parallax-layer bottom-0 w-full opacity-80"
          style={t(-0.05)}
        />
        {/* Mid mountain layer */}
        <img
          src={mountainsMid}
          alt=""
          aria-hidden
          loading="lazy"
          width={1920}
          height={700}
          className="parallax-layer bottom-0 w-full"
          style={{ ...t(-0.12), filter: "hue-rotate(220deg) brightness(0.4)" }}
        />
        {/* Far trees */}
        <img
          src={treesFar}
          alt=""
          aria-hidden
          loading="lazy"
          width={1920}
          height={600}
          className="parallax-layer bottom-0 w-full opacity-90"
          style={t(-0.2)}
        />
        {/* Near trees */}
        <img
          src={treesNear}
          alt=""
          aria-hidden
          loading="lazy"
          width={1920}
          height={700}
          className="parallax-layer bottom-[-2%] w-full"
          style={{ ...t(-0.35), filter: "brightness(0.25)" }}
        />
      </section>

      {/* ==================== CHAPTER 2 — FIREFLY MEADOW ==================== */}
      <section className="relative h-[120vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.18_0.08_280)] via-[oklch(0.22_0.1_260)] to-[oklch(0.28_0.12_200)]" />

        <Fireflies count={60} />

        {/* Drifting tree silhouettes */}
        <img
          src={treesNear}
          alt=""
          aria-hidden
          loading="lazy"
          width={1920}
          height={700}
          className="parallax-layer bottom-0 w-full opacity-90"
          style={{
            transform: `translate3d(${(y - 800) * 0.05}px, ${(y - 800) * -0.1}px, 0)`,
            filter: "brightness(0.15)",
          }}
        />

        <div className="relative z-10 mx-auto flex h-full max-w-3xl flex-col items-center justify-center px-6 text-center">
          <span className="font-sans-ui text-xs uppercase tracking-[0.4em] text-aurora-3">
            Chapter II
          </span>
          <h2 className="font-display mt-3 text-5xl font-light italic text-foreground text-glow sm:text-7xl">
            Where lanterns of the forest hum
          </h2>
          <p className="mt-6 max-w-xl font-sans-ui text-base leading-relaxed text-foreground/75">
            Tiny constellations rise from the moss — fireflies tracing forgotten paths
            through air still warm from a sleeping sun.
          </p>
        </div>
      </section>

      {/* ==================== CHAPTER 3 — CHERRY BLOSSOM ==================== */}
      <section className="relative h-[110vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.28_0.12_200)] via-[oklch(0.55_0.13_25)] to-[oklch(0.85_0.08_60)]" />

        {/* Petals far */}
        <img
          src={petalsImg}
          alt=""
          aria-hidden
          loading="lazy"
          width={1920}
          height={1080}
          className="parallax-layer top-0 h-full w-full object-cover opacity-50"
          style={{ transform: `translate3d(0, ${(y - 1800) * 0.15}px, 0) scale(1.1)` }}
        />
        {/* Petals near */}
        <img
          src={petalsImg}
          alt=""
          aria-hidden
          loading="lazy"
          width={1920}
          height={1080}
          className="parallax-layer top-0 h-full w-full object-cover"
          style={{ transform: `translate3d(0, ${(y - 1800) * 0.4}px, 0) scale(1.4) rotate(8deg)` }}
        />

        <div className="relative z-10 mx-auto flex h-full max-w-3xl flex-col items-center justify-center px-6 text-center">
          <span className="font-sans-ui text-xs uppercase tracking-[0.4em] text-[oklch(0.25_0.1_320)]">
            Chapter III
          </span>
          <h2 className="font-display mt-3 text-5xl font-light italic text-[oklch(0.18_0.08_320)] sm:text-7xl">
            A breath of pink between worlds
          </h2>
          <p className="mt-6 max-w-xl font-sans-ui text-base leading-relaxed text-[oklch(0.25_0.08_320)]">
            Petals fall sideways through time, soft as a memory you didn't know
            you'd kept.
          </p>
        </div>
      </section>

      {/* ==================== FINALE — THE VALLEY ==================== */}
      <section className="relative h-[120vh] w-full overflow-hidden">
        <img
          src={valleyImg}
          alt="Sunlit fantasy valley with a winding river and distant castle"
          loading="lazy"
          width={1920}
          height={1080}
          className="parallax-layer top-0 h-[120%] w-full object-cover"
          style={{ transform: `translate3d(0, ${(y - 2900) * 0.2}px, 0) scale(1.05)` }}
        />
        {/* Soft warm vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[oklch(0.16_0.06_285)]" />

        <div className="relative z-10 mx-auto flex h-full max-w-3xl flex-col items-center justify-end px-6 pb-24 text-center">
          <span className="font-sans-ui text-xs uppercase tracking-[0.4em] text-foreground/80">
            Arrival
          </span>
          <h2 className="font-display mt-3 text-5xl font-light text-foreground text-glow sm:text-7xl">
            And then, the valley remembered you
          </h2>
          <p className="mt-6 max-w-xl font-sans-ui text-base leading-relaxed text-foreground/85 text-glow">
            Every layer was a step. Every step, a smaller sky.
            Welcome home, traveller.
          </p>

          <div className="mt-10 flex items-center gap-4 font-sans-ui text-xs uppercase tracking-[0.3em] text-foreground/70">
            <span className="h-px w-10 bg-foreground/40" />
            Crafted with parallax & light
            <span className="h-px w-10 bg-foreground/40" />
          </div>
        </div>
      </section>
    </div>
  );
}
