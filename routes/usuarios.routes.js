const { Router } = require('express');
const router = Router();
const {usuariosGet, signUp, logIn, validarTokenPost, getPerfil, editUser} = require('../controllers/usuarios.controller');
const chkToken =  require('../middlewares/auth.middleware');

router.get("/usuarios", usuariosGet);
router.post("/signup", signUp);
router.post("/login", logIn);
router.post("/validar_token", validarTokenPost);
router.get("/perfil", chkToken, getPerfil);
router.put("/actualizar_perfil", chkToken, editUser);



module.exports = router;