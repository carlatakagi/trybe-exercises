const express = require('express');
const {getSimpsons} = require('./helpers');

const app = express();

app.get('/simpsons', async (_req, res) => {
  try {
    const dataSimpsons = await getSimpsons('./simpsons.json');
    res.status(200).json(dataSimpsons);
  } catch(error) {
    res.status(500).send('não foi possível encontrar os simpsons');
  }
});

app.get('/simpsons/:id', async (req, res) => {
  const {id} = req.params;
  try {
    const dataSimpsons = await getSimpsons('./simpsons.json');
    const simpson = dataSimpsons.find((data) => data.id === +id);
    
    res.status(200).json(simpson);
  } catch (err) {

  }
});

app.listen(3219, () => {
  console.log('servidor rodando');
});