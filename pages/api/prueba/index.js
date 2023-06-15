import prisma from "@/prisma/client";

export default async function handler(req, res) {
  if (req.method == "GET") {
    res.json({ message: "Hello World" });
  }
}
n;
