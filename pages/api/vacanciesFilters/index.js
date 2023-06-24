import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { programming_Languajes, seniority, specialization, workday } =
    req.query;
  console.log("Incoming query parameters: ", req.query);
  if (req.method === "GET") {
    try {
      const vacancies = await getVacancies(
        programming_Languajes,
        seniority,
        specialization,
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
  programming_Languajes,
  seniority,
  specialization,
  workday
) {
  let where = {};

  if (programming_Languajes) {
    where.programming_Languages = {
      hasSome: programming_Languajes.split(","),
    };
  }
  if (seniority) {
    where.seniority = {
      equals: seniority,
    };
  }

  if (specialization) {
    where.specialization = {
      equals: specialization,
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

  console.log(programming_Languajes, seniority, specialization, workday);
  console.log("Query result: ", vacancies);

  return vacancies;
}
