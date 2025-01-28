import { Router } from "express";
import bookController from "../controller/book.controller.js";
const bookRoute = Router();
bookRoute.get("/borrow", bookController.borrowedBook);

export default bookRoute;
