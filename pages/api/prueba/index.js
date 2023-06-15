import prisma from "@/prisma/client";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const {
      name,
      lastname,
      password,
      image,
      birth,
      country,
      working,
      cv,
      email,
      enfoque1,
      enfoque2,
      aboutme,
      experience,
      titles,
      knowledges,
    } = req.body;

    const newUser = await prisma.user.create({
      data: {
        name,
        lastname,
        password,
        image,
        birth,
        country,
        working,
        cv,
        email,
        enfoque1,
        enfoque2,
        aboutme,
        experience,
        titles,
        knowledges,
      },
    });

    return res.status(201).json(newUser);
  }

  if (req.method === "GET") {
    const allUsers = await prisma.user.findMany();
  }
}
