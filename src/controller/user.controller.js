import userService from "../services/user.service.js";

function borrowBook(req, res, next) {
  const { email, name, title } = req.body;
  const receipt = userService.barrowBook(name, email, title);
  res.status(200).send(receipt);
}

function getBorrowBookList(req, res, next) {
  const { pageNo = 1, pageCount = 5, direction = "desc" } = req.query;
  const email = req.params.email.toLowerCase();
  const receipt = userService.getListOfBorrowBook(
    email,
    pageNo,
    pageCount,
    direction,
  );
  res.status(200).send(receipt);
}

function returnTheBook(req, res, next){
  const {title, email} = req.params
  userService.returnTheBook(email.toLowerCase(),title)
  return res.status(200).send({message:"Book returned successfully"})
}
export default { borrowBook, getBorrowBookList, returnTheBook };
