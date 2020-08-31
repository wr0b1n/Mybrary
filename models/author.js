const mongoose = require('mongoose')

const authorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

// == tablename
module.exports = mongoose.model('Author', authorSchema)