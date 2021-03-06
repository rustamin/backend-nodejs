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
    let result = await axios.get('http://www.omdbapi.com', {
      params: {
        apikey: 'faf7e5bb',
        s: query,
        page,
      },
    });
    return result.data;
  },

  async detail({ endpoint, title }) {
    await db.apiLog.craete({
      endpoint,
      params: {
        title,
      },
    });
    let result = await axios.get('http://www.omdbapi.com', {
      params: {
        apikey: 'faf7e5bb',
        t: title,
      },
    });
    return result.data;
  },
};
