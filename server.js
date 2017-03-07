'use strict';

const express = require('express');
const app = express();
const knex = require('./knex');

const bodyParser = require('body-parser');

const port = 5000;

app.get('/projects', (req, res) => {
  knex('projects').then((data)=>{
    res.send(data);
  })
});

app.listen(port, () => {
  console.log('listening on port', port);
})
