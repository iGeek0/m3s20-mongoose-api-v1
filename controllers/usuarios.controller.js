const { response, request } = require('express');
const Usuario = require('../models/usuario.model');
const { hashPassword, comparePassword, generarToken, validarToken } = require('../utilities/auth.utilities');
const usuariosGet = (req = request, res = response) => {
    res.send("Entro a productos GET del archivo independiente usuarios.controller.js");
}

const signUp = async (req = request, res = response) => {
    // Acordarse que este es como si fuera "usuariosPost"
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

const  logIn = async (req = request, res = response) => {
    try {
        const { email, password } = req.body;
        const userInformation = await Usuario.findOne({email:email});
        // if (userInformation === null) {
        //     res.status(400).json({
        //         msg: "Email no encontrado.",
        //         detalle: null
        //     });
        // }
        const isValidPassword = await comparePassword(password, userInformation.password);
        if (isValidPassword) {
            res.status(200).json({
                msg: "Login correcto",
                detalle: generarToken({
                    nombre: userInformation.nombre,
                    email: userInformation.email
                })
            });
        } else {
            res.status(400).json({
                msg: "Credencial incorrectas",
                detalle: null
            });
        }

    } catch (error) {
        res.status(400).json({
            msg: "Informacion incorrecta",
            detalle: error.message
        });
    }
}

const validarTokenPost = async (req = request, res = response) => {

    try {
        const {token} = req.body;
        const isValidToken = await validarToken(token);
        if (isValidToken) {
            res.status(201).json({
                msg: "Token valido",
                detalle: null,
            });
        } else {
            res.status(400).json({
                msg: "Token invalido",
                detalle: null
            });
        }

    } catch (error) {
        res.status(400).json({
            msg: "Error en validacion de token",
            detalle: error.message
        });
    }
}


module.exports = {
    usuariosGet,
    signUp,
    logIn,
    validarTokenPost
}