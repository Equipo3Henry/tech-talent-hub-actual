import prisma from "@/prisma/client";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { userId, jobId } = req.body;

    try {
      const user = await prisma.user.findUnique({
        where: { id: userId },
      });

      // Check if user is premium or still has free vacancies left
      if (user.isPremium || user.limitFreeVacancies > 0) {
        const result = await prisma.user.update({
          where: { id: userId },
          data: {
            appliedVacancies: {
              connect: { id: jobId },
            },
            // If the user is not premium, decrease their limitFreeVacancies by 1
            limitFreeVacancies: user.isPremium
              ? user.limitFreeVacancies
              : user.limitFreeVacancies - 1,
          },
        });

        res.json({
          success: true,
          message: "Applied to the job successfully",
          result,
        });
      } else {
        res.status(403).json({
          success: false,
          message:
            "You've reached the maximum number of free applications this month.",
        });
      }
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Something went wrong",
        error: error.message,
      });
    }
  } else {
    res.status(405).json({ success: false, message: "Method not allowed" }); // Handle any other HTTP method
  }
}
