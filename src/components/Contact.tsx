import React from "react";
import { HeartPulse } from "lucide-react";
import SectionHeader from "./SectionHeader";

const Contact = () => {
  return (
    <section
      className="mt-12 sm:scroll-mt-[4.7rem]  flex flex-col items-center"
      id="contact"
    >
      <HeartPulse className="h-12 w-12 text-zinc-600/50" />
      <SectionHeader>Contact</SectionHeader>
      <p>FIXME up with a form please</p>
    </section>
  );
};

export default Contact;
