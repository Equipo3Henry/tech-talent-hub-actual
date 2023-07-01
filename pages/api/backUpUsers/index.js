import prisma from "@/prisma/client";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const users = await prisma.user.findMany({
        select: {
          username: true,
          name: true,
          lastname: true,
          birth: true,
          aboutme: true,
          working: true,
          country: true,
          email: true,
          degree: true,
          languages: true,
          progLanguages: true,
          profile_pictures: true,
          seniority: true,
          cv: true,
          softSkills: true,
          specialization: true,
          recruiter: true,
          isActive: true,
          isPremium: true,
          resetLimitFreeVacancies: true,
          superAdmin: true,
          remainingPremiumDays: true,
          premiumUpdateDate: true,
          googleAuth: true,
          appliedVacancies: true,
        },
      });

      res.status(200).json({ users });
    } catch (e) {
      console.error(e);
      res
        .status(500)
        .json({ error: "Hubo un problema obteniendo los usuarios." });
    }
  } else {
    res.status(405).json({ error: "Método no permitido." });
  }
}
