const Pool = require('pg').Pool;

// const connectionString = 'postgresql://jioti:jioti18*@localhost:5432/jioti

const pool = new Pool({
  user: 'jioti',
  host: 'localhost',
  database: 'jioti',
  password: 'jioti18*',
  port: 5432
})


module.exports = {
  query: (text, params) => pool.query(text, params)
}