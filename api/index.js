import express from 'express';

const app = express();

app.use(express.json()); // for parsing application/json

app.get('/test', (req, res) => {
  res.json('It works');
});

app.listen(8000, () => {
  console.log('Server is running on port 8000');
});
