import React from "react";
import { Waves } from "lucide-react";

const Experience = () => {
  return (
    <section className="scroll-mt-[4.7rem] " id="experience">
      <Waves className="mt-16 -mb-1 h-12 w-12 text-zinc-600/50 shadow-3xl  dark:text-white/60" />
      <div>Experience</div>
      <div className="max-w-prose">
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
