import React from "react";
import { HeartPulse } from "lucide-react";
import { toast } from "react-hot-toast";

const Contact = () => {
  return (
    <section
      className=" mt-12 flex scroll-mt-28 flex-col items-center"
      id="contact"
    >
      <HeartPulse className="h-12 w-12 text-muted-foreground" />
      <h2 className="mb-2 text-2xl font-semibold">Contact</h2>
      <div className="flex flex-col">
        <p className="-mt-6 text-gray-700 dark:text-white/80">
          Please contact me directly at{" "}
          <a className="underline" href="mailto:example@gmail.com">
            example@gmail.com
          </a>{" "}
          or through this form.
        </p>
      </div>
    </section>
  );
};

export default Contact;
