import { Router } from "express";
import userController from "../controller/user.controller.js";
import userSchema from "../middleware/validator/schema/user.schema.js";
import { validate } from "../middleware/validator/index.js";
const userRouter = Router();

userRouter.post(
  "/book/borrow",
  validate(userSchema.barrowBook),
  userController.borrowBook,
)


export default userRouter;
