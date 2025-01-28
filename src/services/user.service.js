import { final } from "../config/constant.js";
import { DuplicateError, NotFoundError } from "../exceptions/apiError.js";
import booksRepository from "../repository/books.repository.js";
import userRepository from "../repository/users.repository.js";
import { getLimitOffset } from "../utils/pagination.js";
function barrowBook(name, email, title) {
  const book = booksRepository.findBookByTitle(title);
  if (!book) throw new NotFoundError("book not found");
  if (book.availableCopies <= 0)
    throw new NotFoundError("No available copies of this book");
  const isAlreadyBorrowed = userRepository.isUserAlreadyBorrowedBook(
    title,
    email,
  );
  if (isAlreadyBorrowed)
    throw new DuplicateError(
      "User already borrowed book",
      422,
      isAlreadyBorrowed,
    );
  const currentDate = new Date();
  const receipt = {
    name,
    email,
    title,
    borrowDate: currentDate.toISOString(),
    dueDate: new Date(
      currentDate.setDate(currentDate.getDate() + final.daysToReturnBook),
    ).toISOString(),
  };
  book.availableCopies -= 1;
  return userRepository.barrowBook(receipt);
}
function getListOfBorrowBook(email, pageNo, pageLimit, direction) {
  const { start, end } = getLimitOffset(pageNo, pageLimit);
  return userRepository.getUserBorrowedBooksByEmail(
    email,
    start,
    end,
    direction,
  );
}

export default { barrowBook, getListOfBorrowBook };
