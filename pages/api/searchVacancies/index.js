import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {

      const query = req.query.q;

      const vacancies = await prisma.vacancy.findMany();

      const searchedVacancies = [];

      let companyById = await prisma.company.findUnique({
        where: {
          id: query
        }
      })

      vacancies.forEach(vacancy => {
        if (vacancy.isActive === true) {


          if (
            vacancy.name_Vacancy.toUpperCase().includes(query.toUpperCase()) ||
            vacancy.name_Vacancy.toLowerCase().includes(query.toLowerCase()) ||
            companyById && companyById.name.toUpperCase().includes(query.toUpperCase()) ||
            companyById && companyById.name.toLowerCase().includes(query.toLowerCase()) ||
            vacancy.programming_Languages.includes(query.toUpperCase()) ||
            vacancy.programming_Languages.includes(query.toLowerCase()) ||
            vacancy.seniority.toUpperCase().includes(query.toUpperCase()) ||
            vacancy.seniority.toLowerCase().includes(query.toLowerCase()) ||
            vacancy.years_of_experience.toString().includes(query) ||
            vacancy.workday.toUpperCase().includes(query.toUpperCase()) ||
            vacancy.workday.toLowerCase().includes(query.toLowerCase()) ||
            vacancy.salary.toString().includes(query)
          )
            searchedVacancies.push(vacancy)
        }
      })

      console.log(searchedVacancies);

      res.status(200).json(searchedVacancies);
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
