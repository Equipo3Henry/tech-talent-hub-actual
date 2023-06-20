import prisma from "@/prisma/client";

export default async function handler(req, res) {
  if (req.method === "POST") {
    if (Array.isArray(req.body)) {
      // Your code for multiple vacancies
    } else {
      const {
        name_Vacancy,
        companyId, // assuming you're receiving company's ID
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
            company: {
              connect: {
                id: companyId, // connecting to existing company by its ID
              },
            },
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
      const vacancies = await prisma.vacancy.findMany({
        include: {
          company: true, // Include company details in the response
          applicants: {
            select: {
              id: true, // Only select the id field from applicants
            },
          },
        },
      });

      return res.status(200).json(vacancies);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error getting vacancies" });
    }
  }
}
