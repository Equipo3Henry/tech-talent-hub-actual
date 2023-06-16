import prisma from "@/prisma/client";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const {
      name_Vacancy,
      company,
      logo_Company,
      programming_Langueges,
      seniority,
      years_of_experience,
      description,
      workday,
      // salary,
      date_Hire,
      isActive,
      Relevance,
    } = req.body;

    const newVacancy = await prisma.Vacancy.create({
      data: {
        name_Vacancy,
        company,
        logo_Company,
        programming_Langueges,
        seniority,
        years_of_experience,
        description,
        workday,
        // salary,
        date_Hire,
        isActive,
        Relevance,
      },
    });

    return res.status(201).json(newVacancy);
  }

  if (req.method === "GET") {
    const allVacancies = await prisma.Vacancy.findMany();

    return res.status(200).json(allVacancies);
  }
}
