import React from "react";
import { ActivityIcon, Waves } from "lucide-react";
import SectionHeader from "./SectionHeader";

const Experience = () => {
  return (
    <section
      className="mt-12  flex scroll-mt-28 flex-col items-center"
      id="experience"
    >
      <Waves className="h-12 w-12 text-muted-foreground" />
      <h2 className="mb-2 text-2xl font-semibold">Experience</h2>
      <div className="mt-2 max-w-prose rounded-xl bg-foreground/10 px-9 pb-2 pt-8 text-sm">
        <p className="first font-normal">
          Since 2019 I have been running my own firm, mainly carrying out
          research into practical applications of AI, learning about (and
          experimenting with) entrepreneurship, while engaging in some
          post-divorce digital nomad life. Once the pandemic lockdowns ended I
          was able to spend some time researching mental health work especially
          in relation to personal fitness and how to use both can be used for
          personal development. Prior to 2019 I was stay-at-home dad to our two
          daughters where I was able to carry out the role of a super-dedicated
          husband and father, as well as engage in plentiful home improvement
          projects while keeping up to date with tech and web developments
          (think: remote working before anyone else did).
        </p>
        <p className="mt-4">
          Prior to fatherhood and emigration to The Netherlands (Delft), I
          worked in a variety of accounting and administrative roles at a range
          of companies and charitable organizations. This included (among
          others) Trans World Airlines, KLM Cargo, DHL International UK, Notting
          Hill Housing Trust, Human Rights Watch, Farr Vintners, Nederlander
          Theatres London and a number of others.{" "}
        </p>
        <p className="mt-4">
          In 1996 I graduated from SOAS, University of London with a Bachelors
          in Economics and Development Studies.
        </p>
        <ActivityIcon className="divIcon2 mx-auto" />
      </div>
    </section>
  );
};

export default Experience;
