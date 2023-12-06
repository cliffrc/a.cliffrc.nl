import React from "react";
import { navLinks } from "@/lib/data";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Navbar = () => {
  return (
    <header className="z-[999] relative">
      <div className="w-full  h-[4.44rem] fixed top-0 rounded-none border  border-black/40 bg-white/50 backdrop-blur-sm sm:top-6 sm:h-[3.25rem] sm:w-[36rem] left-1/2 -translate-x-1/2 sm:rounded-full"></div>
      <nav className="flex fixed top-[0.15rem] left-1/2 -translate-x-1/2 h-12 py-2  sm:top-[1.7rem] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-1 font-medium text-sm text-zinc-500/90 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {navLinks.map((navlink) => (
            <li
              key={navlink.hash}
              className="h-3/4 flex items-center justify-center relative
            "
            >
              <Link
                className={cn(
                  "flex w-full items-center justify-centerp-3 hover:text-zinc-950 transition dark:text-zinc-500 dark:hover:gray-300"
                )}
                href={navlink.hash}
              >
                {navlink.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
