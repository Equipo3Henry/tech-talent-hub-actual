import prisma from "@/prisma/client";

export default async function handler(req, res) {
  if (req.method === "POST") {
    if (Array.isArray(req.body)) {
      const vacancies = req.body;

      try {
        await prisma.vacancy.createMany({
          data: vacancies,
        });

        return res
          .status(201)
          .json({ message: "Vacancies created successfully" });
      } catch (error) {
        return res.status(400).json({ error: error.message });
      }
    } else {
      const {
        name_Vacancy,
        company,
        logo_Company,
        programming_Languages,
        seniority,
        years_of_experience,
        description,
        workday,
        salary,
        date_Hire,
        isActive,
        Relevance,
      } = req.body;

      try {
        const newVacancy = await prisma.vacancy.create({
          data: {
            name_Vacancy,
            company,
            logo_Company,
            programming_Languages,
            seniority,
            years_of_experience,
            description,
            workday,
            salary,
            date_Hire,
            isActive,
            Relevance,
          },
        });

        return res.status(201).json(newVacancy);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error creating vacancy" });
      }
    }
  }

  if (req.method === "GET") {
    try {
      const vacancies = await prisma.vacancy.findMany();

      return res.status(200).json(vacancies);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error getting vacancies" });
    }
  }
}
