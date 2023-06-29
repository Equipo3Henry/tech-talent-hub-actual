import prisma from "@/prisma/client";
import transporter from "../sendEmail";

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const companyId = req.body.companyId;

        const deactivateCompany = await prisma.company.update({
            where: {
                id: companyId
            },
            data: {
                isActive: false,
            },
        })

        const vacancies = await prisma.vacancy.findMany({
            where: {
                companyId: companyId
            }
        });

        if (vacancies) {
            vacancies.forEach(async (vacancy) => {

                await prisma.vacancy.update({
                    where: {
                        id: vacancy.id
                    },
                    data: {
                        isActive: false
                    }
                })
            })
        }

        await transporter.verify();

        const mail = {
            from: 'equipo3.37a@gmail.com',
            to: deactivateCompany.email,
            subject: "Your account is now deactive",
            html: `
      <p style="color: black">
      Your Tech Talent Hub account has been deactivated. To activate it again you must log in normally. 
      </p>
      `,
        };

        await transporter.sendMail(mail);

        return res.status(200).send({ message: `${deactivateCompany.name} has deactivated his account`, success: true })

    } else {

        return res.status(405).json({ error: "Method Not Allowed" })

    }
}
