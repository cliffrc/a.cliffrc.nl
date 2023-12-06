import React from "react";
import SectionHeader from "./SectionHeader";

const Intro = () => {
  return (
    <section
      className="sm:scroll-mt-[4.7rem]  flex flex-col items-center"
      id="home"
    >
      <p className="">
        <span className="h-12 w-12 text-zinc-600/50 text-4xl">🖖</span>
      </p>
      <SectionHeader>Intro</SectionHeader>
      <h2 className="dark:text-white/70">Live long and prosper</h2>
    </section>
  );
};

export default Intro;
