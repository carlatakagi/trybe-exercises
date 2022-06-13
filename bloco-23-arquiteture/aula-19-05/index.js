const express = require('express');

const app = express();

app.use(express.json());

app.use('/characters', require('./routes/characters'));

const PORT = process.env.PORT || 3009;

app.listen(PORT, () => console.log(`ouvindo na porta ${PORT}`));