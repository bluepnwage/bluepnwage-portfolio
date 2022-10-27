import type { ReactNode } from "react";
import { At, BrandLinkedin, BrandGithub } from "tabler-icons-react";
import { ContactForm } from "./ContactForm";
export function Contact() {
  return (
    <section className="mb-20">
      <h2 className="font-bold text-3xl mb-5">Let&apos;s get in touch</h2>
      <div className="p-2 flex bg-zinc-800 rounded-md">
        <div className="basis-2/5 rounded-md bg-gradient-to-br p-4 from-blue-500 to-cyan-500 grow">
          <h3 className="font-bold text-2xl text-center mb-4">Contact Information</h3>
          <div className="space-y-4">
            <ContactInfo label="Email" contact="a.carty2555@gmail.com" icon={<At aria-hidden />} />
            <ContactInfo label="Github" contact="bluepnwage" icon={<BrandGithub aria-hidden />} />
            <ContactInfo label="LinkedIn" contact="Agis Carty" icon={<BrandLinkedin aria-hidden />} />
          </div>
        </div>
        <div className="basis-3/5 p-4 grow">
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
        <a href={"#"} target={"_blank"} className="font-semibold">
          {contact}
        </a>
      </div>
    </div>
  );
}
