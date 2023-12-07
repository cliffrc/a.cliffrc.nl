import React from "react";
import { HeartPulse } from "lucide-react";
import SectionHeader from "./SectionHeader";

const Contact = () => {
  return (
    <section className="mt-12 flex flex-col items-center" id="contact">
      <HeartPulse className="h-12 w-12 text-muted-foreground" />
      <h2 className="mb-2 text-2xl font-semibold">Contact</h2>
      <p>FIXME up with a form please</p>
    </section>
  );
};

export default Contact;
