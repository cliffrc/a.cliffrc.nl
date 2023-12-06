import React from "react";
import { navLinks } from "@/lib/data";

const Navbar = () => {
  return (
    <header className="z-[999] relative">
      <div className="w-full  h-[4.44rem] fixed top-0 rounded-none border  border-black/40 sm:top-6 sm:h-[3.25rem] sm:w-[36rem] left-1/2 -translate-x-1/2 sm:rounded-full"></div>
      <nav className="flex fixed top-[0.19rem]">
        <ul>
          {navLinks.map((navlink) => (
            <li key={navlink.hash}>{navlink.name}</li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
