import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message, services } = body;

    // Validate required fields
    if (!name || !email || !subject) {
      return NextResponse.json({ error: "Name, email, and subject are required" }, { status: 400 });
    }

    // Log environment variables (remove in production)
    console.log("SMTP Configuration:", {
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      user: process.env.SMTP_USER ? "Set" : "Not Set",
      password: process.env.SMTP_PASSWORD ? "Set" : "Not Set",
      from: process.env.SMTP_FROM,
      adminEmail: process.env.ADMIN_EMAIL,
    });

    // Create a transporter using your email service credentials
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_PORT === "465", // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Verify SMTP connection configuration
    try {
      await transporter.verify();
      console.log("SMTP connection verified successfully");
    } catch (error) {
      console.error("SMTP connection verification failed:", error);
      return NextResponse.json({ error: "Failed to connect to email server" }, { status: 500 });
    }

    // Email to admin
    try {
      await transporter.sendMail({
        from: process.env.SMTP_FROM,
        to: process.env.ADMIN_EMAIL,
        subject: `New Contact Form Submission: ${subject}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong> ${message || "No message provided"}</p>
          <p><strong>Services Interested In:</strong> ${services?.join(", ") || "None"}</p>
        `,
      });
      console.log("Admin notification email sent successfully");
    } catch (error) {
      console.error("Failed to send admin notification:", error);
      return NextResponse.json({ error: "Failed to send admin notification" }, { status: 500 });
    }

    // Confirmation email to user
    try {
      await transporter.sendMail({
        from: process.env.SMTP_FROM,
        to: email,
        subject: "Thank you for contacting Arreglio",
        html: `
          <h2>Thank you for contacting Arreglio</h2>
          <p>Dear ${name},</p>
          <p>We have received your message and will get back to you shortly.</p>
          <p>Here's a copy of your message:</p>
          <p><strong>Subject:</strong> ${subject}</p>
          ${message ? `<p><strong>Message:</strong> ${message}</p>` : ""}
          <p>Best regards,<br>The Arreglio Team</p>
        `,
      });
      console.log("User confirmation email sent successfully");
    } catch (error) {
      console.error("Failed to send user confirmation:", error);
      // Don't return error here as admin notification was successful
      console.log("Continuing despite user confirmation failure");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json({ error: "Failed to process your request" }, { status: 500 });
  }
}
