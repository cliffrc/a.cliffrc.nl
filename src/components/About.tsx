import React from "react";
import { PenLine } from "lucide-react";

const About = () => {
  return (
    <section className="scroll-mt-[4.7rem] " id="about">
      <PenLine className="mt-16 -mb-1 h-12 w-12 text-zinc-600/50 shadow-3xl items-center  dark:text-white/60" />
      <div>About</div>
      <p className="max-w-prose ">
        Hello! I'm Cliff. I started learning web development in May 2020,
        which is the start of the pandemic. I have nothing much to do so I
        decided to learn web development from a udemy course, then started
        watching a bunch of youtube videos to explore more about web
        development especially frontend development. There are a lot of
        things and technologies to learn in frontend development and I am
        motivated to learn as much as possible. I enjoy learning something
        new and getting feedback to make myself better and improve. In this
        website I will be writing some blogs and showcase my projects. I
        believe that writing what I have learned is the best way to
        remember things, and I can share my knowledge along the way. So do
        contact me and I will be very happy to help!
      </p>
    </section>
  );
};

export default About;
