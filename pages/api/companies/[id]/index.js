import prisma from "@/prisma/client";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const { id } = req.query;

    try {
      const company = await prisma.company.findUnique({
        where: {
          id: id
        }
      });

      if (!company) {
        return res.status(404).json({ error: "Company not found" });
      }

      return res.status(200).json(company);
    } catch (error) {
      console.error("Error retrieving company:", error);
      return res.status(500).json({ error: error.message });
    }
  } else {
    return res.status(405).json({ error: "Method Not Allowed" });
  }
}
