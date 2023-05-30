const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const hashPassword = async (password) => {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
};

const comparePassword = async (password, hash) => {
    return await bcrypt.compare(password, hash);
};

const generarToken = (data) => {
    // expire in 30 seconds
    return jwt.sign(
        {
            data
        }
        , process.env.SECRET_JWT, { expiresIn: '8h' });
        // { expiresIn: '30s' }
}

const validarToken = (token) => {
    return jwt.verify(token, process.env.SECRET_JWT);
}

module.exports = {
    hashPassword,
    comparePassword,
    generarToken,
    validarToken
};