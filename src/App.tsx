import { useEffect, useState } from "react";
import { ParallaxScene } from "@/components/ParallaxScene";
import PortfolioPage from "@/routes/portfolio";

function getRoute() {
  if (typeof window === "undefined") return "/";
  const h = window.location.hash.replace(/^#/, "") || "/";
  return h.startsWith("/portfolio") ? "/portfolio" : "/";
}

export default function App() {
  const [route, setRoute] = useState(getRoute);

  useEffect(() => {
    const onHash = () => {
      setRoute(getRoute());
      // Scroll to top on route change unless there's an in-page anchor (#/portfolio#about not used here)
      window.scrollTo({ top: 0 });
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  if (route === "/portfolio") return <PortfolioPage />;

  return (
    <main className="relative">
      <FloatingNavToPortfolio />
      <ParallaxScene />
    </main>
  );
}

function FloatingNavToPortfolio() {
  return (
    <a
      href="#/portfolio"
      className="fixed right-4 top-4 z-50 rounded-full border border-white/30 bg-black/30 px-4 py-2 font-mono text-xs uppercase tracking-widest text-white backdrop-blur transition hover:border-white hover:bg-black/50"
    >
      Portfolio →
    </a>
  );
}
