const { nanoid } = require('nanoid');
const books = require('../../data/books');
const { addBookResponse, errorResponse, errorGenericResponse } = require('../../response/dataResponse');

const addBookHandler = (request, h) => {
  const id = nanoid(16);

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

  const insertedAt = new Date().toISOString();
  const updatedAt = insertedAt;

  const finished = (readPage === pageCount) ? true : false;

  if (name === undefined || name === null || name === '') {
    return h.response(errorResponse('Gagal menambahkan buku. Mohon isi nama buku')).code(400);
  }

  if (readPage > pageCount) {
    return h.response(errorResponse('Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount')).code(400);
  }

  const newBook = {
    id,
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    finished,
    reading,
    insertedAt,
    updatedAt,
  };

  books.push(newBook);

  const isSuccessAddBook = books.filter((book) => book.id === id).length > 0;
  if (isSuccessAddBook) {
    return h.response(addBookResponse('Buku berhasil ditambahkan', id)).code(201);
  }
  return h.response(errorGenericResponse('Buku gagal ditambahkan')).code(500);
};

module.exports = { addBookHandler };
