import { Document } from "mongoose";


export interface IBook extends Document {
    title : string;
    author : string;
    description : string;
    genre : string;
    publicationYear : string;
    isbn : string;
    price : number;
    emailVerify : boolean
};