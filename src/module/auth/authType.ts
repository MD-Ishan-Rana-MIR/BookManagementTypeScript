import { Document } from "mongoose";

export enum Role {
    USER = "user",
    ADMIN = "admin"
};


export interface IUser extends Document {
    userName : string;
    email : string;
    password : string;
    role : Role;
    createdAt : Date;
    updatedAt : Date;
}