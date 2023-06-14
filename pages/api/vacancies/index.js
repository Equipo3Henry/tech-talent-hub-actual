const handler = async (req, res) => {
    if (req.method === 'POST') {
        const newVacancy = await fetch('http://localhost:3001/vacancies', {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(req.body)
        })

        return res.status(201).json(newVacancy)
    }

    if (req.method === 'GET') {
        const response = await fetch('http://localhost:3001/vacancies', {
            headers: {
                'Content-Type': 'application/json'
            },
        })
        const vacancies = await response.json()
        return res.status(200).json(vacancies)
    };
    return res.status(400).json({ error: 'el método no existe' })
}

export default handler;