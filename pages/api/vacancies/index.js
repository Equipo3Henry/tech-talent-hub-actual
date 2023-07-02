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
        status,
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
            status,
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
        res.status(500).json({ error: error.message });
      }
    }
  }
  if (req.method === "GET") {
    const { companyId, orderBySalary, orderDirection } = req.query;
    try {
      const whereClause = companyId ? { companyId: Number(companyId) } : {}; // If companyId is provided, add it to where clause
      const vacancies = await prisma.vacancy.findMany({
        where: whereClause,
        orderBy:
          orderBySalary === "true"
            ? { salary: orderDirection === "asc" ? "asc" : "desc" }
            : undefined,
        include: {
          company: true,
          applicants: {
            where: {
              isActive: true,
            },
          },
        },
      });

      return res.status(200).json(vacancies);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message }); // Only return the error message
    }
  }
}
