import prisma from "@/prisma/client";

export default async function handler(req, res) {
    
    if (req.method === "GET") {
        try {
            const user = await prisma.user.findMany({
                where: {
                recruiter: true,
                },
            });
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({ error: "Error retrieving user." });
        }
    } else {
        res.status(400).json({ error: "Invalid method." });
    }
}
