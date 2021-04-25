const { getBookHandler } = require('../handler/getData/getBook');
const { addBookHandler } = require('../handler/addData/addBook');
const { editBookHandler } = require('../handler/editData/editBook');
const { getBookIdHandler } = require('../handler/getData/getBookId');
const { deleteBookHandler } = require('../handler/deleteData/deleteBook');

const routes = [
  {
    method: 'GET',
    path: '/books',
    handler: getBookHandler,
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: getBookIdHandler,
  },
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
  },
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: editBookHandler,
  },
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: deleteBookHandler,
  },

];

module.exports = routes;
