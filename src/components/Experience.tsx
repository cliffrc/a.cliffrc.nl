import { ActivityIcon, Waves } from "lucide-react";

const Experience = () => {
  return (
    <section
      className="mt-12  flex scroll-mt-28 flex-col items-center text-zinc-600"
      id="experience"
    >
      <Waves className="h-12 w-12 text-muted-foreground" />
      <h2 className="mb-2 text-2xl font-semibold">Experience</h2>
      <div className="mt-2 max-w-prose rounded-xl bg-foreground/10 px-12 pb-2 pt-8 text-sm">
        <p>
          Since 2019, I have been self-funding and running my own small firm,
          focusing on a variety of projects that demonstrate both challenge and
          promise. Prior to this, I embraced being a stay-at-home dad,
          dedicating myself to raising our two daughters, while also keeping my
          technical skills sharp through small-scale tech projects and numerous
          home improvement endeavors.
        </p>
        <p className="mt-2">
          My professional journey began at Nederlander Theatres in London ending
          as an assistant box office manager. This role marked the start of a
          diverse career path which, prior to my graduation in 1996 and
          subsequent move to the Netherlands in 1998, saw me contributing to
          several companies and charitable organizations in administrative and
          accounting capacities. My experience includes roles as an assistant
          accountant at Farr Vintners and Trans World Airlines, a systems
          accountant at Notting Hill Housing Trust, managing accounts payable at
          DHL International UK, and a logistics assistant at KLM Cargo.
        </p>
        <p className="mt-2">
          Each position has played a significant part in shaping my versatile
          skill set and professional perspective.
        </p>
        <ActivityIcon className="divIcon2 mx-auto" />
      </div>
    </section>
  );
};

export default Experience;
