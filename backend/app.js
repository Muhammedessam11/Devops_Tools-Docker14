const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://mongo:27017/ecommerce', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.get('/', (req, res) => {
  res.send('E-commerce API is running');
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
