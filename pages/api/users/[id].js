const handler = async (req, res) => {
    if (req.method === 'GET') {
        const id = req.query.id;
        const response = await fetch(`http://localhost:3001/users/${id}`, {
            headers: {
                'Content-Type': 'application/json'
            },
        })

        if (!response.ok) {
            return res.redirect(307, '/api/users/1') // si no existe el id, redirecciona a otro
        }
            const user = await response.json()
        return res.status(200).json(user)
    };
    return res.status(400).json({ error: 'el método no existe' })
}

export default handler;