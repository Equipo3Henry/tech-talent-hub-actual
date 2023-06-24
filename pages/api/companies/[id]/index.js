import prisma from "@/prisma/client";
import transporter from "../../sendEmail/index";
import { encrypt } from "../../helpers/handleBcrypt";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const { id } = req.query;

    try {
      const company = await prisma.company.findUnique({
        where: {
          id: id,
        },
      });

      if (!company) {
        return res.status(404).json({ error: "Company not found" });
      }

      return res.status(200).json(company);
    } catch (error) {
      console.error("Error retrieving company:", error);
      return res.status(500).json({ error: error.message });
    }
  } else if (req.method === "PATCH") {
    const { id } = req.query;

    try {
      let updateData = { ...req.body };

      // if password in body, hash it
      if (updateData.password) {
        updateData.password = await encrypt(updateData.password);
      }

      const updatedCompany = await prisma.company.update({
        where: {
          id: id,
        },
        data: updateData,
      });

      // If logo_Company has been updated in the company, reflect it in all related vacancies
      if (updateData.logo_Company) {
        await prisma.vacancy.updateMany({
          where: {
            companyId: id,
          },
          data: {
            logo_Company: updateData.logo_Company,
          },
        });
      }

      // Send the email confirmation after the update
      await transporter.verify();
      const mail = {
        from: "equipo3.37a@gmail.com",
        to: updatedCompany.email,
        subject: "Registro actualizado",
        html: `
        <p style="color: black">
        Su registro ha sido actualizado ${updatedCompany.email}
        </p>
        `,
      };
      console.log(mail);
      await transporter.sendMail(mail);

      return res.status(200).json(updatedCompany);
    } catch (error) {
      console.error("Error updating company:", error);
      return res.status(500).json({ error: error.message });
    }
  } else {
    return res.status(405).json({ error: "Method Not Allowed" });
  }
}
