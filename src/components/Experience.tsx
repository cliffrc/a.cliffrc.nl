import React from "react";
import { Waves } from "lucide-react";
import SectionHeader from "./SectionHeader";

const Experience = () => {
  return (
    <section
      className="mt-12 sm:scroll-mt-[4.7rem] flex flex-col items-center"
      id="experience"
    >
      <Waves className="h-12 w-12 text-zinc-600/50" />
      <SectionHeader>Experience</SectionHeader>
      <div className="max-w-prose justify-center text-center">
        <p>
          Since 2019 I have self-funded the running my own small firm. With
          varying results, though I have high hopes for the above projects.
          Prior to this, while being stay-at-home dad to our two daughters,
          I spent a considerable amount of time working small-scale tech
          projects. Plenty of home improvement projects kept me busy and
          distracted.
        </p>
        <p>
          Prior to emigrating to the Netherlands and graduation, I worked
          at various companies and charitable organizations. the included
          Trans World Airlines, KLM Cargo, DHL International UK, Notting
          Hill Housing Trust (among others), Human Rights Watch (London
          office), Farr Vintners, Nederlander Theaters (London ) and
          others.
        </p>
      </div>
    </section>
  );
};

export default Experience;
