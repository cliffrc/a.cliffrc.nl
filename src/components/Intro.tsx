import Image from "next/image";
import cliffImg from "@/public/crc-profile.jpg";
import { ActivityIcon } from "lucide-react";

const Intro = () => {
  return (
    <section
      className="mx-auto mt-28 max-w-[50rem] scroll-mt-28 items-center text-center sm:mb-0"
      id="home"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <div>
            <Image
              src={cliffImg}
              alt="Image of Cliff"
              priority
              className="h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl sepia-[0.2]"
            />
          </div>
          <span className="absolute bottom-0 right-0 text-4xl">🖖</span>
        </div>
      </div>
      <h1 className="small-caps mb-2 mt-7 max-w-lg px-4 text-center text-2xl font-light !leading-[1.5] text-zinc-800 sm:text-2xl">
        <span className=" font-extrabold">Hello, I am Cliff</span>. I am a{" "}
        <span className=" font-bold underline">
          dedicated React full-stack developer
        </span>{" "}
        <span className=" font-light text-zinc-600">
          making my return to the field.
        </span>
      </h1>
      <ActivityIcon className="divIcon2 mx-auto" />

      <p className="small-caps mb-10  max-w-md px-4 text-center text-base font-normal italic !leading-[1.5] text-zinc-600 sm:text-base">
        My work <span className=" font-bold underline">leverages Next.js</span>{" "}
        to create balance between{" "}
        <span className="font-[400] underline">creativity</span>,{" "}
        <span className="font-[400] underline">speed</span> and{" "}
        <span className="font-[400] underline">responsiveness</span>. I am
        strongly committed to seeking to merging{" "}
        <span className=" font-[500] underline">aesthetic appeal</span> with{" "}
        <span className="font-[500] underline">high performance</span>.
      </p>
    </section>
  );
};

export default Intro;
