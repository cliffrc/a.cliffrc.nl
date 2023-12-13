import React from "react";
import { ActivityIcon, PenLine } from "lucide-react";

const About = () => {
  return (
    <section className="flex scroll-mt-28 flex-col items-center" id="about">
      <PenLine className="h-12 w-12 text-muted-foreground" />
      <h2 className="text-2xl font-semibold">About me</h2>
      <div className="mt-2 max-w-prose rounded-xl bg-foreground/10 px-12  pb-6 pt-8 text-sm text-zinc-600">
        <p>
          I am deeply passionate about web programming, a field I
          enthusiastically returned to after pivotal life experiences. My
          earlier foundation in computer science was solidified through the MITx
          courses offered on EdX, and Harvard&apos;s CS50x, both of which
          provided a rigorous and challenging introduction to the field. These
          academic pursuits were complemented by practical application through
          full-stack bootcamps on Udemy. I particularly relish the
          problem-solving aspects of programming. My growing expertise lies in
          React, Next.js, TypeScript, and Tailwind CSS, areas in which I
          continuously look to explore and innovate. Learning how components
          synergize, especially through tutorials and documentation, is
          immensely satisfying for me.
        </p>
        <p className="pt-2 ">
          Currently, I am actively seeking work opportunities that align with my
          skill set, while also dedicating time to developing three personal
          enterprise projects that showcase the creative potential of these
          technologies.
        </p>
        <p className="pt-2">
          When I&apos;m not coding, I enjoy a variety of activities that help me
          unwind and recharge. I keep fit with regular strength training
          workouts at the gym and find relaxation in following Premier League
          football and Formula One racing. My leisure time is often spent on
          city and beach walks, sharing moments with my daughters and their
          dogs, and learning new languages via DuoLingo.
        </p>
        <p className="pt-2">
          One final note: I&apos;ve set myself the goal of completing "The 20
          Hour Ukulele Challenge." It&apos;s a commitment to not only learn a
          new skill but also to embrace the joy of (self-made) music in my life.
        </p>
        <ActivityIcon className="divIcon2 mx-auto" />
      </div>
    </section>
  );
};

export default About;
