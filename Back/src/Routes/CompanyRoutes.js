const { Router } = require('express');

const CompanyRoutes = Router();

CompanyRoutes.post('/new', (req, res)=>{
    res.status(200).send('estoy creando la empresa')
})

CompanyRoutes.get('/profile/:id', (req, res)=>{
    res.status(200).send('estoy en la empresa')
})

CompanyRoutes.get('/profile/settings', (req, res)=>{
    res.status(200).send('estoy en la configuración de la empresa')
})

CompanyRoutes.get('/:id', (req, res)=>{
    res.status(200).send(`estoy en el detalle de mi empresa`)
})
module.exports = CompanyRoutes;