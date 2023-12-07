import { metadata } from "@/app/layout";
import React from "react";
import lightFormat from "date-fns/lightFormat";
import { ActivityIcon, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="">
      <div className="">
        <div className="">
          &copy; {lightFormat(new Date(), "yyyy")} {metadata.creator}. All
          rights reserved.
        </div>
        <p className="">
          {/** Add this to metadata in layout and use metadata object to pull in code. Do same with date*/}
          built with TailwindCSS, Next.js (App Router and Server Actions),
          TypeScript, Vercel hosting
        </p>
      </div>
      {/** FIX formatting here */}

      <div className="">
        <ActivityIcon className="" />
        <ul className="">
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
