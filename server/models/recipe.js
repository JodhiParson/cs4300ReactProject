const mongoose = require('mongoose');
const ItemSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    image: {
        type: String,
    },
    instruction: {
        type: String,
    },
});

module.exports = Item = mongoose.model('item', ItemSchema);