const { response, request } = require('express');
const Usuario = require('../models/usuario.model');
const bcrypt = require('bcrypt');

const usuariosGet = (req = request, res = response) => {
    res.send("Entro a productos GET del archivo independiente usuarios.controller.js");
}

const signUp = async (req = request, res = response) => {
    // Acordarse que este es como si fuera "usuariosPost"
    try {
        const saltRounds = 10;
        const body = req.body;
        let usuario = new Usuario(body);
        usuario.password = await bcrypt.hash(usuario.password, saltRounds);
        await usuario.save();
        res.status(201).json({
            msg: "El usuario se agrego correctamente",
            detalle: usuario
        });
    } catch (error) {
        res.status(400).json({
            msg: "No se pudo agregar el usuario",
            detalle: error.message
        });
    }
}


module.exports = {
    usuariosGet,
    signUp
}