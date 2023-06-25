import prisma from "@/prisma/client";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { userId, jobId } = req.body;

    try {
      const user = await prisma.user.findUnique({
        where: { id: userId },
      });

      const currentDate = new Date();
      const timeDiff = Math.abs(
        currentDate - new Date(user.resetLimitFreeVacancies)
      );
      const diffHours = Math.ceil(timeDiff / (1000 * 3600)); // Get difference in hours

      let newLimitFreeVacancies = user.limitFreeVacancies;
      let newResetLimitFreeVacancies = user.resetLimitFreeVacancies;

      if (user.isPremium || newLimitFreeVacancies > 0) {
        if (!user.isPremium) {
          if (diffHours >= 24) {
            // Reset limit if 24 hours have passed since the limit was last reset
            newLimitFreeVacancies = 20;
            newResetLimitFreeVacancies = currentDate; // reset time of first apply in the day
          } else {
            // Decrease limit if not
            newLimitFreeVacancies -= 1;
          }
        }

        const result = await prisma.user.update({
          where: { id: userId },
          data: {
            appliedVacancies: {
              connect: { id: jobId },
            },
            limitFreeVacancies: newLimitFreeVacancies,
            resetLimitFreeVacancies: newResetLimitFreeVacancies,
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
            "You've reached the maximum number of free applications this day. Please wait until tomorrow to apply again.",
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
