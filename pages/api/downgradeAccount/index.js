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
      Hello ${downgradeUser.name}, your TechTalentHub account has changed to the basic plan. You can resubscribe to our premium plan whenever you want.
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