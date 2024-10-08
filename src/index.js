const express = require("express");
const cors = require('cors')
const app = express();

const routes = require('./routes/index');

app.use(cors())
const port = process.env.PORT || 3001;

app.use(express.urlencoded({
    extended: true
}))
const Loaders = require('./loaders');

Loaders.start();

app.use(express.json());
app.use(routes);

app.listen(3002, console.log("Servidor rodando na porta 3002"));