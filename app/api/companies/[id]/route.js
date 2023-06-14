const handler = async (req, res) => {
    if (req.method === 'GET') {
        const id = req.query.id;
        const response = await fetch(`http://localhost:3001/companies/${id}`, {
            headers: {
                'Content-Type': 'application/json'
            },
        })

        if (!response.ok) {
            return res.redirect(307, '/api/companies/1') // si no existe el id, redirecciona a otro
            // return res.status(response.status).end(); // este devolvería un error 404
        }
            const company = await response.json()
        return res.status(200).json(company)
    };
    return res.status(400).json({ error: 'el método no existe' })
}

export default handler;