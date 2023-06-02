const { Router } = require('express');
const router = Router();
const {usuariosGet, signUp, logIn} = require('../controllers/usuarios.controller');

router.get("/usuarios", usuariosGet);
router.post("/signup", signUp);
router.post("/login", logIn);



module.exports = router;