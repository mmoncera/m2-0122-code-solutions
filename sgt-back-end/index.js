const express = require('express');
const pg = require('pg');
const app = express();

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.use(express.json());

app.use('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = +req.params.gradeId;
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: 'The "gradeId" must be a positive integer.'
    });
    return;
  }
  next();
});

app.get('/api/grades', (req, res) => {
  const sql = `
    SELECT
      *
    FROM
      "grades"
  `;
  db.query(sql)
    .then(data => {
      const grades = data.rows;
      res.json(grades);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.get('/api/grades/:gradeId', (req, res) => {
  const gradeId = +req.params.gradeId;
  const sql = `
    SELECT
      *
    FROM
      "grades"
    WHERE
      "gradeId" = $1
  `;
  const params = [gradeId];
  db.query(sql, params)
    .then(data => {
      const grade = data.rows[0];
      if (!grade) {
        res.status(404).json({
          error: `Can not find grade with "gradeId" ${gradeId}.`
        });
      } else {
        res.json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.post('/api/grades', (req, res) => {
  const { name, course, score } = req.body;
  if (!name || !course || !score) {
    res.status(400).json({
      error: 'The "name", "course", and "score" fields are required.'
    });
    return;
  }
  if (!Number.isInteger(+score) || +score < 0 || +score > 100) {
    res.status(400).json({
      error: 'The "score" field must be an integer from 0 to 100.'
    });
    return;
  }
  const sql = `
    INSERT INTO
      "grades" ("name", "course", "score")
    VALUES
      ($1, $2, $3) returning *
  `;
  const params = [name, course, score];
  db.query(sql, params)
    .then(data => {
      const grade = data.rows[0];
      res.status(201).json(grade);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.put('/api/grades/:gradeId', (req, res) => {
  const gradeId = +req.params.gradeId;
  const { name, course, score } = req.body;
  if (!name || !course || !score) {
    res.status(400).json({
      error: 'The "name", "course", and "score" fields are required.'
    });
    return;
  }
  if (!Number.isInteger(+score) || +score < 0 || +score > 100) {
    res.status(400).json({
      error: 'The "score" field must be an integer from 0 to 100.'
    });
    return;
  }
  const sql = `
    UPDATE
      "grades"
    SET
      "name" = $1,
      "course" = $2,
      "score" = $3
    WHERE
      "gradeId" = $4 returning *
  `;
  const params = [name, course, score, gradeId];
  db.query(sql, params)
    .then(data => {
      const grade = data.rows[0];
      if (!grade) {
        res.status(404).json({
          error: `Can not find grade with "gradeId" ${gradeId}.`
        });
      } else {
        res.json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000!');
});
