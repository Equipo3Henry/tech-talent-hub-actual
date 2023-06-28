"use client";

import mercadopago from "mercadopago";
import prisma from "@/prisma/client";
import { GlobalContext } from "../../../src/app/profile/layout";
import { actualUser } from "../checkout";
import upgradePremium from "../upgradePremium";

mercadopago.configure({
    access_token: process.env.NEXT_ACCESS_TOKEN
})

export default async function handler(req, res) {
    const { query } = req;
    const customId = req.query;
    console.log('CUSTOM ID', req.query.customId);
    console.log('REQUEST URL', req.url);
    console.log('REQUEST METHOD', req.method);
    // 472b6e1e-051c-433f-bb17-eb69b93fd4c6
    // /api/notify?customId=472b6e1e-051c-433f-bb17-eb69b93fd4c6
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
            res.status(200).send('UPGRADE SUCCESSFULL!')
        }
    } catch (error) {
        res.send(error);
    }
}