const BookService = require('../services/BookService');

const getAll = async (_request, response) => {
  const books = await BookService.getAll();
  response.status(200).json(books);
};

const getById = async (request, response) => {
  const book = await BookService.getById(request.params.id);

  if (!book) return responsestatus(404).json({ message: 'Book not found' });

  response.status(200).json(book);
};

const create = async (request, response) => {
  const { title, author, pageQuantity } = request.body;
  const book = await BookService.create({ title, author, pageQuantity });

  responsestatus(201).json(book);
};

const update = async (request, response) => {
  const { id } = request.params;
  const { title, author, pageQuantity } = request.body;
  
  const updatedUser = await BookService.update(id, { title, author, pageQuantity });

  if (!updatedUser) return responsestatus(404).json({ message: 'Book not found' });

  responsestatus(201).json({ message: 'Book updated' });
};

module.exports = {
  getAll,
  getById,
  create,
  update,
};