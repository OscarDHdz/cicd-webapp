module.exports = {

  development: {
    NODE_ENV: 'development',
    PORT: 3000,
    VALIDATE_DB: process.env.VALIDATE_DB || 'ON',
    DB_HOST: process.env.DB_HOST || '192.168.99.100',
    DB_USER: process.env.DB_USER || 'developer',
    DB_PASS: process.env.DB_PASS || 'qwerty',
    DB_NAME: process.env.DB_NAME || 'db_api',
    DB_CLIENT: process.env.DB_CLIENT || 'sqlite3',
    DB_FILE: process.env.DB_FILE || 'database',
  },

  test: {
    NODE_ENV: 'test',
    PORT: 3000,
    VALIDATE_DB: process.env.VALIDATE_DB || 'OFF',
    DB_HOST: process.env.DB_HOST,
    DB_USER: process.env.DB_USER,
    DB_PASS: process.env.DB_PASS,
    DB_NAME: process.env.DB_NAME,
    DB_CLIENT: process.env.DB_CLIENT || 'sqlite3',
    DB_FILE: process.env.DB_FILE || 'testdb',
  },

  prod: {
    NODE_ENV: 'prod',
    PORT: 3000,
    VALIDATE_DB: 'ON',
    DB_HOST: process.env.DB_HOST,
    DB_USER: process.env.DB_USER,
    DB_PASS: process.env.DB_PASS,
    DB_NAME: process.env.DB_NAME,
    DB_CLIENT: process.env.DB_CLIENT,
    DB_FILE: process.env.DB_FILE,
  }

}
