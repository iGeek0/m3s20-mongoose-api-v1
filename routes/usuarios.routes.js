const { Router } = require('express');
const router = Router();
const {usuariosGet, signUp} = require('../controllers/usuarios.controller');

router.get("/usuarios", usuariosGet);
router.post("/signup", signUp);


module.exports = router;