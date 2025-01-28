import {  DuplicateError, NotFoundError } from "../error/apiError.js";
import booksRepository from "../repository/books.repository.js";
import userRepository from "../repository/users.repository.js";
function barrowBook(name, email, title) {
  const book = booksRepository.findBookByTitle(title);
  if (!book) throw new  NotFoundError("book not found");
  if (book.availableCopies <= 0)
    throw new NotFoundError("No available copies of this book");
  const isAlreadyBorrowed = userRepository.isUserAlreadyBorrowedBook(title, email)
  if(isAlreadyBorrowed) throw new DuplicateError("User already borrowed book", 422 , isAlreadyBorrowed)
  const currentDate = new Date();
  const receipt = {
    name,
    email,
    title,
    dueDate: new Date(currentDate.setDate(currentDate.getDate() + 15)).toISOString(),
  };
  book.availableCopies-=1;
  return userRepository.barrowBook(receipt);
}

export default { barrowBook };
