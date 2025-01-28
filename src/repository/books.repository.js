import { books } from "../database"

function findBookByTitle(title){
return books.find((book) => book.title === title)
}

export default {findBookByTitle}