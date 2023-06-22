const { Router } = require('express');
const router = Router();
const {usuariosGet, signUp, logIn, validarTokenPost, perfilInfo, editUser} = require('../controllers/usuarios.controller');
const chkToken =  require('../middlewares/auth.middleware');

router.get("/usuarios", usuariosGet);
router.post("/signup", signUp);
router.post("/login", logIn);
router.post("/validar_token", validarTokenPost);
router.get("/perfil",chkToken, perfilInfo);
router.put("/edit_user", chkToken, editUser);



module.exports = router;