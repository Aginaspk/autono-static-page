import Image from "next/image";
import { Loved_by_the_King } from "next/font/google";
import DummyNav from "./dummyNav";
import {
  ArrowRight,
  ChevronDown,
  Locate,
  LocateFixed,
  MapPin,
} from "lucide-react";
const lovedKing = Loved_by_the_King({
  weight: "400",
});

const DummyHero = () => {
  return (
    <div className="h-full w-full rounded-xl relative flex px-20">
      <Image
        src="https://cdn.pixabay.com/photo/2024/09/26/13/54/hockey-9076472_1280.jpg"
        fill
        alt="Hero"
        className="absolute rounded-xl object-cover top-0 left-0 z-10"
      />
      <div className="w-full h-full absolute top-0 left-0 z-20 bg-black/30 rounded-xl"></div>
      <div className=" w-full z-50 absolute top-0 left-0">
        <DummyNav />
      </div>
      <div
        className={`z-50 relative h-full w-full flex flex-col justify-center `}
      >
        <h3 className={`${lovedKing.className} text-3xl text-white`}>
          Discover your game
        </h3>
        <h1 className="text-6xl text-white font-outfit font-bold leading-18 tracking-wide">
          It Starts With You <br /> And We Go Further Together.
        </h1>
        <div className="h-20 w-[1000px] rounded-2xl bg-white/70 my-5 flex items-center justify-between">
          <div className="px-18 relative">
            <MapPin
              className="absolute left-5 top-[3px] text-blue-500"
              size={40}
            />
            <h4 className="font-outfit">Location</h4>
            <h2 className="font-outfit text-black/50">Search your location</h2>
          </div>
          <div className="px-5">
            <Locate size={40} className="text-blue-500" />
          </div>
        </div>
        <div className="flex gap-5">
          <div className="px-5 py-2 rounded-4xl relative flex bg-white/10 font-outfit text-white border border-white/10">
            <h1 className="pr-5">Join Matches</h1>
            <span>
              <ArrowRight className="absolute right-3 top-[11px]" size={18} />
            </span>
          </div>
          <div className="px-5 py-2 rounded-4xl relative flex bg-white/10 font-outfit text-white border border-white/10">
            <h1 className="pr-5">Venues</h1>
            <span>
              <ArrowRight className="absolute right-3 top-[11px]" size={18} />
            </span>
          </div>
          <div className="px-5 py-2 rounded-4xl relative flex bg-white/10 font-outfit text-white border border-white/10">
            <h1 className="pr-5">Join Tournament</h1>
            <span>
              <ArrowRight className="absolute right-3 top-[11px]" size={18} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DummyHero;
