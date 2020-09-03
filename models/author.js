const mongoose = require('mongoose')
const Book = require('./book')          // current directory

const authorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

// constraint --> executed before removing an author
authorSchema.pre('remove', function (next) {
    Book.find({ author: this.id }, (err, books) => {
        if (err) {
            next(err)       // pass error to next function
        } else if (books.length > 0) {
            next(new Error('This author has books still'))
        } else {
            next()          // Ok --> continue       
        }
    })
})

// == tablename
module.exports = mongoose.model('Author', authorSchema)