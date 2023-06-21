import prisma from "@/prisma/client";
import transporter from "../sendEmail";

export default async function handler(req, res) {
    if (req.method === "POST") {
        const { userId, jobId } = req.body;

        try {

            const result = await prisma.user.update({
                where: { id: userId },
                data: {
                    appliedVacancies: {
                        connect: { id: jobId },
                    },
                },
            });

            const userApplient = await prisma.user.findUnique({
                where: {
                    id: userId
                }
            })

            const vacancyApplied = await prisma.vacancy.findUnique({
                where: {
                    id: jobId
                }
            })

            await transporter.verify();

            const mail = {
                from: 'equipo3.37a@gmail.com',
                to: userApplient.email,
                subject: "Success Apply!",
                html: `<p style="color: black">
                  You successfully apllied to the ${vacancyApplied.name_Vacancy} Vacancy!
                      </p> `,
            };
            console.log(mail);
            await transporter.sendMail(mail);

            res.json({
                success: true,
                message: "Applied to the job successfully",
                result,
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: "Something went wrong",
                error: error.message,
            });
        }
    } else {
        res.status(405).json({ success: false, message: "Method not allowed" }); // Handle any other HTTP method
    }
}
