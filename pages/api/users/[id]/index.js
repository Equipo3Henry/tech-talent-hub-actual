import prisma from "@/prisma/client";

export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method === "GET") {
    try {
      const user = await prisma.user.findUnique({
        where: {
          id: id,
        },
      });
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: "Error retrieving user." });
    }
  } else if (req.method === "PATCH") {
    try {
      const {
        cv,
        name,
        lastname,
        birth,
        aboutme,
        working,
        country,
        degree,
        languages,
        progLanguages,
        seniority,
        softSkills,
        specialization,
        isActive,
      } = req.body;
      const user = await prisma.user.update({
        where: { id: id },
        data: {
          cv: cv,
          name: name,
          lastname: lastname,
          birth: birth,
          aboutme: aboutme,
          working: working,
          country: country,
          degree: degree,
          languages: languages,
          progLanguages: progLanguages,
          seniority: seniority,
          softSkills: softSkills,
          specialization: specialization,
          isActive: isActive,
        },
      });
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: "Error updating user." });
    }
  } else {
    res.status(400).json({ error: "Invalid method." });
  }
}
