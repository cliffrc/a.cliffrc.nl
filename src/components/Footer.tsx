import { metadata } from "@/app/layout";
import React from "react";
import lightFormat from "date-fns/lightFormat";

const Footer = () => {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; {lightFormat(new Date(), "yyyy")} {metadata.creator}. All
        rights reserved.
      </small>
      <p className="text-xs">
        built with TailwindCSS, Next.js (App Router and Server Actions),
        TypeScript, Vercel hosting
      </p>
    </footer>
  );
};

export default Footer;
