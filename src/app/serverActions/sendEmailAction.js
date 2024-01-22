"use server";

import { createTransport } from "nodemailer";

const sendEmail = async (formData) => {
  try {
    // Get the values in the <form>'s input fields
    // NOTE: Here, we used the 'name' attribute to get the values of the fields.
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    if (name && email && message) {
      const transport = createTransport({
        service: "gmail",
        auth: {
          user: "tropyganty0@gmail.com",
          pass: process.env.TROPYGANTY0_APP_PASSWORD,
        },
      });

      const mailOptions = {
        email,
        to: "udohabasi.dev@gmail.com",
        subject: "Contact from Portfolio Site",
        text: `
        Name: ${name}
        From: ${email}
        
        Message: ${message}
        `,
      };

      // Using this makes our frontend wait to get a returned value from the backend.
      let isSent = false;

      // So, we used .then() below to cause the async-await operation to be completed before returning a result to the frontend.
      await transport
        .sendMail(mailOptions)
        .then((info) => {
          isSent = true;
          // console.log("Email sent:", info.messageId);
        })
        .catch((error) => {
          // console.log("Email not sent:", error);
        });

      if (isSent) {
        return { sent: true };
      } else {
        return { sent: false };
      }
    } else {
      throw new Error("Invalid data provided");
    }
  } catch (err) {
    return { sent: false };
  }
};

export default sendEmail;
