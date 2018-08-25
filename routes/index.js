'use strict'

const express = require('express')
const api = express.Router()
//const auth = require('../middlewares/auth')

const noticiasCtrl = require('../controllers/noticias')
//const userCtrl = require('../controllers/users')
const eventosCtrl = require('../controllers/eventos')

// agregar auth despues de las comas de las direcciones para entrar con autenficacion
api.get('/noticias', noticiasCtrl.getNoticias)
api.get('/noticias/:noticiasId', noticiasCtrl.getNoticia)
api.post('/noticias', noticiasCtrl.saveNoticia)
api.put('/noticias/:noticiasId', noticiasCtrl.updateNoticia)
api.delete('/noticias/:noticiasId', noticiasCtrl.deleteNoticia)

api.get('/eventos', eventosCtrl.getEventos)
api.get('/eventos/:eventosId', eventosCtrl.getEvento)
api.post('/eventos', eventosCtrl.saveEventos)
api.put('/eventos/:eventosId', eventosCtrl.updateEvento)
api.delete('/eventos/:eventosId', eventosCtrl.deleteEvento)

module.exports = api
