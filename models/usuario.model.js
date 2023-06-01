const {Schema, model} = require('mongoose');


const usuariosSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    email: {
        type: String,
        required: [true, 'El email es obligatorio']
    },
    dob: {
        type:String,
        required: [true, 'Fecha de nacimiento es obligatorio']
    },
    password: {
        type: String,
        required: [true, 'El password es obligatorio']
    }
}, {vesionKey: false} );

module.exports = model('usuarios', usuariosSchema);