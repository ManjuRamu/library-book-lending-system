import { borrowBooks } from "../database/index.js";

function barrowBook(receipt) {
  borrowBooks.push(receipt);
  return receipt;
}
function isUserAlreadyBorrowedBook(title, email) {
  return borrowBooks.find(
    (barrow) => barrow.title === title && barrow.email === email,
  );
}
function getUserBorrowedBooksByEmail(email, start, end, direction) {
  const userBorrowedBooks = borrowBooks.filter(
    (book) => book.email === email.toLowerCase(),
  );
  let books;
  if (direction === "asc") {
    books = userBorrowedBooks.slice(start, end);
  } else {
    books = structuredClone(userBorrowedBooks).reverse().slice(start, end);
  }
  return { totalCount: userBorrowedBooks.length, books };
}
export default {
  barrowBook,
  isUserAlreadyBorrowedBook,
  getUserBorrowedBooksByEmail,
};
