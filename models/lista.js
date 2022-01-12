const mongoose = require('mongoose');


const listaModel = new mongoose.Schema({
    Titulo: { type: String, required: true },
    Descrição: { type: String, required: true },
    Prioridade: { type: String, required: true },
    Status: { type: String, required: true },
    Prazo: { type: Number, required: true },
    DataCriacao: { type: Date, default: Date.now }
});

const Lista = mongoose.model('Lista', listaModel);

module.exports = Lista;