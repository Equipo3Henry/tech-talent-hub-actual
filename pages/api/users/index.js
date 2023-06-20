import prisma from "@/prisma/client";
import axios from "axios";

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

        try {
          await axios.post("/api/sendEmail/signup", { email: newUser.email });
        } catch (emailError) {
          console.error(`Failed to send email: ${emailError}`);
          // Consider how you want to handle this case. Should the original request fail?
          // If so, uncomment the next line.
          // throw emailError;
        }

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
