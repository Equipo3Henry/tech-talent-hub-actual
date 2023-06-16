import prisma from "@/prisma/client";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const {
      username,
      name,
      lastName,
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
      recruiter,
    } = req.body;

    const newUser = await prisma.user.create({
      data: {
        username,
        name,
        lastName,
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
        recruiter,
      },
    });

    return res.status(201).json(newUser);
  }

  if (req.method === "GET") {
    const allUsers = await prisma.user.findMany();

    return res.status(200).json(allUsers)
  }
}
