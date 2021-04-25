const books = require('../../data/books');
const { errorResponse, successResponse } = require('../../response/dataResponse');

const deleteBookHandler = (request, h) => {
  const { id } = request.params;
  const index = books.findIndex((book) => book.id === id);

  if (index !== -1) {
    books.splice(index, 1);
    return h.response(successResponse('Buku berhasil dihapus')).code(200);
  }
  return h.response(errorResponse('Buku gagal dihapus. Id tidak ditemukan')).code(404);
};

module.exports = { deleteBookHandler };
