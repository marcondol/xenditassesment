const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./database/database');
const bootstrap = require('./bootstrap/init');
const Comment = require('./models/comment');
const Org = require('./models/org');
const Orgember = require('./models/orgmember');

Org.hasMany(Comment);
Org.hasMany(Orgember);
const commentRoutes = require('./routes/orgs');

const app = express();

app.use(bodyParser.json()); // application/json

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'OPTIONS, GET, POST, PUT, PATCH, DELETE',
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use('/orgs', commentRoutes);
sequelize
  .sync()
  .then(() => bootstrap.init())
  // eslint-disable-next-line no-console
  .catch(console.log);

module.exports = app;
