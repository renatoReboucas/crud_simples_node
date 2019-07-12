const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
// importa os diretorios
const requireDir = require('require-dir');

const app = express();

// permite que envia dados no formato json
app.use(express.json());

// permite que o cors funcione liberando a api 
app.use(cors());

mongoose.connect('mongodb://user:mudar123@localhost:8081/nodeapi',
    {
        useNewUrlParser: true
    }
);

 requireDir('./src/models');

//  const Product = mongoose.model('Product');

app.listen(3000, () =>{
    console.log("Servidor Rodando...");
});

// Primeira rota
app.use('/api', require('./src/routes'));

