const handler = async (req, res) => {
    if (req.method === 'POST') {
        const newCompany = await fetch('http://localhost:3001/companies', {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(req.body)
        })

    return res.status(201).json(newCompany);
  }

    if (req.method === 'GET') {
        const response = await fetch('http://localhost:3001/companies', {
            headers: {
                'Content-Type': 'application/json'
            },
        })
        const companies = await response.json()
        return res.status(200).json(companies)
    };
    return res.status(400).json({ error: 'el método no existe' })
}

export default handler;

// deberíamos utilizar la carpeta api dentro de app, estamos usando el app router, no el page router
