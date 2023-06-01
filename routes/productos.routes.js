const { Router } = require('express');
const router = Router();
const {productosGet, productosPost, procutosSecretos} = require('../controllers/productos.controller');

const chkToken = require('../middleware/auth.middleware');


router.get("/productos", productosGet);
router.post("/productos", productosPost);
router.get("/productos-secretos", chkToken ,procutosSecretos);
// Intentar put
// intentar delete


module.exports = router;