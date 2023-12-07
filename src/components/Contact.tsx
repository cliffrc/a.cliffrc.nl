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

        <form
          className="mt-10 flex flex-col dark:text-black"
          action={async (formData) => {
            const { data, error } = await sendEmail(formData);

            if (error) {
              toast.error(error);
              return;
            }

            toast.success("Email sent successfully!");
          }}
        >
          <input
            className="borderBlack h-14 rounded-lg px-4 transition-all dark:bg-white dark:bg-opacity-80 dark:outline-none dark:focus:bg-opacity-100"
            name="senderEmail"
            type="email"
            required
            maxLength={500}
            placeholder="Your email"
          />
          <textarea
            className="borderBlack my-3 h-52 rounded-lg p-4 transition-all dark:bg-white dark:bg-opacity-80 dark:outline-none dark:focus:bg-opacity-100"
            name="message"
            placeholder="Your message"
            required
            maxLength={5000}
          />

          {/* <SubmitBtn /> */}
        </form>
      </div>
    </section>
  );
};

export default Contact;
