"use client";
import { sendEmail } from "@/lib/send-email";
import { HeartPulse } from "lucide-react";
import { FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      className="mt-12 flex scroll-mt-28 flex-col items-center"
      id="contact"
    >
      <HeartPulse className="h-12 w-12 text-muted-foreground" />
      <h2 className="mb-2 text-2xl font-semibold">Contact</h2>

      <p className="-mt-3 text-gray-700 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:example@gmail.com">
          example@gmail.com
        </a>{" "}
        or through this form.
      </p>
      <form className="mt-10 flex flex-col" action={sendEmail}>
        <input
          className="borderBlack h-14 rounded-lg px-4"
          type="text"
          name="firstName"
          required
          placeholder="First Name"
        />
        <input
          className="borderBlack my-3 h-14 rounded-lg px-4"
          name="senderEmail"
          type="email"
          required
          placeholder="Email"
        />
        <textarea
          className="borderBlack my-3 h-52 rounded-lg p-4"
          name="message"
          placeholder="Your message ..."
          required
          maxLength={500}
        />
        <button
          type="submit"
          className="disabled:bg-opacity-65 group flex h-[3rem] w-[8rem] items-center justify-center gap-2 rounded-full bg-gray-900 text-white outline-none transition-all hover:scale-110 hover:bg-gray-950 focus:scale-110 active:scale-105 disabled:scale-100 dark:bg-white dark:bg-opacity-10"
        >
          <>
            Submit{" "}
            <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:-translate-y-1 group-hover:translate-x-1" />{" "}
          </>
        </button>
      </form>
    </section>
  );
};

export default Contact;
