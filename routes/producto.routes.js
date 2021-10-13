'use strict'
const express = require('express');
const api = express.Router();
 
const ProductoCtrl = require('../controllers/producto.controller');
 
api.get('/producto', ProductoCtrl.getProductos);
api.post('/producto', ProductoCtrl.registrarProducto);
api.put('/producto', ProductoCtrl.modificarProducto);
module.exports = api;


