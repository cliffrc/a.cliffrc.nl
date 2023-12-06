import {
  techSkillsData,
  businessSkillsData,
  personalSkillsData,
} from "@/lib/data";
import SectionHeader from "./SectionHeader";
import {
  ActivityIcon,
  ArrowDownFromLine,
  Layers3,
  Workflow,
} from "lucide-react";
import React from "react";

const Skills = () => {
  return (
    <section
      className="mt-12 sm:scroll-mt-[4.7rem]  flex flex-col items-center"
      id="skills"
    >
      <Layers3 className="h-12 w-12 text-zinc-600/50" />

      <SectionHeader>My skills</SectionHeader>

      <div className="bg-zinc-300/10 p-4  m-auto max-w-md items-center text-center rounded-xl">
        <h4 className="m-auto w-fit px-3 mb-3 text-xl text-zinc-800 font-medium border-2 border-zinc-600/50 rounded-full   dark:text-white/60">
          Technical Skills
        </h4>

        <ul className="text-sm mt-2 flex flex-wrap justify-center gap-2  text-zinc-800">
          {techSkillsData.map((skill, index) => (
            <li
              className="bg-gray-400/40 border-zinc-400/50 rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80 dark:hover:text-yellow-200 dark:hover:underline dark:hover:underline-offset-8"
              key={index}
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
      <ActivityIcon className="my-3 h-6 w-6 text-zinc-600/50 text-4xl font-semibold -rotate-[10deg]  dark:text-white/60" />
      <div className="bg-zinc-300/10 p-4  m-auto max-w-md items-center text-center rounded-xl">
        <h4 className="m-auto w-fit px-3 mb-3 text-xl text-zinc-800 font-medium border-2 border-zinc-600/50 rounded-full   dark:text-white/60 underline underline-offset-4 decoration-1">
          Business and Marketing Skills
        </h4>
        <ul className="text-sm mt-2 flex flex-wrap justify-center gap-2  text-zinc-800">
          {businessSkillsData.map((skill, index) => (
            <li
              className="bg-gray-400/40 border-zinc-400/50 rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80 dark:hover:text-yellow-200 dark:hover:underline dark:hover:underline-offset-8"
              key={index}
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
      <ActivityIcon className="my-3 h-6 w-6 text-zinc-600/50 text-4xl font-semibold -rotate-[10deg]  dark:text-white/60" />
      <div className="bg-zinc-300/10 p-4  m-auto max-w-md items-center text-center rounded-xl">
        <h4 className="m-auto w-fit px-3 mb-3 text-xl text-zinc-800 font-medium border-2 border-zinc-600/50 rounded-full   dark:text-white/60">
          Personal Qualities
        </h4>
        <ul className="text-sm capitalize mt-2 flex flex-wrap justify-center gap-2  text-zinc-800">
          {personalSkillsData.map((skill, index) => (
            <li
              className="bg-gray-400/40 border-zinc-400/50 rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80 dark:hover:text-yellow-200 dark:hover:underline dark:hover:underline-offset-8"
              key={index}
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
