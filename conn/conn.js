const mongoose = require('mongoose');

const conn = () => {
    mongoose.connect('mongodb://localhost:27017/TODO', { useNewUrlParser: true
    }).then(() => {
        console.log('MongoDB conectado!!!');
    }).catch((err) => {
        return console.log(`Erro ao conectar com o banco!!!: ${err}`);
    })

}

module.exports = conn;

