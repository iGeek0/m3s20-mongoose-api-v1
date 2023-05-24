const { response, request } = require('express');

const productosGet = (req = request, res = response) => {
    res.send("Entro a productos GET del archivo independiente productos.controller.js");
}


module.exports = {
    productosGet
}

/*
RETO: Crear el post de productos(ver lo que me mandan del postman en consola)
{
  "nombre": "Caffe Latte",
  "precio": 10.99,
  "descripcion": "Descripción del producto 1",
  "imagen": "https://picsum.photos/seed/1/500/300",
  "stock": 50
}
*/