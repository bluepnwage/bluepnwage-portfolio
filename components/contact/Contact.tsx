import type { ReactNode } from "react";
import { At, BrandLinkedin, BrandGithub } from "tabler-icons-react";
import { ContactForm } from "./ContactForm";

export function Contact() {
  return (
    <section className="mb-20 flex-col flex items-center">
      <h2 className="font-bold text-3xl mb-5">Let&apos;s get in touch</h2>
      <div className="p-2 flex flex-col md:flex-row w-11/12 md:w-3/5 bg-gray-50 text-gray-100 dark:bg-zinc-800 rounded-lg">
        <div className="basis-2/5 rounded-lg bg-gradient-to-br p-4 from-blue-500 to-cyan-500 grow">
          <h3 className="font-bold text-2xl text-center mb-4">Contact Information</h3>
          <div className="space-y-4">
            <ContactInfo label="Email" contact="a.carty2555@gmail.com" icon={<At aria-hidden />} />
            <ContactInfo label="Github" contact="bluepnwage" icon={<BrandGithub aria-hidden />} />
            <ContactInfo label="LinkedIn" contact="Agis Carty" icon={<BrandLinkedin aria-hidden />} />
          </div>
        </div>
        <div className="basis-3/5 text-gray-900 dark:text-gray-100 p-4 grow">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

interface PropTypes {
  label: string;
  icon: ReactNode;
  contact: string;
}

function ContactInfo({ label, contact, icon }: PropTypes) {
  return (
    <div className="flex gap-2 items-center">
      {icon}
      <div>
        <span className="text-sm block">{label}</span>
        <a href={"#"} rel="noreferrer" target={"_blank"} className="font-semibold">
          {contact}
        </a>
      </div>
    </div>
  );
}
