import prisma from "@/prisma/client";
import axios from "axios";
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
      const {
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
        console.log(userEmail);

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
        console.log(mail);
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
