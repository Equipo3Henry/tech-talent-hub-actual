import prisma from "@/prisma/client";
import {compare} from "../../../src/app/helpers/handleBcrypt";

export default async function login(req, res) {
    if (req.method === 'POST') {
        try {
            const { email, password } = req.body;
            const company = await prisma.company.findUnique({
                where: {
                    email: email
                }
            })
            
            if (!company) {
                res.status(404).send({ error: 'company not found' })
            }
            
            const checkPassword = await compare(password, company.password);

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