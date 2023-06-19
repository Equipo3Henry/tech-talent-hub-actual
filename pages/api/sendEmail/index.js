import nodemailer from "nodemailer";

let testAccount = await nodemailer.createTestAccount();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: process.env.GMAIL,
        pass: process.env.GOOGLE_APP_PASSWORD
    }
});

export default transporter