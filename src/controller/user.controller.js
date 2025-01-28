import userService from "../services/user.service.js";

function barrowBook(req,res,next){
    const {email,name, title} = req;
   const receipt =  userService.barrowBook(name, email, title)
   res.status(200).send(receipt);
}

export default  {barrowBook}