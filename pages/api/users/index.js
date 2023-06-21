import prisma from "@/prisma/client";
import { encrypt } from "@/src/app/helpers/handleBcrypt";
import transporter from "../sendEmail/index";

export default async function handler(req, res) {
  if (req.method === "POST") {
    if (Array.isArray(req.body)) {
      const users = req.body;

      try {
        await prisma.user.createMany({
          data: users,
        });

        return res.status(201).json({ message: "Users created successfully" });
      } catch (error) {
        return res.status(400).json({ error: error.message });
      }
    } else {
      let {
        username,
        name,
        lastname,
        birth,
        aboutMe,
        working,
        country,
        email,
        password,
        degree,
        languages,
        progLanguages,
        profile_picture,
        seniority,
        cv,
        softSkills,
        specialization,
        recruiter,
      } = req.body;

      const userEmail = email;

      password = await encrypt(password)

      console.log(password);
      try {

        const newUser = await prisma.user.create({
          data: {
            username,
            name,
            lastname,
            birth,
            aboutMe,
            working,
            country,
            email,
            password,
            degree,
            languages,
            progLanguages,
            profile_picture,
            seniority,
            cv,
            softSkills,
            specialization,
            recruiter,
          },
        });

        await transporter.verify();
        const mail = {
          from: 'equipo3.37a@gmail.com',
          to: userEmail,
          subject: "Registro exitoso",
          html: `
          <p style="color: black">
          Mail de prueba a ${email}
          </p>
          `,
        };
        await transporter.sendMail(mail);
        // res.status(200).json({
        //   Message: `Se ha enviado un correo electrónico de prueba a ${email} `,
        // });

        return res.status(201).json(newUser);
      } catch (error) {
        return res.status(400).json({ error: error.message });
      }
    }
  }

  if (req.method === "GET") {
    const allUsers = await prisma.user.findMany();

    return res.status(200).json(allUsers);
  }
}
