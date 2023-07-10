const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://shubhamkhalesk301:jSoQjGfDl2w0hJdy@cluster0.qa5pwff.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true}).catch(err => {
    console.error('Connection Error', err.message)
})

const db = mongoose.connection

module.exports = db