'use strict';

const sinon = require('sinon');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised'); // TODO: delete this?
const service = require('./service');

let assert = chai.assert;
let expect = chai.expect;
chai.use(chaiAsPromised);

describe('Movie Service Tests', () => {
  const sandbox = sinon.createSandbox();

  afterEach(() => {
    sandbox.restore();
  });

  it('should successfully search movie', async () => {
    let result = await service.search({
      page: 10,
      s: 'Batman',
    });
  }).timeout(5000);
});
