import bookModel from "./bookModel"


const findAllBookService = async()=>{
    let book = await bookModel.find();
    return book;
};



export {
    findAllBookService
}