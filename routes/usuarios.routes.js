const { Router } = require('express');
const router = Router();
const {usuariosGet, usuarioPost, usuarioLogIn, validarTokenPost} = require('../controllers/usuarios.controller');

router.get("/usuarios", usuariosGet);
router.post("/signup", usuarioPost);
router.post("/login", usuarioLogIn);
router.post("/validar_token", validarTokenPost);


module.exports = router;