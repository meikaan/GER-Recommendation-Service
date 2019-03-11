'use strict';

const ger = require('./ger');

module.exports = function() {
  const app = this;

  app.configure(ger);

};