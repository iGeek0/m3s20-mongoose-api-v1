const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const hashPassword = async (password) =>{
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
}

const comparePassword = async (password, hash) => {
return await bcrypt.compare(password, hash);
//   "test" ==== $drt%tyuBFgH === true/false
}


const generarToken = (data) => {
    return jwt.sign(
        {
            data
        },
        process.env.JWT_KEY,
        {
            expiresIn: '8h'
        }
    );
}

const validarToken = (token) => {
    return jwt.verify(token, process.env.JWT_KEY);
}




module.exports = {
    hashPassword,
    comparePassword,
    generarToken,
    validarToken
}