import { barrowBooks } from "../database/index.js";

function barrowBook(receipt) {
  barrowBooks.push(receipt);
  return receipt;
}
function isUserAlreadyBorrowedBook(title,email){
 return barrowBooks.find((barrow) => barrow.title === title && barrow.email === email)
}
export default { barrowBook,isUserAlreadyBorrowedBook };
