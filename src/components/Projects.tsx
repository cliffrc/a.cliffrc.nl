import { Clapperboard } from "lucide-react";
import React from "react";

const Projects = () => {
  return (
    <section className="scroll-mt-[4.7rem] " id="projects">
      <Clapperboard className="mt-16 -mb-1 h-12 w-12 text-zinc-600/50 shadow-3xl dark:text-white/60" />
      <div>Projects</div>
      <ul>
        <li>10strata, with PapyInChat</li>
        <li>We Style Stuff</li>
        <li>Luiard Press</li>
      </ul>
    </section>
  );
};

export default Projects;
