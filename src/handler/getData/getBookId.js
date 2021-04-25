const books = require('../../data/books');
const { getBookIdResponse, errorResponse } = require('../../response/dataResponse');

const getBookIdHandler = (request, h) => {
  const { id } = request.params;
  const book = books.filter((b) => b.id === id)[0];

  if (book !== undefined) {
    return h.response(getBookIdResponse(book)).code(200);
  }
  return h.response(errorResponse('Buku tidak ditemukan')).code(404);
};

module.exports = { getBookIdHandler };
