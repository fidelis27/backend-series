const mongoose = require('mongoose')

const SerieSchema = new mongoose.Schema({
     name:{
        type: String,
        required: true
    },
    status:{
        type: String,
        required: true
    },
    genre:{
        type: String,
        required: true
    },
    comments:{
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    },
    
  
})




mongoose.model('Series', SerieSchema)
