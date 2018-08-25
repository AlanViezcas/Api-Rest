'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const NoticiasSchema = Schema({
    imagenP: {type: String, default:"null"},
    tituloP: {type: String, default:"null"},
    descripcionP: {type: String, default:"null"},
    imagenS: {type: String, default:"null"},
    tituloS: {type: String, default:"null"},
    descripcion: {type: String, default:"null"},
    link: {type: String, default:"null"},
    video: {type: String, default:"null"},
    fecha:{type: Date, default: Date.now()},
})

module.exports = mongoose.model('noticias', NoticiasSchema)
