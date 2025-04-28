import { model, Schema } from "mongoose";
import { IUser, Role } from "./userType";

const userSchema = new Schema<IUser>({
    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        trim: true
    },
    role: {
        type: String,
        enum: Object.values(Role),
        default: Role.USER
    }
}, { timestamps: true, versionKey: false });

const userModel = model<IUser>(`user`, userSchema);

export default userModel;