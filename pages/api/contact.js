import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.NEXT_PUBLIC_SMTP_MAIL_TO,
      pass: process.env.NEXT_PUBLIC_SMTP_PASS,
    },
  });

  const mailOptions = {
    from: `${process.env.NEXT_PUBLIC_SMTP_MAIL_TO}`,
    to: email,
    subject: 'Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    html: `<div style="background-color: #f9fafb;width: 600px;">
         <h1 style="text-align:center;font-size:18px;font-weight:700;padding-top:15px">Contact us Information</h1>
         <div style="display:flex;justify-content:center; margin-left:100px">
         <div style="text-align:start;">
         <p><strong>Name: </strong></p>
         <p><strong>Email: </strong></p>
         <p><strong>Message: </strong></p>
         </div>
         <div style="text-align:end;">
         <p>${name}</p>
         <p>${email}</p>
         <p>${message}</p>
         </div>
         </div>
            </div>
            `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Form submission successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Form submission failed' });
  }
}
