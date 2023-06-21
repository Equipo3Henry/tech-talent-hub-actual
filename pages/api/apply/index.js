import prisma from "@/prisma/client";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { userId, jobId } = req.body;

    try {
      const result = await prisma.user.update({
        where: { id: userId },
        data: {
          appliedVacancies: {
            connect: { id: jobId },
          },
        },
      });

      res.json({
        success: true,
        message: "Applied to the job successfully",
        result,
      });
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
