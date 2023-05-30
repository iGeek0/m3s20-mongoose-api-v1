const { response, request } = require('express');
const Usuario = require('../models/usuario.model');
const bcrypt = require('bcrypt');
const {hashPassword, comparePassword, generarToken, validarToken} = require('../utilities/auth.utilities');

const usuariosGet = (req = request, res = response) => {
    res.send("Entro a productos GET del archivo independiente usuarios.controller.js");
}

const usuarioPost = async (req = request, res = response) => {
    try {
        const body = req.body;
        let usuario = new Usuario(body);
        usuario.password = await hashPassword(usuario.password);
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

const usuarioLogIn = async (req = request, res = response) => {
    try {
        const {mail, password} = req.body;
        const userInformationDB = await Usuario.findOne({mail});
        // const validPassword = userInformationDB.password === password;
        const validPassword = await comparePassword(password, userInformationDB.password);
        if(!validPassword){
            return res.status(400).json({
                msg: "Usuario o contraseña incorrectos"
            });
        }

        const token = await generarToken(
            {
                id: userInformationDB._id,
                nombre: userInformationDB.nombre,
                mail: userInformationDB.mail,
            }
        );

        res.status(201).json({
            msg: "LogIn correcto",
            detalle: token,
        });

    } catch (error) {
        console.log(error);
        res.status(400).json({
            msg: "Informacion incorrecta",
            detalle: error.message
        });
    }
}

const validarTokenPost = async (req = request, res = response) => {
    try {
        const {token} = req.body;
        const tokenValido = await validarToken(token);
        res.status(201).json({
            msg: "Token valido",
            detalle: tokenValido,
        });
    } catch (error) {
        res.status(400).json({
            msg: "Token invalido",
            detalle: error.message
        });
    }
}



module.exports = {
    usuariosGet,
    usuarioPost,
    usuarioLogIn,
    validarTokenPost
}