'use strict'

const Noticia = require('../models/noticias')

function getNoticia(req, res){
    let noticiasId = req.params.noticiasId

       Noticia.findById(noticiasId,(err, noticia) => {

        if(err) return res.status(500).send({message: `Error al realizar la peticion ${err}`})
        if(!noticia) return res.status(404).send({message: `La noticia no existe`})
            res.status(200).send({noticia})
        })
}

function getNoticias(req, res){
    Noticia.find({}, (err,noticias)=>{
        if(err) return res.status(500).send({message: `Error al realizar la peticion ${err}`})
            if(!noticias) return res.status(404).send({message: `No existe la noticia`})
                res.send(200, {noticias: [noticias]})
    })
}

function saveNoticia(req, res){

    let noticia = new Noticia()
    noticia.imagenP = req.body.imagenP
    noticia.tituloP = req.body.tituloP
    noticia.descripcionP = req.body.descripcionP
    noticia.imagenS = req.body.imagenS
    noticia.tituloS = req.body.tituloS
    noticia.descripcion = req.body.descripcion
    noticia.link = req.body.link
    noticia.video = req.body.video
    noticia.fecha = req.body.fecha

    noticia.save((err, noticiaStored) =>{
     if(err) res.status(500).send({message: `Error al salvar la base de daos ${err}`})

       res.status(200).send({noticia: noticiaStored})
   })

}

function updateNoticia(req, res){
    let noticiasId = req.params.noticiasId
    let update = req.body
    Noticia.findByIdAndUpdate(noticiasId,update, (err, noticiaUpdate)=>{
       if(err) res.status(500).send({message: `Error al actualizar la noticia: ${err}`})
           res.status(200).send({noticia: noticiaUpdate})
    })

}

function deleteNoticia(req, res){

    let noticiasId = req.params.noticiasId

    Noticia.findById(noticiasId, (err, noticia)=>{
        if(err) res.status(500).send({message: `Error la noticia: ${err}`})
          noticia.remove(err => {
              if(err) res.status(500).send({message: `Error la noticia: ${err}`})
                  res.status(200).send({message: `la noticia ha sido eliminada`})
          })
    })
}

module.exports = {
    getNoticia,
    getNoticias,
    saveNoticia,
    updateNoticia,
    deleteNoticia
}
