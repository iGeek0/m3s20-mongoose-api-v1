const { response, request } = require('express');

const usuariosGet = (req = request, res = response) => {
    res.send("Entro a productos GET del archivo independiente usuarios.controller.js");
}


module.exports = {
    usuariosGet
}