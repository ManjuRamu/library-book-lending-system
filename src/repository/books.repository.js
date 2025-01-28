import { books, borrowBooks } from "../database/index.js";

function findBookByTitle(title) {
  return books.find((book) => book.title === title);
}
function getBorrowedBooks(start, end, direction) {
  const totalCount = borrowBooks.length;
  let books;
  if(direction === 'asc'){
    books =  borrowBooks.slice(start, end)
  }
 else {books =  structuredClone(borrowBooks).reverse().slice(start,end)}
 return {totalCount, books}
}

export default { findBookByTitle,getBorrowedBooks };
