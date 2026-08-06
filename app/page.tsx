import Hero from "@/components/Hero";
import TechStackBar from "@/components/TechStackBar";
import Founder from "@/components/Founder";
import Portfolio from "@/components/Portfolio";
import GameServices from "@/components/GameServices";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <TechStackBar />
      <Founder />
      <Portfolio />
      <GameServices />
      <Contact />
    </main>
  );
}
