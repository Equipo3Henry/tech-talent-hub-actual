import prisma from "@/prisma/client";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed. Use POST" });
  }

  const { userId } = req.body;

  if (!userId) {
    return res.status(400).json({ error: "Missing userId in request body" });
  }

  const user = await prisma.user.findUnique({ where: { id: userId } });

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  // Time since the limit was last reset
  const timeSinceReset = new Date() - new Date(user.resetLimitFreeVacancies);

  // Convert 2 minutes to milliseconds
  const twoMinutesInMs = 2 * 60 * 1000;

  if (user.limitFreeVacancies <= 0 && timeSinceReset >= twoMinutesInMs) {
    await prisma.user.update({
      where: { id: userId },
      data: { limitFreeVacancies: 20, resetLimitFreeVacancies: new Date() },
    });

    return res.status(200).json({ message: "Limit has been reset" });
  } else if (user.limitFreeVacancies > 0) {
    return res
      .status(200)
      .json({ message: "You still have free vacancies left" });
  } else if (timeSinceReset < twoMinutesInMs) {
    return res.status(200).json({
      message: "Limit will be reset after 2 minutes from the last reset",
    });
  }
}
