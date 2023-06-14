const { Router } = require('express');

const JobRoutes = Router();

JobRoutes.post('/new', (req, res)=>{
    res.status(200).send('estoy creando el trabajo')
})

JobRoutes.get('/:id', (req, res)=>{
    res.status(200).send(`estoy en el detalle del trabajo`)
})

JobRoutes.get('/:id/settings', (req, res)=>{
    res.status(200).send('estoy en la configuración del trabajo')
})
module.exports = JobRoutes;