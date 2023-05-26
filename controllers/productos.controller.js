const { response, request } = require('express');
const Producto = require('../models/producto.model');

const productosGet = async (req = request, res = response) => {
    try {
      const productosLista = await Producto.find();

      res.status(200).json({
        msg: "Listado de productos",
        detalle: productosLista
      });

    } catch (error) {
      res.status(400).json({
        msg: "No se pudo listar los productos",
        detalle: error.message
      });
    }
}

const productosPost = async (req = request, res = response) => {
  try {
    // Al agregar valida que el producto no exista.....segun el name....
    const body = req.body;
    let producto = new Producto(body);
    await producto.save();

    res.status(201).json({
      msg: "El producto se agrego correctamente",
      detalle: producto
    });

  } catch (error) {
    res.status(400).json({
      msg: "No se pudo agregar el producto",
      detalle: error.message
    });
  }
}


module.exports = {
    productosGet,
    productosPost
}

/*
RETO: Crear el post de productos(ver lo que me mandan del postman en consola)
{
  "nombre": "Caffe Latte",
  "precio": 10.99,
  "descripcion": "Descripción del producto 1",
  "imagen": "https://picsum.photos/seed/1/500/300",
  "stock": 50
}
*/