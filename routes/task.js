const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')
const schema = mongoose.Schema

const TaskSchema = new schema({
  title: String,
  description: String,
}, { timestamps: true })

const ModelTask = mongoose.model('task', TaskSchema)

module.exports = router

// Agregar task
router.post('/taskadd', (req, res) => {
  const newtask = new ModelTask({
    title: req.body.title,
    description: req.body.description,
  })
  newtask.save(
    function (err) {
      if (!err) {
        res.send('Task added successfully')
      } else {
        res.send(err)
      }
    }
  )
})

// Obtener tasks
router.get('/tasks', (req, res) => {
  ModelTask.find({}, (docs, err) => {
    if (!err) {
      res.send(docs)
    } else {
      res.send(err)
    }
  })
})

// Obtener task id
router.post('/gettask', (req, res) => {
  ModelTask.find({ _id: req.body._id }, (docs, err) => {
    if (!err) {
      res.send(docs)
    } else {
      res.send(err)
    }
  })
})

// Editar task id
router.put('/taskedit', (req, res) => {
  ModelTask.findOneAndUpdate({ _id: req.body._id }, {
    title: req.body.title,
    description: req.body.description
  }, (err) => {
    if (!err) {
      res.send('task updated successfully')
    } else {
      res.send(err)
    }
  })
})

router.post('/taskdelete', (req, res) => {
  ModelTask.findOneAndRemove({ _id: req.body._id }, (err) => {
    if (!err) {
      res.send('task deleted successfully')
    } else {
      res.send(err)
    }
  })
})