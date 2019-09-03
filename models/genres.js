const mongoose = require('mongoose')
const GenresSchema = new mongoose.Schema({
    name:{
    type: String,
    required: true
 }
})
mongoose.model('Genres', GenresSchema)
