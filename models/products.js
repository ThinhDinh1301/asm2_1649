const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    id:{
        type: String,
        required: true,
    },
    name:{
        type: String,
        required: true,
    },
    price:{
        type: String,
        required: true,
    },
    image:{
        type: String,
        required: true,
    },
    detail:{
        type: String,
        required: true,
    },
    created:{
        type: Date,
        required: true,
        default: Date.now,
    },
})
module.exports = mongoose.model("Product", productSchema);