const { response, request } = require('express');

const productosGet = (req = request, res = response) => {
    res.send("Entro a productos GET del archivo independiente productos.controller.js");
}


module.exports = {
    productosGet
}