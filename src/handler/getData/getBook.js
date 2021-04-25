const { getBookResponse } = require('../../response/dataResponse');

const getBookHandler = () => getBookResponse();

module.exports = { getBookHandler };
