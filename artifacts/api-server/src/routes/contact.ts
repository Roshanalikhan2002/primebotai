import { Router, type IRouter } from "express";
import nodemailer from "nodemailer";

const router: IRouter = Router();

// Configure the email transporter
// You should set these environment variables in your local environment
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER || "your-email@gmail.com",
    pass: process.env.EMAIL_PASS || "your-app-password",
  },
});

router.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    // Send the email
    const mailOptions = {
      from: email, // User's email
      to: "Contact.primebotai@gmail.com",
      subject: `New Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #00f0ff;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; white-space: pre-wrap;">${message}</div>
          <hr style="margin-top: 20px; border: none; border-top: 1px solid #eee;" />
          <p style="font-size: 12px; color: #888;">Submitted via PrimeBot AI website.</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log(`Contact form email sent from ${email} to Contact.primebotai@gmail.com`);
    
    return res.status(200).json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    // Even if it fails, we might want to log it in the console for the user to see
    return res.status(500).json({ 
      error: "Failed to send email", 
      details: "Make sure you have set up EMAIL_USER and EMAIL_PASS environment variables." 
    });
  }
});

export default router;
