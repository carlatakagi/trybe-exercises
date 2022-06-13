const express = require('express');
const bodyParser = require('body-parser'); // converter body em json

const validations = require('./middlewares/validation');

const app = express();
app.use(bodyParser.json());

app.get('/sales', validations, (_req, res) => {
  res.status(201).json({ message: 'rota sales criada' });
});

app.listen(3001, () => {
  console.log('Aplicação rodando na porta 3001');
});

