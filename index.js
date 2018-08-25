'use strict'

const mongoose = require('mongoose')
const app = require('./app')
const config = require('./config')


 mongoose.connect(config.db,(err, res)=>{
     if (err) {return console.log(`Error al conectar a la base de datos, Error: ${err}`)}
         console.log('Conexion a la base de datos establecida(desde local)')

 })

app.listen(config.port, () =>{
    console.log(`API REST coorriendo en puerto:${config.port} desde local`)
})
