"use client";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsTop(currentScrollY === 0);
      if (currentScrollY > lastScrollY && currentScrollY > 500) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.addEventListener("scroll", handleScroll);
  }, [lastScrollY]);
  return (
    <div
      className={`h-[80px] flex items-center bg-transparent w-full px-[100px] z-50 fixed transition-transform duration-300 ease-in-out ${
        show ? "-translate-y-0" : "-translate-y-full"
      } ${!isTop ? "bg-white" : "bg-transparent"}`}
    >
      <div className="flex items-center w-full justify-between">
        <div>
          <h1 className={`font-mont text-black text-[20px] tracking-[0.35em]`}>
            AUTONO
          </h1>
        </div>
        <div className="list-none  flex items-center gap-[16px]">
          <li className="px-[10px] text-[17px] tracking-[0.025em] text-black/80 leading-1 font-montreg ">
            Technology
          </li>
          <li className="px-[10px] text-[17px] tracking-[0.025em] text-black/80 leading-1 font-montreg">
            About
          </li>
          <li className="px-[10px] text-[17px] tracking-[0.025em] text-black/80 leading-1 font-montreg">
            Careers
          </li>
          <Button
            className="text-[17px] font-montreg tracking-wide font-normal"
            size={"lg"}
          >
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
