/* eslint-disable no-unused-vars */
var moment = require('moment');

class Service {
  constructor (options) {
    this.options = options || {};
    this.app = this.options.app;
  }

  async find (params) {
    return [];
  }

  async get (id, params) {
    
    return {
      id, text: `A new message with ID: ${id}!`
    };

  }

  async create (data, params) {
    //TODO: Find better way to ensure mandatory params
    const mandatoryParams = ['namespace', 'person', 'action', 'thing'];

    if(data.constructor !== Array){
      data = [data];
    }

    data.forEach(event => {
      mandatoryParams.forEach(param => {
        if(!!event[param])return;
        throw new Error(`Missing Parameter: ${param}`); 
      })  
    })

    data.forEach(event => {
      if (!event.expires_at){
        event.expires_at = moment().add(1, 'y').format('YYYY-MM-DD');
      }
    })
    
    console.log(data);
    return this.app.get('ger').events(data);

  }

  async update (id, data, params) {
    return data;
  }

  async patch (id, data, params) {
    return data;
  }

  async remove (id, params) {
    return { id };
  }
}

module.exports = function (options) {
  return new Service(options);
};

module.exports.Service = Service;
