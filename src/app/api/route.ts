import { zfd } from "zod-form-data";
import { z } from "zod";
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

const formSchema = zfd.formData({
  email: zfd.text(z.string().email().nonempty("Votre email est requis")),
  subject: zfd.text(
    z.string().nonempty("Veuillez renseigner l'objet de votre message")
  ),
  title: zfd.text(
    z.string().nonempty("Veuillez renseigner la raison de votre message")
  ),
  message: zfd.text(z.string().nonempty("Votre message ne peut pas être vide")),
});

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const validatedData = formSchema.parse(formData);

    const transporter = nodemailer.createTransport({
      service: "SendGrid",
      auth: {
        user: "apikey",
        pass: process.env.SENDGRID_API_KEY,
      },
    });

    try {
      await transporter.sendMail({
        from: process.env.CONTACT_MAIL,
        replyTo: validatedData.email,
        to: process.env.CONTACT_MAIL,
        subject: validatedData.subject,
        text: validatedData.title + "\n\n" + validatedData.message,
        html: `
          <p><strong>Raison :</strong> ${validatedData.title}</p>
          <p><strong>Message :</strong><br>${validatedData.message}</p>
          <p><strong>Email de l'utilisateur :</strong> ${validatedData.email}</p>
        `,
      });
    } catch (err) {
      console.error("Error sending email:", err);
    }

    return NextResponse.json({
      status: "success",
      data: validatedData,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      //Validation error
      return NextResponse.json(
        {
          status: "error",
          errors: error.errors,
        },
        {
          status: 400,
        }
      );
    }
    console.log(error);
    //Serveur error
    return NextResponse.json(
      {
        status: error,
        message: "Serveur error",
      },
      {
        status: 500,
      }
    );
  }
}
