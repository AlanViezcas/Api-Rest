'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const EventosSchema = Schema({
    imagenP: {type: String, default:"null"},
    nombreEvent: {type: String, default:"null"},
    fecha:{type: Date, default: Date.now()},
    descripcionP: {type: String, default:"null"},
    linkBoletos: {type: String, default:"null"},
    video:{type:String,default:"null"}
})

module.exports = mongoose.model('eventos', EventosSchema)
