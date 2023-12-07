import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Intro from "@/components/Intro";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div>
      <MaxWidthWrapper className="">
        <Intro />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </MaxWidthWrapper>
    </div>
  );
}
