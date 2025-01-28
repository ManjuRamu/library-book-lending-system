import { borrowBooks } from "../database/index.js";

function barrowBook(receipt) {
  borrowBooks.push(receipt);
  return receipt;
}
function isUserAlreadyBorrowedBook(title,email){
 return borrowBooks.find((barrow) => barrow.title === title && barrow.email === email)
}
export default { barrowBook,isUserAlreadyBorrowedBook };
