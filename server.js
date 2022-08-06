const express = require('express')
const app = express()

// Importar conexión a db
const db = require('./config/database')

// Importación del archivo de rutas y modelo
const routeTask = ''

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// app.use('/api/v1', routeTask)

app.get('/', (req, res) => {
  res.send('Funcionando...')
})

app.listen(5000, function () {
  console.log('Server listening on port' + 5000)
})