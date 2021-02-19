const knex = require('knex');
//mostrando o caminho para o arquivo knex do banco de dados 
const configuration = require('../../knexfile');

//usando a configuração do banco de dados escolhendo a de desenvolvimento.
const connection = knex(configuration.development);

module.exports = connection;