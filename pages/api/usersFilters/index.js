import prisma from "@/prisma/client";

export default async function handler(req, res) {
  const { progLanguage, seniority } = req.query;

  if (req.method === "GET") {
    try {
      const users = await getUsers(progLanguage, seniority);
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: "Error retrieving user." });
    }
  } else {
    res.status(400).json({ error: "Invalid method." });
  }
}

async function getUsers(progLanguage, seniority) {
  let where = {};

  if (progLanguage) {
    where.progLanguages = {
      has: progLanguage,
    };
  }

  if (seniority) {
    where.seniority = seniority;
  }

  const users = await prisma.user.findMany({
    where,
  });

  return users;
}

/* import prisma from "@/prisma/client";

export default async function handler(req, res) {
  const { progLanguage, seniority } = req.query;

  if (req.method === "GET") {
    try {
      let where = {};

      if (progLanguage) {
        where.progLanguages = {
          has: progLanguage,
        };
      }

      if (seniority) {
        where.seniority = seniority;
      }

      const users = await prisma.user.findMany({
        where,
      });

      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: "Error retrieving user." });
    }
  } else {
    res.status(400).json({ error: "Invalid method." });
  }
} */

/* import prisma from "@/prisma/client";

export default async function handler(req, res) {
  const { progLanguage, seniority } = req.query;

  if (req.method === "GET") {
    try {
      let users = await prisma.user.findMany();

      if (progLanguage) {
        users = users.where((user) =>
          user.progLanguages.includes(progLanguage)
        );
      }

      if (seniority) {
        users = users.where((user) => user.seniority === seniority);
      }
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: "Error retrieving user." });
    }
  } else {
    res.status(400).json({ error: "Invalid method." });
  }
}
 */
