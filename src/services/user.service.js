import booksRepository from "../repository/books.repository.js";
import userRepository from "../repository/users.repository.js";
function barrowBook(name, email, title) {
  const book = booksRepository.findBookByTitle(title);
  if (!book) throw BadRequest("book not found");
  if (book.availableCopies <= 0)
    throw BadRequest("No available copies of this book");
  const currentDate = new Date();
  const receipt = {
    name,
    email,
    title,
    dueDate: currentDate.setDate(currentDate.getDate() + 15),
  };
  return userRepository.barrowBook(receipt);
}

export default { barrowBook };
