const nodemailer = require("nodemailer");

exports.sendMail = async ({ name, email, subject, message }) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // must be a Gmail App Password
      },
    });

    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER, // must match the authenticated user
      to: process.env.EMAIL_RECEIVER,
      subject: subject || "New Contact Form Submission",
      text: `
        Name: ${name}
        Email: ${email}
        Message:
        ${message}
      `,
      replyTo: email,
    });

    console.log("✅ Email sent successfully:", info.response);
    return info;
  } catch (err) {
    console.error("❌ Failed to send email:", err);
    throw err;
  }
};
