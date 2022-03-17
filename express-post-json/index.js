const express = require('express');
const app = express();

let nextId = 1;
const grades = {};

app.use(express.json());

app.get('/api/grades', (req, res) => {
  const gradesValues = Object.values(grades);
  res.json(gradesValues);
});

app.post('/api/grades', (req, res) => {
  if (!req.body.name || !req.body.course || !req.body.score) {
    res.sendStatus(400);
    return;
  }
  grades[nextId] = req.body;
  grades[nextId].score = +req.body.score;
  grades[nextId].id = nextId;
  res.status(201).send(grades[nextId]);
  nextId++;
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000!');
});
