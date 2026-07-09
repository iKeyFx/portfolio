import Ticker from "@/components/Ticker";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Ticker />
      <Hero />
      <main>
        <Work />
        <Experience />
        <Approach />
      </main>
      <Contact />
    </>
  );
}
