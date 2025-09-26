const express = require('express');
const emailRoute = require('./routes/emailRoute');
const path = require('path');
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(emailRoute);
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'html', 'home.html'));
});
module.exports = app;
