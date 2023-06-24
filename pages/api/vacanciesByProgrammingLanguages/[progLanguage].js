import prisma from "@/prisma/client";

export default async function handler(req, res) {
    
    const { progLanguage } = req.query;

    if (req.method === "GET") {
        try {
            const vacancies = await prisma.vacancy.findMany();

            const vacanciesByProgLanguages = vacancies.filter( user => {
               return user.programming_Languages.includes(progLanguage)
            })
            
            res.status(200).json(vacanciesByProgLanguages);
        } catch (error) {
            res.status(500).json({ error: "Error retrieving vacancies." });
        }
    } else {
        res.status(400).json({ error: "Invalid method." });
    }
}
