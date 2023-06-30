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
  const userFound = await prisma.user.findUnique({
    where: { email: email },
  });

  const today = new Date();

  function calculatePremiumRemainingDays(a, b) {
    // Convertir las fechas a objetos Date
    const today = new Date(a);
    const premium = new Date(b);

    // Calcular la diferencia en milisegundos
    const calculate = today - premium;

    // Convertir la diferencia a días redondeando hacia abajo
    const remainingDays = Math.floor(calculate / (1000 * 60 * 60 * 24));
    console.log(remainingDays);
    return remainingDays;
  }

  if (userFound) {
    const updateUser = await prisma.user.update({
      where: { id: userFound.id },
      data: {
        resetLimitFreeVacancies:
          today > userFound.resetLimitFreeVacancies
            ? today.getHours() >= 6
              ? `${today.getFullYear()}-${
                  today.getMonth() > 9
                    ? today.getMonth() + 1
                    : `0${today.getMonth() + 1}`
                }-${
                  today.getDate() + 1 > 9
                    ? today.getDate() + 1
                    : `0${today.getDate()}`
                }T06:00:00.000Z`
              : `${today.getFullYear()}-${
                  today.getMonth() > 9
                    ? today.getMonth() + 1
                    : `0${today.getMonth() + 1}`
                }-${
                  today.getDate() > 9 ? today.getDate() : `0${today.getDate()}`
                }T06:00:00.000Z`
            : userFound.resetLimitFreeVacancies,
        limitFreeVacancies:
          today > userFound.resetLimitFreeVacancies
            ? 20
            : userFound.limitFreeVacancies,
      },
    });

    if (updateUser.isPremium === true) {
      const remainingDays = calculatePremiumRemainingDays(
        today,
        userFound.premiumUpdateDate
      );

      if (remainingDays > updateUser.remainingPremiumDays) {
        const updatePremiumUser = await prisma.user.update({
          where: { id: userFound.id },
          data: {
            isPremium: false,
            remainingPremiumDays: 0,
          },
        });
      } else {
        const updatePremiumUser = await prisma.user.update({
          where: { id: userFound.id },
          data: {
            remainingPremiumDays: remainingDays,
          },
        });
      }
    }
  }

  if (!userFound) return { response: "Your email or google account is not registered" };
  else{
    if(password){
      return (await compare(password, userFound.password))
      ? {
          response: "Access granted",
          userData: {
            id: userFound.id,
            name: `${userFound.name} ${userFound.lastname}`,
            user: userFound.username,
            email: userFound.email,
            seniority: userFound.seniority,
            image: userFound.profile_pictures,
            superAdmin: userFound.superAdmin,
          },
        }
      : { response: "Your email or password are incorrect" };
    }else{
      return (userFound.googleAuth === true)
        ? {
          response: "Access granted",
          userData: {
            id: userFound.id,
            name: `${userFound.name} ${userFound.lastname}`,
            user: userFound.username,
            email: userFound.email,
            seniority: userFound.seniority,
            image: userFound.profile_pictures,
            superAdmin: userFound.superAdmin,
          },
        }
      : { response: "Your google account is not registered" };
    }
  }    
}
