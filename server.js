'use strict';

const express = require('express');
const app = express();
const knex = require('./knex');

const bodyParser = require('body-parser');

const port = 5000;

app.get('/projects/:id', (req, res) => {
  knex('projects')
  .where('id', req.params.id)
  .then((data)=>{
    res.send(data);
  })
});

app.get('/components/:projectId', (req, res) => {
  knex('components')
  .where('project', req.params.projectId)
  .then((data) => {
    res.send(data);
  })
})

app.listen(port, () => {
  console.log('listening on port', port);
})
