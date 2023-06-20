import transporter from "..";

export default async function register(req, res) {
  const { method } = req;
  if (method == "POST") {
    console.log(req);
    const { email } = req.body;
    // const  email  = 'scarsellaivan@gmail.com';
    // console.log(req.method);
    try {
      await transporter.verify();
      const mail = {
        from: "equipo3.37a@gmail.com",
        to: email,
        subject: "Registro exitoso",
        html: `
        <p style="color: black">
        Mail de prueba a ${email}
        </p>
        `,
      };
      await transporter.sendMail(mail);
      console.log(mail);
      res.status(200).json({
        Message: `Se ha enviado un correo electrónico de prueba a ${email} `,
      });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}
