import prisma from "@/prisma/client";
import {compare} from "../../../src/app/helpers/handleBcrypt";

export default async function login(req, res) {
    if (req.method === 'POST') {
        try {
            const { email, password } = req.body;
            const user = await prisma.user.findUnique({
                where: {
                    email: email
                }
            })

            if (!user) {
                res.status(404).send({ error: 'User not found' })
            }

            const checkPassword = await compare(password, user.password);

            if (checkPassword) {
                res.status(200).send('OK')
            }

            if (!checkPassword) {
                res.status(409).send({
                    error: 'Invalid password'
                })
            }

        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }
}