const books = require('../../data/books');
const { errorResponse, successResponse } = require('../../response/dataResponse');

const editBookHandler = (request, h) => {
  const { id } = request.params;

  const {
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
  } = request.payload;

  const finished = (readPage === pageCount) ? true : false;

  if (name === undefined || name === null || name === '') {
    return h.response(errorResponse('Gagal memperbarui buku. Mohon isi nama buku')).code(400);
  }

  if (readPage > pageCount) {
    return h.response(errorResponse('Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount')).code(400);
  }

  const updatedAt = new Date().toISOString();

  const index = books.findIndex((book) => book.id === id);

  if (index !== -1) {
    books[index] = {
      ...books[index],
      name,
      year,
      author,
      summary,
      publisher,
      pageCount,
      readPage,
      reading,
      finished,
      updatedAt,
    };

    return h.response(successResponse('Buku berhasil diperbarui')).code(200);
  }

  return h.response(errorResponse('Gagal memperbarui buku. Id tidak ditemukan')).code(404);
};

module.exports = { editBookHandler };
