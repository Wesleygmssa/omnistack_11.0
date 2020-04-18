const express = require('express');
const routes = require('./routes')
const cors = require('cors');

const app = express();






app.use(cors());     // origin:'http://meuapp.com'
app.use(express.json()); //utlização do formato json
app.use(routes)
app.listen(3333)


/* 

Query Params: Parâmetros nomeados enviados na rota "? (filtros, paginação)
Route Params: Parâmetros utilizados para identificar recursos
Resquest Body: cirpo da requisiçãoi, utlizado para criar ou alterar recurso

*/

/* SQL: MySQL, SQLLite, PostgreSQl, Oracle, Microsft Sql Server
noSQL: MongoDb, CouchDB */





