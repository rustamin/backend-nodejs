const axios = require('axios').default;
const db = require('../../db');

module.exports = {
  async search({ endpoint, query, page }) {
    await db.apiLog.craete({
      endpoint,
      params: {
        query,
        page,
      },
    });
    let result = await axios({
      method: 'get',
      url: 'http://www.omdbapi.com',
      params: {
        apikey: 'faf7e5bb',
        s: query,
        page,
      },
    });
    return result.data;
  },

  async detail({ endpint, title }) {
    await db.apiLog.craete({
      endpoint,
      params: {
        title,
      },
    });
    let result = await axios({
      method: 'get',
      url: 'http://www.omdbapi.com',
      params: {
        apikey: 'faf7e5bb',
        t: title,
      },
    });
    return result.data;
  },
};
