'use strict';

const express = require('express');
const app = express();
const knex = require('./knex');

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const port = process.env.PORT || 5000;

app.get('/project/:code', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');

  knex('projects')
  .where('code', req.params.code)
  .then((data)=>{
    res.send(data);
  })
});

app.get('/component/:projectId', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');

  knex('components')
  .where('project', req.params.projectId)
  .then((data) => {
    res.send(data);
  })
})

//post new project
app.post('/project', (req, res) => {
  var newProj = {
    code: req.body.code || 'abc',
    name: req.body.name || 'name'
  }

  knex('projects')
  .insert(newProj, "*")
  .then((data) => {
    res.send(data);
  });
})

app.post('/component', (req, res) => {
  var newComp = {
    project: req.body.project,
    name: req.body.name,
    length: req.body.length,
    width: req.body.width
  }

  knex('components')
  .insert(newComp, '*')
  .then((data) => {
    res.send(data);
  })
})

app.listen(port, () => {
  console.log('listening on port', port);
})
