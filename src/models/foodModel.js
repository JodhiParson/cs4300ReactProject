const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
    title: {type: String, required: true},
    ingredients: {type: String},
    instructions: {type: String},
    image: { type: String,},
    updated_date: {
        type: Date,
        default:Date.now,
    }
})


module.exports = Item = mongoose.model('Item', foodSchema);