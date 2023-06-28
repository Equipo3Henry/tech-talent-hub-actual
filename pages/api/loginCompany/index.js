import { PrismaClient } from "@prisma/client";
import { compare } from "bcryptjs";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { email, password } = req.body;
  console.log("Incoming body parameters: ", req.body);
  try {
    const validate = await getValidate(email, password);
    console.log(`provide access: ${validate}`);
    res.status(200).json(validate);
  } catch (error) {
    console.error(`Error while validating user: ${error}`);
    res.status(500).json({ error: "Error validating user." });
  }
}

async function getValidate(email, password) {
  console.log(`Body condition: email:${email}`);

  const companyFound = await prisma.company.findUnique({
    where: { email: email },
  });

  if (!companyFound) return { response: "Company not found" };
  else if (!companyFound.isActive) {
    return { response: "Company account is not active" };
  } else
    return (await compare(password, companyFound.password))
      ? {
          response: "Access granted",
          companyData: {
            id: companyFound.id,
            name: companyFound.name,
            email: companyFound.email,
            logo_Company: companyFound.logo_Company,
            type: companyFound.type,
            country: companyFound.country,
          },
        }
      : { response: "Your email or password are incorrect" };
}
