//criando uma variavel chamada express para receber a biblioteca de rotas chamada express
const express = require('express');
const cors = require('cors');
const routes = require('./routes');

//criando a variavel chamada app que vai ser responsavel pelo projeto
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
/** 
 * Rotas / Recursos
 * Recursos: são tabelas do banco aonde se busca informações
*/

/**
 * Metodos HTTP:
 * 
 * GET: Buscar uma informação ou listar uma informação do Back-end, o navegador vai buiscar no banco de dados da aplicação
 * POST: Criar uma informação no Back-end.
 * PUT: Alterar uma informação no Back-end
 * DELET: deltetar uma informação no back-end
 * 
 */

 /**
  * Tipos de parametros 
  * Query Parms: Parametros nomeados (parametros nomeados são enviados pelo navagador o nome da variavel e o resultado que deseja obter ex: name: 'Diego') 
  *         por ser nomeado pode buscar mais de uma informação com "&" enviados na rota após "?" (Como filtros para selecionar a informação, paginações)
  *         os query parms utilizam o request.query para obter os paramtros.
  * 
  * Router Parms: Parâmetros utilizados para identificar um recurso como o id sempre quando vc  vai montar a rota no projeto 
  *         vc deve usar o nome da tabela : identificação ex: /user/:id eles utilizam o request.parms para obter as informação do navegador
  * 
  * Request Body: Corpo da requesição, utilizado para criar ou alterar uma  informação, utiliza o request.body para obter as informações, alem de ter que declarar ao projeto
  * como app.use(express.json()); 
  */


//mandando que a variavel app ouça a porta 3333 fazendo que essa seja a porta.
app.listen(3333);
