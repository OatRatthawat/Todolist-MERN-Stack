const { MongoClient, ServerApiVersion } = require('mongodb');
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const Todo = require('./models/Todo');
//Execute express
const app = express();
const cors = require('cors');
const port = 3001;

//Middlewares
app.use(express.json());
app.use(cors());

//Connect to the Database
const connectionString = process.env.MONGO_URI; 
mongoose.connect(connectionString)
        .then(() => console.log('Connected to the database…')) 
        .catch((err) => console.error('Connection error:', err));


//routes
app.get('/todo', async (req, res) => {
    const allTasks =  await Todo.find();
    res.json(allTasks);
})

app.post('/todo/new', async (req, res) => {
    const newTask = await Todo.create(req.body);
    res.status(201).json({newTask});
})

app.put('/todo/update/:id', async (req, res) => {
    
        const id = req.params.id;
        const updateData = req.body;

        // { new: true } option to return the updated document
        const updatedTask = await Todo.findByIdAndUpdate(id, updateData, {new: true}).lean();
        res.json(updatedTask);
})

app.delete('/todo/delete/:id', async (req, res) => {
    const deleteTask = await Todo.findByIdAndDelete(req.params.id);
    res.json(deleteTask);
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})


