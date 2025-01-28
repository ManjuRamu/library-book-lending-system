import { barrowBooks } from "../database";

function barrowBook(receipt){
    barrowBooks.push(receipt)
    return receipt;
}
export default {barrowBook}