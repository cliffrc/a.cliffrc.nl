import { ActivityIcon, PenLine, Heart } from "lucide-react";

const About = () => {
  return (
    <section
      className="mt-12 flex scroll-mt-28 flex-col items-center"
      id="about"
    >
      <PenLine className="h-12 w-12 text-muted-foreground" />
      <h2 className="text-2xl font-semibold">About me</h2>
      <div className="mt-2 max-w-prose rounded-xl bg-foreground/10 px-9 pb-2 pt-8 text-sm">
        <p className="first">
          Hello! I&rsquo;m Cliff. In 2023 I got really excited about the field
          of web development. Again. I had stepped away from it some time ago,
          but out of necessity came back into the fold early in the year. Having
          always enjoyed solo development, the past year&apos;s tech
          developments ([wave] ChatGPT and [hey] Next.js 14) have the made the
          the prospect of that real once again. As component libraries and
          standardized build pipelines have integrated with the Edge, working
          with cutting edge once again falls with the realm of the solo
          developer. Owing primarily to the wide availability of zero/low-cost
          SaaS plans as a solo founder I am really looking forward to extending
          my learning experience and being able to roll-out rich and meaningful
          applications for my clients&apos; audiences. My main goal is to ensure
          secure application development all wrapped in strong and compelling
          visuals.
        </p>
        <p className="mt-4">
          To connect, you can do so either via one of the social networks below,
          drop me a note in the contact form below.
        </p>
        <ActivityIcon className="divIcon2 mx-auto" />
      </div>
    </section>
  );
};

export default About;
