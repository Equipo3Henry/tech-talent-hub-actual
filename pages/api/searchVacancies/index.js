import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "GET") {
    const query = req.query.q;
    
    const vacancies = await prisma.vacancy.findMany();
    
    const searchedVacancies = [];

    vacancies.forEach(vacancy => {
      if (vacancy.isActive === true){
        
        if (
          vacancy.name_Vacancy.includes(query.toUpperCase()) ||
          vacancy.name_Vacancy.includes(query.toLowerCase()) ||
          vacancy.company.includes(query.toUpperCase()) ||
          vacancy.company.includes(query.toLowerCase()) ||
          vacancy.programming_Languages.includes(query.toUpperCase()) ||
          vacancy.programming_Languages.includes(query.toUpperCase()) ||
          vacancy.seniority.includes(query.toLowerCase()) ||
          vacancy.seniority.includes(query.toLowerCase()) ||
          vacancy.years_of_experience.toString().includes(query) ||
          vacancy.years_of_experience.toString().includes(query) ||
          vacancy.workday.includes(query.toLowerCase()) ||
          vacancy.workday.includes(query.toLowerCase()) ||
          vacancy.salary.toString().includes(query) ||
          vacancy.salary.toString().includes(query) 
          )
          searchedVacancies.push(vacancy)
        }
        })

        console.log(searchedVacancies);
      
      res.status(200).json(searchedVacancies);
    } else {
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
