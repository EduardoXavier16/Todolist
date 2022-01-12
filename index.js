const express = require('express');
const cors = require('cors');
const conn = require('./conn/conn');
const listaRouter = require('./routes/lista.routes')

const app = express();

app.use(express.json());
app.use(cors());
app.use("/lista", listaRouter);

conn();

const port = 3000;
app.listen(port, () => {
    console.log(`Servidor inicializado na porta ${port}`);
});