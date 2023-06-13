const { Router } = require('express');
const { createCompany } = require("../Controllers/CompanyController");

const CompanyRoutes = Router();

CompanyRoutes.post('/new', async (req, res) => {
    try {
        const dataBody = await createCompany(req.body)
        res.status(200).send(dataBody)
    } catch (e) {
        console.log(e);
    }
})

CompanyRoutes.get('/profile/:id', (req, res) => {
    res.status(200).send('estoy en la empresa')
})

CompanyRoutes.get('/profile/settings', (req, res) => {
    res.status(200).send('estoy en la configuración de la empresa')
})

CompanyRoutes.get('/:id', (req, res) => {
    res.status(200).send('obtengo una empresa por id')
})
module.exports = CompanyRoutes;