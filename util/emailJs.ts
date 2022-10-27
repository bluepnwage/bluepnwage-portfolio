import emailJS from "@emailjs/browser";
import { EmailForm } from "interfaces";

const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string;
const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICEID as string;
const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATEID as string;

emailJS.init(publicKey);

export async function sendEmail({ email, message, name, subject }: EmailForm) {
  try {
    const response = await emailJS.send(serviceID, templateID, {
      name,
      subject,
      message,
      email
    });
    console.log(response.status);
    console.log(response);
    if (response.status >= 400) throw new Error("Email failed to send. Please try again later");
    return { isSuccessful: true, message: "Email sent!" };
  } catch (error) {
    if (error instanceof Error) {
      return { isSuccessful: false, message: error.message };
    }
  }
}
