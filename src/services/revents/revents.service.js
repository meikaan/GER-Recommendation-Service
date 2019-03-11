// Initializes the `revents` service on path `/revents`
const createService = require('./revents.class.js');
const hooks = require('./revents.hooks');

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    paginate,
    app
  };

  // Initialize our service with any options it requires
  app.use('/revents', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('revents');

  service.hooks(hooks);
};
