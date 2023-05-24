const { Router } = require('express');
const router = Router();
const {usuariosGet} = require('../controllers/usuarios.controller');

router.get("/usuarios", usuariosGet);


module.exports = router;