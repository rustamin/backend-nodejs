let connection = require('./DataBaseHandler');
let moment = require('moment');

module.exports = {
  async craete({ endpoint, params }) {
    let result = await connection.query(
      'INSERT INTO api_log (endpoint, params, created_at) VALUES (?,?,?)',
      [
        endpoint,
        JSON.stringify(params),
        moment().utcOffset('+0700').format('YYYY-MM-DD HH:mm:ss'),
      ]
    );
    return result;
  },
  retrieve() {},
};
