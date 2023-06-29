import nodemailer from "nodemailer";

export default async function handler(req, res) {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NEXT_PUBLIC_SMTP_MAIL_TO,
      pass: process.env.NEXT_PUBLIC_SMTP_PASS,
    },
  });

  const mailOptions = {
    from: process.env.NEXT_PUBLIC_SMTP_MAIL_TO,
    to: email,
    subject: "Pyament Successfull Done + Thank you for your order " + name,
    text: message,
  };

  await transporter.sendMail(mailOptions);

  res.status(200).json({
    status: "success",
    message: "Message sent successfully",
  });
}
