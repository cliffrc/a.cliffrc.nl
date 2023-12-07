import { metadata } from "@/app/layout";
import React from "react";
import lightFormat from "date-fns/lightFormat";
import { ActivityIcon, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mx-8 mt-20 rounded-lg bg-destructive/10 px-10 py-4">
      <div className="">
        <p className="small-caps text-xs">
          &copy; {lightFormat(new Date(), "yyyy")} {metadata.creator}. All
          rights reserved.
        </p>
        <small className="">
          {/** Add this to metadata in layout and use metadata object to pull in code. Do same with date*/}
          built with TailwindCSS, Next.js (App Router and Server Actions),
          TypeScript, Vercel hosting
        </small>
      </div>
      {/** FIX formatting here */}

      <div className="flex flex-col items-center pb-4">
        <ActivityIcon className="divIcon2" />
        <ul className="flex flex-row justify-center gap-3">
          <li className="">
            <a href="https://instgram.com/cliffrcNL">
              <Instagram />
            </a>
          </li>
          <li className="">
            <a href="https://youtube.com/10strata">
              <Youtube />
            </a>
          </li>
          <li className="">
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
