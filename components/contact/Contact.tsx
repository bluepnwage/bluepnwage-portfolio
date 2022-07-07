import { Button, Group, LoadingOverlay, Paper, SimpleGrid, Text, Textarea, TextInput } from "@mantine/core";
import { ContactIconsList } from "./ContactIconsList";
import { useStyles } from "./styles";
import { FormEvent, useState } from "react";
import { EmailForm } from "interfaces";
import { showNotification } from "@mantine/notifications";

export default function Contact() {
  const { classes } = useStyles();
  const [form, setForm] = useState<EmailForm>({ email: "", message: "", name: "", subject: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = ({ currentTarget }: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = currentTarget;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formReset: EmailForm = { email: "", message: "", name: "", subject: "" };
    setLoading(true);
    try {
      const { sendEmail } = await import("util/emailJs");

      const status = await sendEmail(form);
      if (!status.isSuccessful) throw new Error(status.message as string);

      setForm(formReset);

      showNotification({
        title: "Email successfully sent!",
        message: "I will be getting in touch with you as soon as possible",
        color: "green"
      });
    } catch (error) {
      console.log(error);

      showNotification({
        title: "Email failed to send",
        message: "something",
        color: "red"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Paper id="contact" mb={85} className={classes.contactContainer} radius="lg">
      <LoadingOverlay visible={loading} />
      <div className={classes.wrapper}>
        <div className={classes.contacts}>
          <Text size="lg" weight={700} className={classes.title} sx={{ color: "#fff" }}>
            Contact information
          </Text>
          <ContactIconsList variant="white" />
        </div>

        <form className={classes.form} onSubmit={handleSubmit}>
          <Text size="lg" weight={700} className={classes.title}>
            Get in touch
          </Text>

          <div className={classes.fields}>
            <SimpleGrid cols={2} breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
              <TextInput
                value={form.name}
                onChange={handleChange}
                name="name"
                label="Your name"
                placeholder="Your name"
              />
              <TextInput
                value={form.email}
                onChange={handleChange}
                label="Your email"
                name="email"
                placeholder="hello@mantine.dev"
                required
              />
            </SimpleGrid>

            <TextInput
              value={form.subject}
              onChange={handleChange}
              mt="md"
              name="subject"
              label="Subject"
              placeholder="Subject"
              required
            />

            <Textarea
              onChange={handleChange}
              value={form.message}
              name="message"
              mt="md"
              label="Your message"
              placeholder="Please include all relevant information"
              minRows={3}
            />

            <Group position="right" mt="md">
              <Button type="submit" className={classes.control}>
                Send message
              </Button>
            </Group>
          </div>
        </form>
      </div>
    </Paper>
  );
}
