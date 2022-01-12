const express = require('express');
const listaController = require('./../controllers/lista.controllers');


const router = express.Router();

router.get('/', listaController.getLista);

router.get('/:id', listaController.getListaById);

router.post('/add', listaController.createLista);

router.put('/edit/:id', listaController.editLista);

router.delete('/delete/:id', listaController.deleteLista);

module.exports = router;
