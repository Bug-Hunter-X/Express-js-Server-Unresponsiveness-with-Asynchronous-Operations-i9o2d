const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // Simulate an asynchronous operation
  setTimeout(() => {
    res.send('Hello from Express!');
  }, 2000);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});