/* eslint-disable no-unused-vars */
class Service {
  constructor (options) {
    this.options = options || {};
    this.app = this.options.app;
  }

  async find (params) {
    const query = params.query;
    if(query && query.type == "person"){
      return this.app.get('ger').recommendations_for_person(query.namespace, query.person, { actions: { [query.action]: 1} });
    } else {
      return this.app.get('ger').recommendations_for_thing(query.namespace, query.thing, { actions: { [query.action]: 1} });
    }
  }

  async get (id, params) {
    return {
      id, text: `A new message with ID: ${id}!`
    };
  }

  async create (data, params) {
    if (Array.isArray(data)) {
      return Promise.all(data.map(current => this.create(current, params)));
    }

    return data;
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
