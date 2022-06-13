const express = require('express');
const routes = express.Router();
const usersData = require('../data/users');
const middlewares = require('../middlewares');

//routes.use(middlewares.dummy);
//routes.use(middlewares.logger);
routes.use(middlewares.auth);

routes.get('/users', function (_req, res) {
  res.status(200).json(usersData);
});

routes.get('/users/search', function (req, res) {
  const {text} = req.query; // query onde contem os dados que vao vir
  if(!text) return res.status(404).json({message: 'Not Found'});

  const users = usersData.filter(
    (r) => r.name.toLowerCase().includes(text.toLocaleLwerCase()) ||
    r.username.toLowerCase().includes(text.toLocaleLowerCase())
  );

  if(!users) return res.status(404).json({message: 'User not Found'});

  res.status(200).json(users);
});

routes.get('/users/:id', function (req, res) {
  const {id} = req.params;

  const user = usersData.find((r) => r.id === parseInt(id));

  if(!user) return res.status(404).json({message: 'User not Found'});

  res.status(200).json(user);
});

routes.get('/users', function (req, res) {
  const {id, name, email, phone, age, username} = req.body;
  usersData.push({id, name, email, phone, age, username});

  res.status(201).json({message: 'Insert ok'});

});

routes.post('/users', function (req, res) {
  const {id, name, email, phone, age, username} = req.body;
  //req.body.teste.name = 'teste';
  if (!id || !name || !email || !phone || !age || ! username) {
      // return res.status(400).json({ message: "Bad Request" });
      throw { status: 400, message: "Bad Request"};
  }

  usersData.push({id, name, email, phone, age, username});
  res.status(201).json({message: 'Insert OK'});
});


routes.put('/users/:id', function (req, res) {
  const {id} = req.params;

  const {name, email, phone, age, username} = req.body;
  
  const userIndex = usersData.findIndex((user) => user.id === parseInt(id));

  if(userIndex === -1) return res.status(404).json({message: 'User not found'});

  usersData[userIndex] = {...usersData[userIndex], name, email, phone, age, username};

  res.status(204).end(); // ou .json({message: 'update ok'});

});

routes.delete('/users/:id', function (req, res) {
  const {id} = req.params;
  
  const userIndex = usersData.findIndex((user) => user.id === parseInt(id));

  if(userIndex === -1) return res.status(404).json({message: 'User not found'});

  usersData.splice(userIndex, 1);

  res.status(204).end(); // ou .json({message: 'update ok'});

});

module.exports = routes;