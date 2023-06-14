const handler = async (req, res) => {
    if (req.method === 'POST') {
        const newUser = await fetch('http://localhost:3001/users', {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(req.body)
        })

        return res.status(201).json(newUser)
    }

    if (req.method === 'GET') {
        const response = await fetch('http://localhost:3001/users', {
            headers: {
                'Content-Type': 'application/json'
            },
        })
        const users = await response.json()
        return res.status(200).json(users)
    };
    return res.status(400).json({ error: 'el método no existe' })
}

export default handler;