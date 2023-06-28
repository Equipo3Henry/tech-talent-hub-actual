"use client";

import mercadopago from "mercadopago";
import prisma from "@/prisma/client";
import upgradePremium from "../../upgradePremium";

mercadopago.configure({
    access_token: process.env.NEXT_ACCESS_TOKEN
})

export default async function handler(req, res) {
    const { query } = req;
    const customId = req.query;
    console.log('CUSTOM ID 2', req.query.customId);
    console.log('REQUEST URL 2', req.url);
    console.log('REQUEST METHOD 2', req.method);

    // QUERY 2 {
    //     'data.id': '1316071395',
    //     type: 'payment',
    //     id: '472b6e1e-051c-433f-bb17-eb69b93fd4c6'
    //   }


    const topic = query.topic || query.type;

    try {
        if (topic === "payment") {
            const paymentId = query.id || query["data.id"];

            let payment = await mercadopago.payment.findById(Number(paymentId))

            let paymentStatus = payment.body.status;

            console.log([payment, paymentStatus]);

            if (paymentStatus === "approved") {
               await upgradePremium(customId.customId)
            }
            // res.status(200).json(actualUser)
        }
    } catch (error) {
        res.send(error);
    }
}