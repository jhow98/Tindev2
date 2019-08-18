const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

const server = express();

//                mongodb+srv://omnistack:omnistack@cluster0-atavq.mongodb.net/omnistack?retryWrites=true&w=majority
mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-atavq.mongodb.net/omnistack?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

server.use(cors());
server.use(express.json());
server.use(routes);

//GET, POST, PUT, DELETE

server.listen(3333);