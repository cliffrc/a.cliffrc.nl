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
    <section className="" id="skills">
      <Layers3 className="" />

      <SectionHeader>My skills</SectionHeader>

      <div className="">
        <h4 className="">Technical Skills</h4>

        <ul className="">
          {techSkillsData.map((skill, index) => (
            <li className="" key={index}>
              {skill}
            </li>
          ))}
        </ul>
      </div>
      <ActivityIcon className="" />
      <div className="">
        <h4 className="">Business and Marketing Skills</h4>
        <ul className="">
          {businessSkillsData.map((skill, index) => (
            <li className="" key={index}>
              {skill}
            </li>
          ))}
        </ul>
      </div>
      <ActivityIcon className="" />
      <div className="">
        <h4 className="">Personal Qualities</h4>
        <ul className="">
          {personalSkillsData.map((skill, index) => (
            <li className="" key={index}>
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
