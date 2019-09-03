const mongoose = require('mongoose')
const UsersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    },
})
mongoose.model('Users', UsersSchema)
