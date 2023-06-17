import prisma from "@/prisma/client";

export default async function handler(req, res) {
  const { progLanguage } = req.query;

  if (req.method === "GET") {
    try {
      const users = await prisma.user.findMany();

      const usersByProgLanguages = users.filter((user) => {
        return user.progLanguages.includes(progLanguage);
      });

      res.status(200).json(usersByProgLanguages);
    } catch (error) {
      res.status(500).json({ error: "Error retrieving user." });
    }
  } else {
    res.status(400).json({ error: "Invalid method." });
  }
}
