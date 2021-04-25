const books = require('../data/books');

const failStatus = 'fail';
const successStatus = 'success';

const addBookResponse = (messages, id) => ({
  status: successStatus,
  message: messages,
  data: {
    bookId: id,
  },
});

const getBookResponse = () => ({
  status: successStatus,
  data: {
    books: books.map((book) => ({
      id: book.id,
      name: book.name,
      publisher: book.publisher,
    })),
  },
});

const getBookIdResponse = (book) => ({
  status: successStatus,
  data: {
    book,
  },
});

const successResponse = (messages) => ({
  status: successStatus,
  message: messages,
});

const errorResponse = (messages) => ({
  status: failStatus,
  message: messages,
});

const errorGenericResponse = (messages) => ({
  status: 'Error',
  message: messages,
});

module.exports = {
  addBookResponse,
  getBookResponse,
  getBookIdResponse,
  successResponse,
  errorResponse,
  errorGenericResponse,
};
