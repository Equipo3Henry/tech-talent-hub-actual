import prisma from "@/prisma/client";

export default async function handler(req, res) {
    
    if (req.method === "GET") {
        try {
            const vacancy = await prisma.vacancy.findMany({
                where: {
                isActive: true,
                },
            });
            res.status(200).json(vacancy);
        } catch (error) {
            res.status(500).json({ error: "Error retrieving vacancy." });
        }
    } else {
        res.status(400).json({ error: "Invalid method." });
    }
}
