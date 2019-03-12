'use strict';

const g = require('ger');
const namespaces = require('../assets/namespace_config.json');

module.exports = function() {

  const app = this;

  //TODO: const preferred, check the impact of const and change it accordingly
  let knex = g.knex( {client: 'pg', connection: "postgres://apple:123@localhost/mosaic"});
  let esm = new g.PsqlESM({knex : knex});
  let ger = new g.GER(esm);

  app.set("ger", ger);

  namespaces.forEach( namespace => {
    ger.initialize_namespace(namespace['name']).then(() => {
      console.log(`ger namespace - ${namespace['name']} initialized`);
    });  
  });

};