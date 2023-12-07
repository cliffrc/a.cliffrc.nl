import React from "react";
import { navLinks } from "@/lib/data";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Navbar = () => {
  return (
    <header className="">
      <div className=""></div>
      <nav className="">
        <ul className="">
          {navLinks.map((navlink) => (
            <li key={navlink.hash} className="">
              <Link className={cn("f")} href={navlink.hash}>
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
