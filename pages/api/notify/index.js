import mercadopago from "mercadopago";

mercadopago.configure({
    access_token: process.env.NEXT_ACCESS_TOKEN
})

export default async function handler(req, res) {
    const { query } = req;

    const topic = query.topic || query.type;

    try {
        if (topic === "payment") {
            const paymentId = query.id || query["data.id"];

            let payment = await mercadopago.payment.findById(Number(paymentId))

            let paymentStatus = payment.body.status;

            console.log([payment, paymentStatus]);

            if(paymentStatus === "approved") {
                //actualizar BD, crear booleano en los modelos para ver el estado de la cuenta
            }
        }
    } catch (error) {
        res.send(error);
    }
}