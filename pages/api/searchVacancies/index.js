import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {

      const query = req.query.q;
      const uuidRegex = /^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-4[a-fA-F0-9]{3}-[89aAbB][a-fA-F0-9]{3}-[a-fA-F0-9]{12}$/;
      const vacancies = await prisma.vacancy.findMany({
        where: {isActive: true},
        include: {
          company: true,
          applicants: true,
        },
      });
      

      if(!query) return res.status(200).json(vacancies);

      if(uuidRegex.test(query)) {
        const companyById = vacancies.find((vacancy) => vacancy.id === query);  
        return res.status(200).json(companyById);
      }

      else{
        const searchedVacancies = vacancies.filter((vacancy) => {
          return (
            vacancy.name_Vacancy.toUpperCase().includes(query.toUpperCase()) ||
            vacancy.name_Vacancy.toLowerCase().includes(query.toLowerCase()) ||
            vacancy.programming_Languages.includes(query.toUpperCase()) ||
            vacancy.programming_Languages.includes(query.toLowerCase()) ||
            vacancy.seniority.toUpperCase().includes(query.toUpperCase()) ||
            vacancy.seniority.toLowerCase().includes(query.toLowerCase()) ||
            vacancy.years_of_experience.toString().includes(query) ||
            vacancy.workday.toUpperCase().includes(query.toUpperCase()) ||
            vacancy.workday.toLowerCase().includes(query.toLowerCase()) ||
            vacancy.salary.toString().includes(query)
          );
        });
        return res.status(200).json(searchedVacancies);
      } 
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
