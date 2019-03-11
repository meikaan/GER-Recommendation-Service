'use strict';

const g = require('ger')

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
  let esm = new g.MemESM();
  let ger = new g.GER(esm);

  app.set("ger", ger);

  ger.initialize_namespace('activities').then(() => {
  	console.log("ger namespace initialized");
  })
};