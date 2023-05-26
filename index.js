const express = require('express');
const cors = require('cors');
const { dbConnection } = require("./database/config");
require('dotenv').config();

// require de rutas de mi aplicacion
const rutasProductos = require("./routes/productos.routes");
const rutasUsuarios = require("./routes/usuarios.routes");

const app = express();

// para poder consumir API de distintos dominios
app.use(cors());
// es para poder leer la entrada de datos como JSON
app.use(express.json());


app.get("/", (req, res) => {
    res.send("API v1.0 con mongoose"); // Esto se utiliza para mandar texto plano
    // res.json(); Esto sirve para mandar JSON
});

// app.get("/productos", (req, res) => {
//     res.send("Entro a productos GET del archivo independiente productos.controller.js");
// });


( async ()=>{
    // Carga de mis rutas
    await dbConnection();
    app.use(rutasProductos);
    app.use(rutasUsuarios);
    app.listen(process.env.PORT, ()=>{
        console.log(`La aplicacion esta corriendo en el puerto: ${process.env.PORT}`);
    });

} )();
