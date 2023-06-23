import mercadopago from "mercadopago";

mercadopago.configure({
    access_token: process.env.NEXT_ACCESS_TOKEN,
})

export default async function handler(req, res) {
    
    if (req.method === 'POST') {
        
        const plan = req.body.plan;
        console.log(plan);

        const URL = 'http://localhost:3000';

        try {
            const preference = {
                items: [
                    {
                        title: plan.title,
                        unit_price: plan.price,
                        quantity: 1
                    }
                ],
                auto_return: "approved",
                back_urls: {
                    success: `${URL}`,
                    failure: `${URL}`
                },
                notification_url: `${URL}/api/notify`
            }
            const response = await mercadopago.preferences.create(preference)

            res.status(200).send({ url: response.body.init_point })
        } catch (error) {
            console.log(error);
        }
    } else {
        res.status(400).json({ message: 'Method not allowed' })
    }
}