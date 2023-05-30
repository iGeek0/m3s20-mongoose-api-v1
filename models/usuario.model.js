const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const usuariosSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    mail: {
        type: String,
        required: [true, 'El mail  es obligatorio']
    },
    dob: {
        type: String,
        required: [true, 'Fecha de nacimiento es obligatoria']
    },
    password: {
        type: String,
        required: [true, 'El password es obligatorio']
    },
}, { vesionKey: false });

usuariosSchema.methods.hashPassword = async (password) => {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
};
usuariosSchema.methods.generarToken = async () => {
    console.log(this);
    return jwt.sign(
        {
            id: this._id,
            nombre: this.nombre,
            mail: this.mail,
            dob: this.dob
        }
        , process.env.SECRET_JWT, { expiresIn: '8h' });
};
usuariosSchema.methods.validarToken = async (token) => {
    return jwt.verify(token, process.env.SECRET_JWT);
};

module.exports = model('usuarios', usuariosSchema);