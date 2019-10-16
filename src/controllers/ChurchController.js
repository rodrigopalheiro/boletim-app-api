const mongoose = require('mongoose');

const Church = mongoose.model('Church');

module.exports = {
    async index(req, res) {
        const { page = 1 } = req.query;

        //const churches = await Church.find(); // Padrão pra buscar
        const churches = await Church.paginate({}, { page, limit: 10 }); // Busca com paginação usando o plugin MongoosePaginate

        return res.json(churches);
    },

    async store(req, res) {
        const church = await Church.create(req.body);

        return res.json(church);
    },

    async update(req, res){
        const church = await Church.findByIdAndUpdate(req.params.id, req.body, { new: true }); // new true faz o mongoose retorne o registro já atualizado

        return res.json(church);
    },

    async show(req, res) {
        const church = await Church.findById(req.params.id);

        return res.json(church);
    },

    async destroy(req, res){
        await Church.findByIdAndRemove(req.params.id);

        return res.send();
    }
}