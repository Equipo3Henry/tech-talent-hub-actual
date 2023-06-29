import prisma from "@/prisma/client";
import transporter from "../sendEmail";

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const userId = req.body.userId;

        const deactivateUser = await prisma.user.update({
            where: {
                id: userId
            },
            data: {
                isActive: false,
                isPremium: false,
                appliedVacancies: {
                    set: []
                  }
            },
        })

        await transporter.verify();

        const mail = {
            from: 'equipo3.37a@gmail.com',
            to: deactivateUser.email,
            subject: "Your account is now deactive",
            html: `
      <p style="color: black">
      Your Tech Talent Hub account has been deactivated. To activate it again you must log in normally. 
      </p>
      `,
        };

        await transporter.sendMail(mail);

        return res.status(200).send({ message: `${deactivateUser.name} has deactivated his account`, success: true })

    } else {

        return res.status(405).json({ error: "Method Not Allowed" })

    }
}