import Hero from "@/components/home/hero";
import Navbar from "@/components/home/navbar";

export default function Home() {
  return (
    <div>
      <div className="h-screen relative">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
}
