const { Router } = require('express');
const router = Router();
const {productosGet, productosPost, productosPut, productosDelete, productosPremium} = require('../controllers/productos.controller');
const chkToken =  require('../middlewares/auth.middleware');


router.get("/productos", productosGet);
router.post("/productos", productosPost);
router.put("/productos/:id", productosPut);
router.delete("/productos/:id", productosDelete);
router.get("/productos-premium", chkToken ,productosPremium);



module.exports = router;