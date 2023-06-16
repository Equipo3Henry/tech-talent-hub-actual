import prisma from "@/prisma/client";

export default async function handler(req, res) {

    const { seniority } = req.query;

    if (req.method === "GET") {
        try {
            const user = await prisma.user.findMany({
                where: {
                    seniority: seniority,
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
