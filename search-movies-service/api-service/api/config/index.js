const envOr = require('./helper').envOr;

module.exports = exports = {
  db: {
    host: envOr('DATABASE_HOST', '127.0.0.1'),
    user: envOr('DATABASE_USER', 'user1'),
    password: envOr('DATABASE_PASSWORD', '123'),
    database: envOr('DATABASE_DATABASE', 'movies'),
    port: envOr('DATABASE_PORT', 3306),
  },
};
