'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
const ProductoSchema = Schema({
    codigo: String,
    nombre: String,
    precio: Number,
    disponible: Boolean
});
 
module.exports = mongoose.model('Producto', ProductoSchema);
