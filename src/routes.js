const express = require('express');
const routes = express.Router();

// importa o arquivo de controller
const ProductController = require('./controllers/ProductController');

// lista os dados 
routes.get('/products', ProductController.index);

// recupera dados passando um id especifico
routes.get('/products/:id', ProductController.show);

// cria novos dados
routes.post('/products', ProductController.store);

// atualiza os dados
routes.put('/products/:id', ProductController.update);

// deleta os dados
routes.delete('/products/:id', ProductController.destroy);

module.exports = routes;