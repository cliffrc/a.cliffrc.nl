import { Clapperboard } from "lucide-react";
import React from "react";
import SectionHeader from "./SectionHeader";

const Projects = () => {
  return (
    <section
      className="mt-12 sm:scroll-mt-[4.7rem]  flex flex-col items-center"
      id="projects"
    >
      <Clapperboard className="h-12 w-12 text-zinc-600/50" />
      <SectionHeader>Projects</SectionHeader>
      <div>
        <ul>
          <li>10strata, with PapyInChat</li>
          <li>We Style Stuff</li>
          <li>Luiard Press</li>
        </ul>
      </div>
    </section>
  );
};

export default Projects;
