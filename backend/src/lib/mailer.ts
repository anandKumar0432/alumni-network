
import nodemailer from "nodemailer"

export const sendVerificationEmail = async (email : string, token : string) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const verifyUrl = `${process.env.FRONTEND_URL}/verify-email?token=${token}`;

  await transporter.sendMail({
    from: '"Alumni Network" <no-reply@alumni.com>',
    to: email,
    subject: "Verify your email",
    html: `
      <h3>Email Verification</h3>
      <p>Click the link below to verify your email:</p>
      <a href="${verifyUrl}">Verify Email</a>
    `
  });
};
