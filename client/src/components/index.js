const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const todoRoutes = require('./routes/todo.routes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/todo-app', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB connection established successfully');
});

app.use('/api', todoRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
