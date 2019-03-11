const assert = require('assert');
const app = require('../../src/app');

describe('\'recommendations\' service', () => {
  it('registered the service', () => {
    const service = app.service('recommendations');

    assert.ok(service, 'Registered the service');
  });
});
