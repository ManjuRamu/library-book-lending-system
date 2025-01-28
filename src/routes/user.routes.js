import { Router } from "express";
import userController from "../controller/user.controller.js";
import userSchema from "../middleware/validator/schema/user.schema.js";
const userRouter = Router();
userRouter.post("book/barrow",validate(userSchema.barrowBook),userController.barrowBook)
export default userRouter;