import prisma from "@/prisma/client";

export default async function handler(req, res) {
    
    const { softSkill } = req.query;

    if (req.method === "GET") {
        try {
            const users = await prisma.user.findMany();

            const usersBySoftSkills = users.filter( user => {
               return user.softSkills.includes(softSkill)
            })
            
            res.status(200).json(usersBySoftSkills);
        } catch (error) {
            res.status(500).json({ error: "Error retrieving user." });
        }
    } else {
        res.status(400).json({ error: "Invalid method." });
    }
}
