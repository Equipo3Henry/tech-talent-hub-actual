import mercadopago from "mercadopago";
import prisma from "@/prisma/client";

mercadopago.configure({
    access_token: process.env.NEXT_ACCESS_TOKEN
})

export default async function handler(req, res) {
    const { query } = req;

    console.log('NOTIFY', query);

    const topic = query.topic || query.type;

    try {
        if (topic === "payment") {
            const paymentId = query.id || query["data.id"];

            let payment = await mercadopago.payment.findById(Number(paymentId))

            let paymentStatus = payment.body.status;

            console.log([payment, paymentStatus]);

            res.send({ paymentStatus: paymentStatus})

        }
    } catch (error) {
        res.send(error);
    }
}