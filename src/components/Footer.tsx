import { metadata } from "@/app/layout";
import React from "react";
import lightFormat from "date-fns/lightFormat";
import { ActivityIcon, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full mb-10 px-4 text-gray-500">
      <div className="w-screen border border-1 border-zinc-500 sm:w-[36rem]">
        <small className="mb-2 block text-xs">
          &copy; {lightFormat(new Date(), "yyyy")} {metadata.creator}. All
          rights reserved.
        </small>
        <p className="text-xs">
          {/** Add this to metadata in layout and use metadata object to pull in code. Do same with date*/}
          built with TailwindCSS, Next.js (App Router and Server Actions),
          TypeScript, Vercel hosting
        </p>
      </div>
      {/** FIX formatting here */}

      <div className="relative">
        <ActivityIcon className="absolute -top-1 right-1/2 translate-x-1/2 text-zinc-600/70 text-4xl font-semibold -rotate-[10deg] " />
        <ul className="mt-3 p-4 w-0.8 flex text-zinc-600/70 items-center justify-between gap-4 bg-teal-300/40 rounded-3xl border border-teal-800/50 shadow-lg shadow-black/[0.1] backdrop-blur-[0.5rem]">
          <li className=" hover:text-zinc-800 font-semibold">
            <a href="https://instgram.com/cliffrcNL">
              <Instagram />
            </a>
          </li>
          <li className=" hover:text-zinc-800 font-semibold">
            <a href="https://youtube.com/10strata">
              <Youtube />
            </a>
          </li>
          <li className=" hover:text-zinc-800 font-semibold">
            <a href="https://twitter.com/10strata">
              <Twitter />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
