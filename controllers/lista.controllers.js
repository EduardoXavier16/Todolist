const mongoose = require('mongoose');
const listaServices = require('../services/lista.services');

const getLista = async (req, res) => {
    const Lista = listaServices.getLista();
    res.send(Lista);
}

const getListaById = async (req, res) => {
    const id = req.params.id;
  
    if(!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).send({message: 'Id Invalido, porfavor verifique as informações.'})
      return
    }
  
    const lista = await listasService.getListaById(id);
    
    if(!lista) {
      res.status(404).send({message: 'Lista nao encontrada!!!'});
      return;
    }
  
    res.send(lista);
  }
  
  const createLista = async (req, res) => {
    const lista = req.body;
  
    await listasService.createLista(lista)
    .then(() => {
      res.send({message: `Lista ${lista.nome} cadastrado com sucesso!`})
    })
    .catch((err) => {
      res.status(500).send({message: `Erro no servidor: ${err}`});
    })
  }
  
  const editLista = async (req, res) => {
    const id = req.params.id;
    const listaEdit = req.body;
  
    await listaService.editLista(id, gameEdit)
    .then(() => res.send({message: 'Lista Editada com sucesso'}))
    .catch(err => res.status(500).send({message: `Erro no servidor: ${err}`}))
  }
  
  const deleteLista = async (req, res) => {
    const id = req.params.id;
  
    await listaService.deleteLista(id)
    .then(() => res.send({message: 'Lista excluida com sucesso'}))
    .catch((err) => res.status(500).send({message: `Erro no servidor: ${err}`}))
  
  }
  
module.exports = {
    getLista,
    getListaById,
    createLista,
    editLista,
    deleteLista
}