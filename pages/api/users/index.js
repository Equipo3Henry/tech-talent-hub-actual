import prisma from "@/prisma/client";
import transporter from "../sendEmail/index";
import { encrypt } from "../helpers/handleBcrypt";

export default async function handler(req, res) {
  if (req.method === "POST") {
    if (Array.isArray(req.body)) {
      const dataUsers = req.body;
      const users = await dataUsers.map((user) => {
        user.password = encrypt(user.password);
        return user;
      });
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
        aboutme,
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
        isPremium,
      } = req.body;

      const userEmail = email;
      const encryptPass = await encrypt(password);

      try {
        const newUser = await prisma.user.create({
          data: {
            username,
            name,
            lastname,
            birth,
            aboutme,
            working,
            country,
            email,
            password: encryptPass,
            degree,
            languages,
            progLanguages,
            profile_picture,
            seniority,
            cv,
            softSkills,
            specialization,
            recruiter,
            isPremium,
          },
        });

        await transporter.verify();
        const mail = {
          from: "equipo3.37a@gmail.com",
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
    const { includeInactive } = req.query;

    const includeInactiveBool = includeInactive
      ? includeInactive.toLowerCase() === "true"
      : false;

    try {
      const allUsers = await prisma.user.findMany({
        where: {
          superAdmin: false, // solo obtener usuarios que no sean superAdmin
          ...(includeInactiveBool
            ? {}
            : {
                isActive: {
                  equals: true,
                },
              }),
        },
        orderBy: [
          { isPremium: "desc" },
          // otros campos para ordenar (si los hay)
        ],
      });

      return res.status(200).json(allUsers);
    } catch (error) {
      console.error("Error retrieving users:", error);
      return res.status(500).json({ error: error.message });
    }
  }
}
