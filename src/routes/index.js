import { Router } from "express";
import userRouter from "./user.routes.js";
import bookRoute from "./book.routes.js";
const router = Router();
router.use("/user", userRouter);
router.use("/book", bookRoute);
export default router;
