import About from "@/components/About";
import Contact from "@/components/Contact";
import Intro from "@/components/Intro";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div>
      <MaxWidthWrapper className="mt-12 sm:mt-40 flex flex-col items-center justify-center text-center">
        <Intro />
        <About />
        <Skills />

        <Projects />
        <Contact />
      </MaxWidthWrapper>
    </div>
  );
}
