const express = require('express')
const cors = require('cors')
class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT||3000;
        this.usuariosPath='/api/usuarios';
        //Middelware
        this.middelwares();
        //Rutas de la aplicación
        this.routes();
    }

    //A que se define el metodo middleware que publicara la carpeta public
    middelwares() {
        //CORS
        this.app.use(cors());
        //Lectura y parseo del body recibe lo que se envia
        this.app.use(express.json());
        //directorio publico
        this.app.use(express.static('public'));
    }

    routes() {
      this.app.use(this.usuariosPath,require('../routes/usuarios'))
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto ', this.port)
        })
    }
}
module.exports = Server;
