import prisma from "@/prisma/client";

export default async function handler(req, res) {
    
    const { companyType } = req.query;

    if (req.method === "GET") {
        try {
            const companies = await prisma.company.findMany({
                where: {
                    type: companyType,
                },
            });
            
            res.status(200).json(companies);
        } catch (error) {
            res.status(500).json({ error: "Error retrieving companies." });
        }
    } else {
        res.status(400).json({ error: "Invalid method." });
    }
}
