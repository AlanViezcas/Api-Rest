'use strict'

const Evento = require('../models/eventos')


function getEvento(req, res){
    let eventosId = req.params.eventosId

       Evento.findById(eventosId,(err, evento) => {

        if(err) return res.status(500).send({message: `Error al realizar la peticion ${err}`})
        if(!evento) return res.status(404).send({message: `El evento no existe`})
            res.status(200).send({evento})
        })
}

function getEventos(req, res){
    Evento.find({}, (err,eventos)=>{
        if(err) return res.status(500).send({message: `Error al realizar la peticion ${err}`})
            if(!eventos) return res.status(404).send({message: `No existe el evento`})
                res.send(200, {eventos: [eventos]})
    })
}

function saveEventos(req, res){

    let evento = new Evento()

    evento.imagenP = req.body.imagen
    evento.nombreEvent = req.body.nombreEvent
    evento.fecha = req.body.fecha
    evento.descripcionP = req.body.descripcionP
    evento.linkBoletos = req.body.linkBoletos
    evento.video = req.body.video

    evento.save((err, eventoStored) =>{
     if(err) res.status(500).send({message: `Error al salvar la base de daos ${err}`})

       res.status(200).send({evento: eventoStored})
   })
}

function updateEvento(req, res){
    let eventosId = req.params.eventosId
    let update = req.body
    Evento.findByIdAndUpdate(eventosId,update, (err, eventoUpdate)=>{
       if(err) res.status(500).send({message: `Error al actualizar el evento: ${err}`})
           res.status(200).send({evento: eventoUpdate})
    })
}

function deleteEvento(req, res){

    let eventosId = req.params.eventosId

    Evento.findById(eventosId, (err, evento)=>{
        if(err) res.status(500).send({message: `Error el evento: ${err}`})
          evento.remove(err => {
              if(err) res.status(500).send({message: `Error el evento: ${err}`})
                  res.status(200).send({message: `el evento ha sido eliminada`})
          })
    })
}

module.exports = {
    getEvento,
    getEventos,
    saveEventos,
    updateEvento,
    deleteEvento
}
