const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();


const items = require('./routes/api/products');

const app = express();

app.use(express.json());

const db = process.env.mongoURI;

mongoose
  .connect(db)
  .then(() => console.log('MongoDB Connected ...'))
  .catch((err) => console.log(err));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  next();
});

app.use('/api/products', items);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));