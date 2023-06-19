import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "GET") {
    const query = req.query.q;
    
    const users = await prisma.user.findMany();
    
    const searchedUsers = [];

    users.forEach(user => {
      if (!user.seniority) user.seniority = "@"; // pongo un string cualquiera para que
      if (!user.degree) user.degree = "@"; // se pueda buscar por string y no se encuentre
        if (
          user.username.includes(query.toUpperCase()) ||
          user.username.includes(query.toLowerCase()) ||
          user.name.includes(query.toUpperCase()) ||
          user.name.includes(query.toLowerCase()) ||
          user.lastname.includes(query.toUpperCase()) ||
          user.lastname.includes(query.toLowerCase()) ||
          user.country.includes(query.toUpperCase()) ||
          user.country.includes(query.toLowerCase()) ||
          user.degree.includes(query.toUpperCase()) ||
          user.degree.includes(query.toLowerCase()) ||
          user.languages.includes(query.toUpperCase()) ||
          user.languages.includes(query.toLowerCase()) ||
          user.progLanguages.includes(query.toUpperCase()) ||
          user.progLanguages.includes(query.toLowerCase()) ||
          user.seniority.includes(query.toUpperCase()) ||
          user.seniority.includes(query.toLowerCase()) ||
          user.softSkills.includes(query.toUpperCase()) ||
          user.softSkills.includes(query.toLowerCase()) ||
          user.specialization.includes(query.toUpperCase()) ||
          user.specialization.includes(query.toLowerCase())
          )
          searchedUsers.push(user)
        })
        // const where = {
        //   OR: [
        //     { username: { contains: query.toLowerCase() } },
        //     { name: { contains: query } },
        //     { lastname: { contains: query } },
        //     { country: { contains: query } },
        //     { email: { contains: query } },
        //     { degree: { contains: query } },
        //     { languages: { has: query } },
        //     { progLanguages: { has: query } },
        //     { seniority: { contains: query } },
        //     { softSkills: { has: query } },
        //   ],
        // };
        
        // if (
          //   [
            //     "FRONTEND",
    //     "BACKEND",
    //     "DATASCIENTIST",
    //     "FULLSTACK",
    //     "AI_ENGINEER",
    //   ].includes(query.toUpperCase())
    // ) {
      //   where.OR.push({ specialization: { equals: query.toUpperCase() } });
      // }
      
      // const results = await prisma.user.findMany({ where });
      
      res.status(200).json(searchedUsers);
    } else {
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
