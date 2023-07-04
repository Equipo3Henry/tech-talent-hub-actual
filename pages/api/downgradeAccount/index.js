import prisma from "@/prisma/client";
import transporter from "../sendEmail/index";

export default async function handler(req, res) {
    if (req.method === "POST") {
        const { userId } = req.body;

        try {
            const user = await prisma.user.findUnique({
                where: {
                    id: userId,
                },
            });

            if (user) {
                const downgradeUser = await prisma.user.update({
                    where: {
                        id: user.id
                    },
                    data: {
                        isPremium: false
                    }
                })

                await transporter.verify();

                const mail = {
                    from: 'equipo3.37a@gmail.com',
                    to: downgradeUser.email,
                    subject: "Successfull downgrade to basic",
                    html: `
                    <p style="color: black">
                    Subject: Switched to Basic Plan - Resubscribe to Premium Anytime<br/>

                    <br/>Dear ${downgradeUser.name},<br/>

                    <br/>We wanted to inform you that your subscription has been switched to our Basic Plan.<br/> 
                    While the Basic Plan still offers valuable benefits, we understand that you may have<br/> 
                    enjoyed the additional perks of our Premium Plan.<br/>

                    <br/>Remember, you can resubscribe to the Premium Plan whenever you like to regain access<br/>
                    to all the exclusive features and advantages it provides. Simply visit your account settings<br/> 
                    to upgrade back to Premium.<br/>

                    <br/>Thank you for being a valued member. We're here to assist you with any questions or concerns<br/> 
                    you may have regarding our plans.<br/>

                    <br/>Best regards,<br/>

                    <br/>Ivan Scarsella<br/>
                    TechTalentHub Support
                    </p>
      `,
                };
                await transporter.sendMail(mail);

                res.status(200).send({ message: 'success' });
            }
        } catch (error) {
            res.status(500).json({ error: "Error updating account." });
        }
    } else {
        res.status(400).json({ error: "Invalid method." });
    }
}