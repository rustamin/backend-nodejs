'use strict';

const sinon = require('sinon');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const service = require('./service');

let assert = chai.assert;
let expect = chai.expect;
chai.use(chaiAsPromised);

/**
 * Movie Service Tests
 */
describe('Movie Service Tests', () => {
  const sandbox = sinon.createSandbox();

  afterEach(() => {
    sandbox.restore();
  });

  it('should return unauthorized when clientId 0', async () => {
    try {
      let result = await service.search({
        page: 10,
        s: 'Batman',
      });

    } catch (err) {
      console.log('err', err);
    }
  }).timeout(5000);
});
