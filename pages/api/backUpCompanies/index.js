import prisma from "@/prisma/client";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const companies = await prisma.company.findMany({
        select: {
          name: true,
          email: true,
          logo_Company: true,
          description: true,
          type: true,
          country: true,
          vacancies: true,
          isActive: true,
          isPremium: true,
          jobs: true,
          employes: true,
          googleAuth: true,
        },
      });

      res.status(200).json({ companies });
    } catch (e) {
      console.error(e);
      res
        .status(500)
        .json({ error: "Hubo un problema obteniendo las compañias." });
    }
  } else {
    res.status(405).json({ error: "Método no permitido." });
  }
}
