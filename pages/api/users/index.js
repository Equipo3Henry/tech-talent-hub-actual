import prisma from "@/prisma/client";

export default async function handler(req, res) {
  if (req.method === "POST") {
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

    return res.status(201).json(newUser);
  }

  if (req.method === "GET") {
    const allUsers = await prisma.user.findMany();

    return res.status(200).json(allUsers);
  }
}
