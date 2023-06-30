import nodemailer from "nodemailer";

export default async function handler(req, res) {
  const { name, email, paymentId, paymentAmount, paymentDate, paymentProduct } =
    req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NEXT_PUBLIC_SMTP_MAIL_TO,
      pass: process.env.NEXT_PUBLIC_SMTP_PASS,
    },
  });

  const mailOptions = {
    from: `${process.env.NEXT_PUBLIC_SMTP_MAIL_TO}`,
    to: email,
    subject: "Payment Successfull Done + Thank you for your order " + name,
    text: `Name: ${name}\nEmail: ${email}\n PaymentId: ${paymentId}\n PaymentAmount: ${paymentAmount}`,
    html: `<div style="background-color: #f9fafb;width: 600px;">
         <h1 style="text-align:center;font-size:18px;font-weight:700;padding-top:15px">Payment  Info </h1>
         <div style="display:flex;justify-content:center; margin-left:100px">
         <div style="text-align:start;">
         <p><strong>Name: </strong></p>
         <p><strong>Email: </strong></p>
         <p><strong>PaymentId: </strong></p>
         <p><strong>PaymentAmount: </strong></p>
          <p><strong>PaymentDate: </strong></p>
          <p><strong>PaymentProduct: </strong></p>

         </div>
         <div style="text-align:end;">
         <p>${name}</p>
         <p>${email}</p>
         <p>${paymentId}</p>
         <p>${paymentAmount}</p>
          <p>${paymentDate}</p>
          <p>${paymentProduct}</p>

         </div>
         </div>
        </div>
            `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res
      .status(200)
      .json({ message: "Payment Done successful check your mailbox" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Payment failed" });
  }
}
