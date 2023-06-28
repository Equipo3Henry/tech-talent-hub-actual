import transporter from "../sendEmail";
import prisma from "@/prisma/client";

export default async function upgradePremium(userId) {

    console.log('estoy en el upgradePremium:');

    const user = await prisma.user.findUnique({
        where: {
            id: userId
        }
    })

    console.log('UPGRADEPREMIUM:', user);

    if (user.isPremium === false) {

        await prisma.user.update({
            where: {
                id: userId
            },
            data: {
                isPremium: true,
                premiumUpdateDate: new Date(),
                remainingPremiumDays: remainingPremiumDays + 30
            },
        })
        console.log(user);

        await transporter.verify();

        const mail = {
            from: 'equipo3.37a@gmail.com',
            to: user.email,
            subject: "Successfull upgrade premium",
            html: `
      <p style="color: black">
      Congratulations ${user.name}! You are now a premium user of TechTalentHub. You can enjoy the benefits of our premium plan for the next 30 days! 
      </p>
      `,
        };
        await transporter.sendMail(mail);

        console.log(`${user.name} it's now a user Premium!`);
    } else {
        await prisma.user.update({
            where: {
                id: userId
            },
            data: {
                premiumUpdateDate: new Date(),
                remainingPremiumDays: remainingPremiumDays + 30
            },
        })
        console.log(user);

        await transporter.verify();

        const mail = {
            from: 'equipo3.37a@gmail.com',
            to: user.email,
            subject: "Successfull update premium",
            html: `
          <p style="color: black">
          Thank you ${user.name} for renewing your subscription! Now you can enjoy your premium plan for another 30 days! 
          </p>
          `,
        };
        await transporter.sendMail(mail);

        console.log(`${user.name} upgraded his premium plan`);
    }
}