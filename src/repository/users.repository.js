import { barrowBooks } from "../database/index.js";

function barrowBook(receipt){
    barrowBooks.push(receipt)
    return receipt;
}
export default {barrowBook}