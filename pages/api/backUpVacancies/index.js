import prisma from "@/prisma/client";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const vacancies = await prisma.vacancy.findMany({
        select: {
          name_Vacancy: true,
          logo_Company: true,
          programming_Languages: true,
          seniority: true,
          years_of_experience: true,
          description: true,
          workday: true,
          salary: true,
          date_Hire: true,
          isActive: true,
        },
      });
      res.status(200).json({ vacancies });
    } catch (e) {
      console.error(e);
      res
        .status(500)
        .json({ error: "Hubo un problema obteniendo las vacantes." });
    }
  } else {
    res.status(405).json({ error: "Método no permitido." });
  }
}
