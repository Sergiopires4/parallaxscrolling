import { createFileRoute } from "@tanstack/react-router";
import { ParallaxScene } from "@/components/ParallaxScene";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Beyond the Veil — A Parallax Journey" },
      {
        name: "description",
        content:
          "Scroll through a multi-layer parallax universe — starlit skies, firefly forests, cherry blossoms, and a sunlit valley.",
      },
      { property: "og:title", content: "Beyond the Veil — A Parallax Journey" },
      {
        property: "og:description",
        content:
          "A handcrafted parallax scrolling experience across four cinematic chapters.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative">
      <ParallaxScene />
    </main>
  );
}
