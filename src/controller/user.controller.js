import userService from "../services/user.service.js";

function borrowBook(req, res, next) {
  const { email, name, title } = req.body;
  const receipt = userService.barrowBook(name, email, title);
  res.status(200).send(receipt);
}


export default { borrowBook };
