const mongoose = require('mongoose')
mongoose
  .connect('mongodb://localhost:27017/todoapp1')
  .then(() => {
    console.log('DB connection established')
  })
  .catch((err) => console.log(err))

module.exports = mongoose