import { Clapperboard } from "lucide-react";
import React from "react";
import SectionHeader from "./SectionHeader";

const Projects = () => {
  return (
    <section className="" id="projects">
      <Clapperboard className="" />
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
