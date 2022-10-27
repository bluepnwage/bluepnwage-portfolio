"use client";
import type { FormEvent } from "react";

export function ContactForm() {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const { sendEmail } = await import("../../util/emailJs");
    const form = Object.fromEntries(formData);
    const response = await sendEmail(form as any);
  };
  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <h3 className="text-2xl mb-2 font-bold text-center">Get in touch</h3>
      <p className="space-y-2">
        <label htmlFor="name" className="block">
          Name{" "}
          <span aria-label="required" className="text-red-500">
            *
          </span>
        </label>
        <input
          className="appearance-none outline-none rounded-sm px-4 py-1 border w-full border-zinc-600 focus:border-indigo-400"
          placeholder="Agis Carty"
          name="name"
          type="text"
          autoComplete="name"
          id="name"
          required
        />
      </p>
      <p className="space-y-2">
        <label htmlFor="email" className="block">
          Email{" "}
          <span aria-label="required" className="text-red-500">
            *
          </span>
        </label>
        <input
          className="appearance-none outline-none rounded-sm px-4 py-1 border w-full border-zinc-600 focus:border-indigo-400"
          placeholder="example@example.com"
          name="email"
          type="email"
          id="email"
          required
        />
      </p>
      <p className="space-y-2">
        <label htmlFor="subject" className="block">
          Subject{" "}
        </label>
        <input
          className="appearance-none outline-none rounded-sm px-4 py-1 border w-full border-zinc-600 focus:border-indigo-400"
          name="subject"
          type="text"
          id="subject"
          required
        />
      </p>
      <p className="space-y-2">
        <label htmlFor="message" className="block">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          className="border border-zinc-600 rounded-sm px-4 py-1 w-full appearance-none outline-none focus:border-indigo-400"
          id="message"
          name="message"
          required
        />
      </p>
      <button className="px-4 py-2 rounded-md block bg-indigo-600 text-gray-200 font-semibold text-lg uppercase mx-auto relative active:top-[2px]">
        Submit
      </button>
    </form>
  );
}
