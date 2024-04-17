
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.NEXT_PUBLIC_EMAIL_USERNAME,
    pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD,
  },
});

export async function Sendmail(email, name, numtelephone, nbcommands) {
  try {
    const info = await transporter.sendMail({
      from: `"Kall Center Website" ${process.env.NEXT_PUBLIC_EMAIL_USERNAME}`,
      to: 'amaaliousama771@gmail.com',  
      subject: ' Kall Center',
      html: `
        <p>name : ${name}</p>
        <p>email : ${email}</p>
        <p>telephone : ${numtelephone}</p>
        <p>nombre des commandes : ${nbcommands}</p>
      `,
    });
    return { ok: true };
  } catch (e) {
    return { ok: false, error: e.message };
  }
}