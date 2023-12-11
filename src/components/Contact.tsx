"use client";
import { sendEmail } from "@/lib/send-email";
import { HeartPulse } from "lucide-react";
import { toast } from "react-hot-toast";
import SubmitBtn from "./submit-btn";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { TContactSchema, contactSchema } from "@/lib/types";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TContactSchema>({ resolver: zodResolver(contactSchema) });

  return (
    <section
      className="mx-auto mt-12 flex scroll-mt-28 flex-col items-center sm:min-w-[30rem]"
      id="contact"
    >
      <HeartPulse className="h-12 w-12 text-muted-foreground" />
      <h2 className="mb-2 text-2xl font-semibold">Contact</h2>

      <p className=" -mt-1  text-gray-700 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:hi@cliffrc.nl">
          hi@cliffrc.nl
        </a>{" "}
        or through this form.
      </p>
      <form
        className="mt-10 flex flex-col text-sm sm:mx-10 sm:min-w-[48ch]"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }
          toast.success("Email sent successfully");
        }}
      >
        <input
          className="borderBlack h-14 rounded-lg px-4"
          type="text"
          name="firstName"
          required
          placeholder="First Name"
          maxLength={50}
        />
        <input
          className="borderBlack my-3 h-14 rounded-lg px-4"
          name="senderEmail"
          type="email"
          required
          maxLength={100}
          placeholder="Email"
        />
        <textarea
          className="borderBlack my-3 h-52 rounded-lg p-4"
          name="message"
          placeholder="Your message ..."
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </section>
  );
};

export default Contact;
