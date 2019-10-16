const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

const app = express();
app.use(express.json()); //permite que receba json no body da requisição
app.use(cors()); // Permitir que API seja acessar por qualquer domínio

mongoose.connect('mongodb://localhost:27017/iasdappapi', { 
    useNewUrlParser: true,
    useUnifiedTopology: true 
});

requireDir('./src/models');

// Rotas
app.use('/api', require("./src/routes"));

app.listen(3001);