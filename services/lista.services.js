const Lista = require('./../models/Lista');

const getLista = async () => {
    const listas = await Lista.find();
    return listas;
}

const getListaById = async (id) => {
    const listas = await Lista.findById(id)
    return listas;
  }
  
  const createLista = async (lista) => {
    return await Lista.create(lista)
  }
  
  const editLista = async (id, lista) => {
    return await Lista.findByIdAndUpdate(id, lista);
  }
  
  const deleteLista = async (id) => {
    return await Lista.findByIdAndDelete(id);
  }

module.exports = {
    getLista,
    getListaById,
    createLista,
    editLista,
    deleteLista
}