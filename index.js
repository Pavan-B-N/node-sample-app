require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3030;

app.get('/', (req, res) => {
  res.send('Welcome to app');
});

app.get('/health', (req, res) => {
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
