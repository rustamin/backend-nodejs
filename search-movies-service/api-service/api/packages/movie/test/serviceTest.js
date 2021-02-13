'use strict';

const sinon = require('sinon');
const chai = require('chai');
const axios = require('axios').default;
const chaiAsPromised = require('chai-as-promised'); // TODO: delete this?
const db = require('../../../db');
const service = require('../service');
let connection = require('../../../db/DataBaseHandler');
const response = require('./response');


let expect = chai.expect;
chai.use(chaiAsPromised);

describe('Movie Service Tests', () => {
  const sandbox = sinon.createSandbox();

  before(async () => {
    await connection.query(`CREATE TABLE api_log (
      id   INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
      endpoint    VARCHAR(100)            NULL,
      params     VARCHAR(255)             NULL,
      created_at DATETIME                 NULL
    )`);
  });

  after(async () => {
    await connection.query(`DROP TABLE api_log`);
  });

  afterEach(async () => {
    await connection.query(`TRUNCATE TABLE api_log`);
    sandbox.restore();
  });

  it('should successfully search movie', async () => {
    sandbox
      .stub(axios, 'get')
      .callsFake(() => Promise.resolve(response.search));

    let result = await service.search({
      endpoint: '/search',
      page: 10,
      query: 'Batman',
    });

    expect(result).to.equal(response.search.data);

    let apiLogs = await db.apiLog.list();
    expect(apiLogs).length.to.be(1);
  });

  it('should successfully get detail movie', async () => {
    sandbox
      .stub(axios, 'get')
      .callsFake(() => Promise.resolve(response.detail));

    let result = await service.detail({
      endpoint: '/detail',
      title: 'Batman',
    });
    expect(result).to.equal(response.detail.data);

    let apiLogs = await db.apiLog.list();
    expect(apiLogs).length.to.be(1);
  });
});
