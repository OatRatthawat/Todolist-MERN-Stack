const mongoose = require('mongoose');

//create schema contain a single field 
const todoSchema = new mongoose.Schema({
    title: String
})

//Export mongoose model with collection name Todo
module.exports = mongoose.model('Todo', todoSchema);