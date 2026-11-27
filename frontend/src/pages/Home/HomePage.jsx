import Hero from "./components/Hero";
import StatsStrip from "./components/StatsStrip";
import About from "./components/About";
import WhatWeDo from "./components/WhatWeDo";
import FeaturedProjects from "./components/FeaturedProjects";
import HowWeWork from "./components/HowWeWork";
import CtaBanner from "./components/CtaBanner";

// Static page: no state, no handlers.
export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <About />
      <WhatWeDo />
      <FeaturedProjects />
      <HowWeWork />
      <CtaBanner />
    </>
  );
}
