const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5500;

app.use(bodyParser.json());

app.post('/', (req, res) => {
  // Handle the POST request
  const requestData = req.body;
  console.log('Received data:', requestData);

  // Respond with a JSON reply
  res.json({ message: 'Received your data successfully!' });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
