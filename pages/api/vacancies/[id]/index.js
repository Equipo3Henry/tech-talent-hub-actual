import prisma from "@/prisma/client";

export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method === "GET") {
    try {
      const Vacancy = await prisma.Vacancy.findUnique({
        where: {
          id: id,
        },
      });
      return res.status(200).json(Vacancy);
    } catch (error) {
      res.status(500).json({ error: "Error retrieving user." });
    }
  } else {
    return res.status(400).json({ error: "Invalid method." });
  }
}
