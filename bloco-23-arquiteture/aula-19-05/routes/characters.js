const express = require('express');
const router = express.Router();
const charactersModel = require('../models/charactersModel.js');

router.get('/', async (req, res) => {
  try {
    const [rows] = await charactersModel.getAll(); // buscar todos os dados no banco
    res.status(200).json(rows);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'erro interno' });
  }
});

module.exports = router;