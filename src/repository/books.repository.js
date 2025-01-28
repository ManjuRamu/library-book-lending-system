import { books } from "../database/index.js";

function findBookByTitle(title) {
  return books.find((book) => book.title === title);
}

export default { findBookByTitle };
