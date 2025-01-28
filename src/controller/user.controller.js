import userService from "../services/user.service";

function barrowBook(req,res,next){
    const {email,name, title} = req;
   const receipt =  userService.barrowBook(name, email, title)
  return res.status(200).send(receipt);
}
export default userController ={barrowBook}