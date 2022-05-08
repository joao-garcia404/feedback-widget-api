import nodemailer from "nodemailer";

import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "21f56de275ff6d",
    pass: "eecd994956811a",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ body, subject }: SendMailData) {
    await transport.sendMail({
      from: "Joao Garcia <jvdasilvaeirasgarcia@gmail.com>",
      to: "Joao Garcia <jvdasilvaeirasgarcia@gmail.com>",
      subject,
      html: body,
    });
  }
}
