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
      html: `<p style="color: black; text-align: justify;">
      Hi ${updatedUser.name},<br/>

      <br/>I hope this email finds you well. On behalf of the entire TechTalentHub team,<br/> 
      I would like to express our sincerest gratitude for subscribing to our premium plan.<br/> 
      We are thrilled to have you as part of our exclusive community and look forward to<br/> 
      providing you with an exceptional experience.<br/>

      <br/>As a premium member, you now have access to a wide range of exciting features and<br/>
      benefits. From enhanced job search capabilities to personalized career guidance, we are<br/> 
      dedicated to helping you unlock your full potential in the tech industry. Our team of<br/> 
      experts will be available to support you every step of the way, ensuring you make the most<br/> 
      out of your membership.<br/>

      <br/>We appreciate your trust in us and are committed to continually improving our platform<br/> 
      to meet your needs. If you have any questions, feedback, or require assistance, please don't<br/> 
      hesitate to reach out to our dedicated support team. We value your input and are here to ensure<br/> 
      you have a seamless experience.<br/>

      <br/>Once again, thank you for choosing TechTalentHub's premium plan. We are excited to embark<br/> 
      on this journey with you and help you succeed in your tech career. Stay tuned for our regular<br/> 
      newsletters, exclusive content, and updates on the latest industry trends.<br/>

      <br/>Best regards,<br/>

      <br/>Iair Kaplun<br/>
      TechTalentHub Manager<br/>
      </p>`,
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
