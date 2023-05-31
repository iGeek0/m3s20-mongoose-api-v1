const { Router } = require('express');
const router = Router();
const {productosGet, productosPost, productosPut, productosDelete} = require('../controllers/productos.controller');


router.get("/productos", productosGet);
router.post("/productos", productosPost);
router.put("/productos/:id", productosPut);
router.delete("/productos/:id", productosDelete);



module.exports = router;