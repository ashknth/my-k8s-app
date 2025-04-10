const express = require('express');
const app = express();
const port = 3000;

app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from the Backend!' });
});

app.listen(port, () => {
  console.log(`Backend listening at http://localhost:${port}`);
});

