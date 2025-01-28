import booksRepository from "../repository/books.repository.js";
import { getLimitOffset } from "../utils/pagination.js";

function borrowedBooks(pageNo, pageLimit, direction) {
  const { start, end } = getLimitOffset(pageNo, pageLimit);
  return booksRepository.getBorrowedBooks(start, end, direction);
}
export default { borrowedBooks };
