import prisma from "@/prisma/client";

export default async function handler(req, res) {
  if (req.method === "PUT") {
    try {
      const { id } = req.query;
      const user = await prisma.user.update({
        where: {
          id: id,
        },
        data: {
          limitFreeVacancies: 20,
          resetLimitFreeVacancies: new Date(),
        },
      });
      res.status(200).json("user's limit updated");
    } catch (error) {
      res.status(500).json({ error: "Error updating user's limit." });
    }
  }
}
