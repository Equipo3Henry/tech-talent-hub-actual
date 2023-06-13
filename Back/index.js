//Levantar es server y sus dependencias
const server = require('./src/Server/App.js');
const { conn } = require('./src/db.js');

conn.sync({ force: false }).then(() => {
    server.listen(3001, () => {
        console.log('El servidor está iniciado en el puerto 3001')
    });
});