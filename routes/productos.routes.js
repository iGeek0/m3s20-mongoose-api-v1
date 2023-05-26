const { Router } = require('express');
const router = Router();
const {productosGet, productosPost} = require('../controllers/productos.controller');


router.get("/productos", productosGet);
router.post("/productos", productosPost);


module.exports = router;