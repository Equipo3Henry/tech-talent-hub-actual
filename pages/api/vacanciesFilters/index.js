import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { programming_Languages, seniority, name_Vacancy, workday } = req.query;
  console.log("Incoming query parameters: ", req.query);
  if (req.method === "GET") {
    try {
      const vacancies = await getVacancies(
        programming_Languages,
        seniority,
        name_Vacancy,
        workday
      );
      console.log("Vacancies found: ", vacancies);
      res.status(200).json(vacancies);
    } catch (error) {
      console.error("Error while retrieving vacancies: ", error);
      res.status(500).json({ error: "Error retrieving vacancies." });
    }
  } else {
    res.status(400).json({ error: "Invalid method." });
  }
}

async function getVacancies(
  programming_Languages,
  seniority,
  name_Vacancy,
  workday
) {
  let where = {};

  if (programming_Languages) {
    where.programming_Languages = {
      hasSome: programming_Languages.split(","),
    };
  }
  if (seniority) {
    where.seniority = {
      equals: seniority,
    };
  }

  if (name_Vacancy) {
    where.name_Vacancy = {
      equals: name_Vacancy,
    };
  }

  if (workday) {
    where.workday = {
      equals: workday,
    };
  }

  console.log("Query condition: ", where);

  const vacancies = await prisma.vacancy.findMany({
    where,
  });

  console.log(programming_Languages, seniority, name_Vacancy, workday);
  console.log("Query result: ", vacancies);

  return vacancies;
}
