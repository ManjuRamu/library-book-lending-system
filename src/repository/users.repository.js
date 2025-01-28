import { final } from "../config/constant.js";
import { books, borrowBooks } from "../database/index.js";
import { NoContent } from "../exceptions/apiError.js";
import { addDaysToISOString } from "../utils/date.utils.js";

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
   borrowBooks.splice(index, 1);
   const foundBook = books.find(book => book.title === title)
   foundBook.availableCopies +=1; 
   return;
}
function extendBorrowPeriod(email, title, duration){
  const find = borrowBooks.find((book) => book.title === title && book.email === email)
  if(!find) throw new NoContent("user not borrow the book")
  const currentDueDate = new Date(find.dueDate);
  find.dueDate = addDaysToISOString(currentDueDate, duration)
  return find;
}
export default {
  barrowBook,
  isUserAlreadyBorrowedBook,
  getUserBorrowedBooksByEmail,
  returnBooks,
  extendBorrowPeriod
};
