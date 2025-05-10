import DummyHero from "@/components/home/dummyHero";
import DummyNav from "@/components/home/dummyNav";
import Hero from "@/components/home/hero";
import Navbar from "@/components/home/navbar";

export default function Home() {
  return (
    <div className="p-5 h-screen">
      <div className="h-full relative rounded-xl">
        <DummyHero />
      </div>
    </div>
  );
}
