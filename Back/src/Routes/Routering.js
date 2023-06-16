const { Router } = require('express');
const UserRoutes = require('./UserRoutes');
const CompanyRoutes = require('./CompanyRoutes');
const JobRoutes = require('./JobRoutes');

const Routering = Router();

Routering.use('/user', UserRoutes);
Routering.use('/company', CompanyRoutes);
Routering.use('/job', JobRoutes);

Routering.get('/', (req, res)=>{
    res.status(200).send('estoy en landing')
})

Routering.get('/home', (req, res)=>{
    res.status(200).send('estoy en inicio')
})

module.exports = Routering;