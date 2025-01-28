import { borrowBooks } from "../database/index.js";
import { NoContent } from "../exceptions/apiError.js";

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
function returnBooks(email, title){
   const find = borrowBooks.find((book) => book.title === title && book.email === email)
   if(!find) throw new NoContent("user not borrow the book")
   const index =   borrowBooks.indexOf(find)
   borrowBooks.splice(index, 1)
   return;
}
export default {
  barrowBook,
  isUserAlreadyBorrowedBook,
  getUserBorrowedBooksByEmail,
  returnBooks
};
