import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "GET") {
    const query = req.query.q;
    const where = {
      OR: [
        { username: { contains: query } },
        { name: { contains: query } },
        { lastname: { contains: query } },
        { country: { contains: query } },
        { email: { contains: query } },
        { degree: { contains: query } },
        { languages: { has: query } },
        { progLanguages: { has: query } },
        { seniority: { contains: query } },
        { softSkills: { has: query } },
      ],
    };

    if (
      [
        "FRONTEND",
        "BACKEND",
        "DATASCIENTIST",
        "FULLSTACK",
        "AI_ENGINEER",
      ].includes(query.toUpperCase())
    ) {
      where.OR.push({ specialization: { equals: query.toUpperCase() } });
    }

    const results = await prisma.user.findMany({ where });

    res.status(200).json(results);
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
