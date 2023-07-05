import prisma from "@/prisma/client";
import mercadopago from "mercadopago";
import transporter from "../sendEmail";
import upgradePremium from "../upgradePremium";

mercadopago.configure({
  access_token: process.env.NEXT_ACCESS_TOKEN,
});

// let actualUser = {};

export default async function handler(req, res) {
  if (req.method === "POST") {
    const plan = req.body.plan;
    const userId = req.body.userId;
    // const { slug } = req.query;
    // console.log('Slug:', slug);
    const { id } = req.query;
    // console.log('User ID:', id);
    //const URL = "localhost:3000";
    const URL = "tech-talent-hub-actual-git-develop-equipo3henry.vercel.app";

    // console.log(URL)

    // actualUser = await prisma.user.findUnique({
    //   where: {
    //     id: userId
    //   }
    // })

    try {
      // const user = await prisma.user.findUnique({
      //   where: {
      //     id: userId
      //   }
      // })

      // const actualDate = new Date();

      // const startDate = actualDate.toISOString(); // Convertir la fecha actual a formato ISO

      // const endDate = new Date();
      // endDate.setMonth(endDate.getMonth() + 1); // Sumar 1 mes
      // const endDateISO = endDate.toISOString(); // Convertir la fecha final a formato ISO

      const preference = {
        items: [
          {
            title: plan.title,
            unit_price: plan.price,
            quantity: 1,
          },
        ],
        auto_return: "approved",
        back_urls: {
          success: `${URL}/profile/mydata`,
          failure: `${URL}/profile/mydata`,
        },
        notification_url: `${URL}/api/notify?customId=${id}`,
        // notification_url: `${URL}/api/notify` + `/?customId=${id}`,
      };
      // https://9c95-2800-810-525-1d07-d481-5094-5dfa-9e3a.ngrok-free.app/api/notify?customId=472b6e1e-051c-433f-bb17-eb69b93fd4c6 // si no entro a mercadopago...
      // https://9c95-2800-810-525-1d07-d481-5094-5dfa-9e3a.ngrok-free.app/api/433f-bb17-eb69b93fd4c6                                // si entro a mercadopago...

      // const preference = {
      //   "reason": plan.title,
      //   "payer_email": User.email,
      //   "auto_recurring": {
      //     "frequency": 1,
      //     "frequency_type": "months",
      //     "start_date": startDate,
      //     "end_date": endDateISO,
      //     "transaction_amount": plan.price,
      //     "currency_id": "ARS"
      //   },
      //   "back_url": URL,
      //   "status": "authorized"
      // };

      const response = await mercadopago.preferences.create(preference);

      res.status(200).send({ url: response.body.init_point });
    } catch (error) {
      // console.log(error);
    }
  } else {
    res.status(400).json({ message: "Method not allowed" });
  }
}
