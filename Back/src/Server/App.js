//Configuración de servidor
const express = require('express');
const morgan = require('morgan');
const Routering = require('../Routes/Router');

const server = express();

server.use(morgan("dev"));
server.use(Routering);

module.exports = server;