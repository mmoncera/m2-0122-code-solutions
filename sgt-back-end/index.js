const express = require('express');
const pg = require('pg');
const app = express();

app.use(express.json());

// only create ONE pool for your whole server
// eslint-disable-next-line no-unused-vars
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000!');
});
