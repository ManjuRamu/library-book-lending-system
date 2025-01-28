import bookService from "../services/book.service.js";
function borrowedBook(req, res, next) {
  const { pageNo = 1, pageCount = 5, direction = "desc" } = req.query;
  const result = bookService.borrowedBooks(pageNo, pageCount, direction);
  res.status(200).send(result);
}

export default { borrowedBook };
