'use strict';

const express = require('express');
const app = express();
const knex = require('./knex');

const bodyParser = require('body-parser');

const port = 5000;

app.get('/projects/:code', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');

  knex('projects')
  .where('code', req.params.code)
  .then((data)=>{
    res.send(data);
  })
});

app.get('/components/:projectId', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  
  knex('components')
  .where('project', req.params.projectId)
  .then((data) => {
    res.send(data);
  })
})

app.listen(port, () => {
  console.log('listening on port', port);
})
