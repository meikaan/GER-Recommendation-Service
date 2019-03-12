'use strict';

const g = require('ger');
//const pg = require('pg');

module.exports = function() {

  const app = this;

  /*let knex = g.knex( {client: 'pg', connection: {
	    host : 'localhost',
	    port: 5432,
	    user : 'postgres',
	    password : '',
	    database : 'ger'
	  	//"postgres://postgres@localhost/ger"
	  }
	});*/
  //TODO: const preferred, check the impact of const and change it accordingly

  let knex = g.knex( {client: 'pg', connection: "postgres://apple:123@localhost/mosaic"});
  let esm = new g.PsqlESM({knex : knex});
  let ger = new g.GER(esm);

  //let esm = new g.MemESM();
  //let ger = new g.GER(esm);

  app.set("ger", ger);

  ger.initialize_namespace('activities').then(() => {
  	console.log("ger namespace initialized");
  })
};