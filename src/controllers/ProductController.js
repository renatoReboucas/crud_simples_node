const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
    async index(req, res){
        // lista todos os dados de uma vez so
        // const products = await Product.find();

        // faz paginacao
        const {page = 1} = req.query
        const products = await Product.paginate({},{page, limit: 10});
        
        // retorna dados em json
        return res.json(products);
    },

    async show(req, res){
        const product = await Product.findById(req.params.id);
        return res.json(product);
    },

    async store(req, res){
        const product = await Product.create(req.body);
        return res.json(product);
    },

    async update(req, res){
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true});
        return res.json(product);
    },

    async destroy(req, res){
        const product = await Product.findByIdAndRemove(req.params.id);
        return res.send("Objeto deletado");
    },
}