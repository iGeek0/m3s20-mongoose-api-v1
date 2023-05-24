const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// para poder consumir API de distintos dominios
app.use(cors());
// es para poder leer la entrada de datos como JSON
app.use(express.json());


app.get("/", (req, res) => {
    res.send("API v1.0 con mongoose"); // Esto se utiliza para mandar texto plano
    // res.json(); Esto sirve para mandar JSON
});


app.listen(process.env.PORT, ()=>{
    console.log(`La aplicacion esta corriendo en el puerto: ${process.env.PORT}`);
});