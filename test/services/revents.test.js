const assert = require('assert');
const app = require('../../src/app');

describe('\'revents\' service', () => {
  it('registered the service', () => {
    const service = app.service('revents');

    assert.ok(service, 'Registered the service');
  });
});
