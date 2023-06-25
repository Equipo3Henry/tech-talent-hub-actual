import prisma from "@/prisma/client";

export default async function handler(req, res) {
  const { userId, jobId } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: { appliedVacancies: true },
    });

    const userVacancies = user.appliedVacancies;

    if (userVacancies.some((vacancy) => vacancy.id === jobId)) {
      return res.status(403).json({
        success: false,
        message: "You have already applied to this offer.",
      });
    }

    if (user.isPremium) {
      const result = await prisma.user.update({
        where: { id: userId },
        data: { appliedVacancies: { connect: { id: jobId } } },
      });
      return res.json({
        success: true,
        message: "Applied to the job successfully",
        result,
      });
    } else {
      if (user.limitFreeVacancies === 0) {
        return res.status(403).json({
          success: false,
          message:
            "You've reached the maximum number of free applications this day. Please wait until tomorrow to apply again.",
        });
      } else {
        const result = await prisma.user.update({
          where: { id: userId },
          data: {
            appliedVacancies: { connect: { id: jobId } },
            limitFreeVacancies: user.limitFreeVacancies - 1,
          },
        });

        return res.json({
          success: true,
          message: "Applied to the job successfully",
          result,
        });
      }
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
}
