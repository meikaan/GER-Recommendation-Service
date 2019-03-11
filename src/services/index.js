const revents = require('./revents/revents.service.js');
const recommendations = require('./recommendations/recommendations.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(revents);
  app.configure(recommendations);
};
