"use client";
import type { FormEvent } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useState } from "react";
import type { EmailForm } from "../../interfaces";

export function ContactForm() {
  const [form, setForm] = useState<Partial<EmailForm>>({});
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const theme = document.documentElement.className;
    try {
      const { sendEmail } = await import("../../util/emailJs");
      await sendEmail(form as EmailForm);
      toast.success("Email sent succesfully!", { theme: theme as any });
      setForm({});
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };

  const handleChange = (e: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.currentTarget;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <h3 className="text-2xl mb-2 font-bold text-center">Send me an email</h3>
        <p className="space-y-2">
          <label htmlFor="name" className="block">
            Name{" "}
            <span aria-label="required" className="text-red-500">
              *
            </span>
          </label>
          <input
            value={form.name || ""}
            onChange={handleChange}
            className="appearance-none outline-none rounded-sm px-4 py-1 border w-full dark:border-zinc-600 focus:border-indigo-400"
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
            value={form.email || ""}
            onChange={handleChange}
            className="appearance-none outline-none rounded-sm px-4 py-1 border w-full dark:border-zinc-600 focus:border-indigo-400"
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
            value={form.subject || ""}
            onChange={handleChange}
            className="appearance-none outline-none rounded-sm px-4 py-1 border w-full dark:border-zinc-600 focus:border-indigo-400"
            name="subject"
            type="text"
            id="subject"
          />
        </p>
        <p className="space-y-2">
          <label htmlFor="message" className="block">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            value={form.message || ""}
            onChange={handleChange}
            className="border dark:border-zinc-600 rounded-sm px-4 py-1 w-full appearance-none outline-none focus:border-indigo-400"
            id="message"
            name="message"
            required
          />
        </p>
        <button className="px-4 py-2 rounded-md block bg-gradient-to-r to-cyan-400 from-blue-500  text-gray-200 font-semibold text-lg uppercase mx-auto relative active:top-[2px]">
          Submit
        </button>
      </form>
      <ToastContainer />
    </>
  );
}
