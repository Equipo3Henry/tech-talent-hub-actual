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
               upgradePremium(customId.customId)
            }
            res.status(200).send('UPGRADE SUCCESSFULL!')
        }
    } catch (error) {
        res.send(error);
    }
}

//DEJO ESTE COMENTARIO POR SI LLEGA A FALLAR Y NECESITAMOS ALGUN DATO DEL RESPONSE DE MERCADOPAGO

// CUSTOM ID 472b6e1e-051c-433f-bb17-eb69b93fd4c6
// API resolved without sending a response for /api/notify?customId=472b6e1e-051c-433f-bb17-eb69b93fd4c6&id=10092410296&topic=merchant_order, this may result in stalled requests.
// REQUEST URL /api/notify?customId=472b6e1e-051c-433f-bb17-eb69b93fd4c6&id=10092410296&topic=merchant_order
// REQUEST METHOD POST
// CUSTOM ID 472b6e1e-051c-433f-bb17-eb69b93fd4c6
// REQUEST URL /api/notify?customId=472b6e1e-051c-433f-bb17-eb69b93fd4c6&data.id=1316094613&type=payment
// REQUEST METHOD POST
// [
//   mercadopagoResponse {
//     body: {
//       accounts_info: null,
//       acquirer_reconciliation: [],
//       additional_info: [Object],
//       authorization_code: null,
//       binary_mode: false,
//       brand_id: null,
//       build_version: '3.5.0-rc-2',
//       call_for_authorize_id: null,
//       captured: true,
//       card: [Object],
//       charges_details: [],
//       collector_id: 1000436775,
//       corporation_id: null,
//       counter_currency: null,
//       coupon_amount: 0,
//       currency_id: 'ARS',
//       date_approved: '2023-06-28T11:43:53.533-04:00',
//       date_created: '2023-06-28T11:43:53.372-04:00',
//       date_last_updated: '2023-06-28T11:43:53.533-04:00',
//       date_of_expiration: null,
//       deduction_schema: null,
//       description: 'Option 2',
//       differential_pricing_id: null,
//       external_reference: null,
//       fee_details: [Array],
//       financing_group: null,
//       id: 1316094613,
//       installments: 1,
//       integrator_id: null,
//       issuer_id: '3',
//       live_mode: false,
//       marketplace_owner: null,
//       merchant_account_id: null,
//       merchant_number: null,
//       metadata: {},
//       money_release_date: '2023-07-16T11:43:53.533-04:00',
//       money_release_schema: null,
//       money_release_status: null,
//       notification_url: 'https://9c95-2800-810-525-1d07-d481-5094-5dfa-9e3a.ngrok-free.app/api/notify?customId=472b6e1e-051c-433f-bb17-eb69b93fd4c6',
//       operation_type: 'regular_payment',
//       order: [Object],
//       payer: [Object],
//       payment_method: [Object],
//       payment_method_id: 'master',
//       payment_type_id: 'credit_card',
//       platform_id: null,
//       point_of_interaction: [Object],
//       pos_id: null,
//       processing_mode: 'aggregator',
//       refunds: [],
//       shipping_amount: 0,
//       sponsor_id: null,
//       statement_descriptor: 'IVNSCARSELLA',
//       status: 'approved',
//       status_detail: 'accredited',
//       store_id: null,
//       tags: null,
//       taxes_amount: 0,
//       transaction_amount: 15,
//       transaction_amount_refunded: 0,
//       transaction_details: [Object]
//     },
//     response: {
//       accounts_info: null,
//       acquirer_reconciliation: [],
//       additional_info: [Object],
//       authorization_code: null,
//       binary_mode: false,
//       brand_id: null,
//       build_version: '3.5.0-rc-2',
//       call_for_authorize_id: null,
//       captured: true,
//       card: [Object],
//       charges_details: [],
//       collector_id: 1000436775,
//       corporation_id: null,
//       counter_currency: null,
//       coupon_amount: 0,
//       currency_id: 'ARS',
//       date_approved: '2023-06-28T11:43:53.533-04:00',
//       date_created: '2023-06-28T11:43:53.372-04:00',
//       date_last_updated: '2023-06-28T11:43:53.533-04:00',
//       date_of_expiration: null,
//       deduction_schema: null,
//       description: 'Option 2',
//       differential_pricing_id: null,
//       external_reference: null,
//       fee_details: [Array],
//       financing_group: null,
//       id: 1316094613,
//       installments: 1,
//       integrator_id: null,
//       issuer_id: '3',
//       live_mode: false,
//       marketplace_owner: null,
//       merchant_account_id: null,
//       merchant_number: null,
//       metadata: {},
//       money_release_date: '2023-07-16T11:43:53.533-04:00',
//       money_release_schema: null,
//       money_release_status: null,
//       notification_url: 'https://9c95-2800-810-525-1d07-d481-5094-5dfa-9e3a.ngrok-free.app/api/notify?customId=472b6e1e-051c-433f-bb17-eb69b93fd4c6',
//       operation_type: 'regular_payment',
//       order: [Object],
//       payer: [Object],
//       payment_method: [Object],
//       payment_method_id: 'master',
//       payment_type_id: 'credit_card',
//       platform_id: null,
//       point_of_interaction: [Object],
//       pos_id: null,
//       processing_mode: 'aggregator',
//       refunds: [],
//       shipping_amount: 0,
//       sponsor_id: null,
//       statement_descriptor: 'IVNSCARSELLA',
//       status: 'approved',
//       status_detail: 'accredited',
//       store_id: null,
//       tags: null,
//       taxes_amount: 0,
//       transaction_amount: 15,
//       transaction_amount_refunded: 0,
//       transaction_details: [Object]
//     },
//     status: 200,
//     idempotency: undefined,
//     pagination: undefined
//   },
//   'approved'
// ]