'use strict';

module.exports = {
  development: {
    client: 'pg',
    connection: 'postrges://localhost/math_saw'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
}
