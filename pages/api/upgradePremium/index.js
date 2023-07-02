import transporter from "../sendEmail";
import prisma from "@/prisma/client";

export default async function upgradePremium(userId) {
  console.log("estoy en el upgradePremium:");

  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  console.log("UPGRADEPREMIUM:", user);
  const userPreviousRemainingDays = user.remainingPremiumDays + 30;
  if (user.isPremium === false) {
    //HASTA ACA LLEGO TODO OK
    const updatedUser = await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        isPremium: true,
        premiumUpdateDate: new Date(),
        remainingPremiumDays: userPreviousRemainingDays,
      },
    });
    console.log("UPDATED USER 1:", updatedUser);

    await transporter.verify();

    const mail = {
      from: "equipo3.37a@gmail.com",
      to: updatedUser.email,
      subject: "Successfull upgrade premium",
      html: `
      <p style="color: black">
      Congratulations ${updatedUser.name}! You are now a premium user of TechTalentHub. You can enjoy the benefits of our premium plan for the next 30 days! 
      </p>
      `,
    };
    await transporter.sendMail(mail);

    console.log(`${updatedUser.name} it's now a user Premium!`);
  } else {
    const updatedUser = await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        premiumUpdateDate: new Date(),
        remainingPremiumDays: userPreviousRemainingDays,
      },
    });
    console.log("UPDATED USER 2:", updatedUser);

    await transporter.verify();

    const mail = {
      from: "equipo3.37a@gmail.com",
      to: updatedUser.email,
      subject: "Successfull update premium",
      html: `
          <p style="color: black">
          Thank you ${updatedUser.name} for renewing your subscription! Now you can enjoy your premium plan for another 30 days! 
          </p>
          `,
    };
    await transporter.sendMail(mail);

    console.log(`${updatedUser.name} upgraded his premium plan`);
  }
}
