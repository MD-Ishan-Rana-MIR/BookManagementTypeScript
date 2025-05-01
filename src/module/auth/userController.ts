import { Request, Response, NextFunction } from "express";
import { createUserService } from "./userService";
import userModel from "./userModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import url from "../../config/config";








export const createUser = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const { userName, email, password } = req.body;

        // 1. Call your service, which returns a plain JS object (no Mongoose doc)
        const user = await createUserService(userName, email, password);

        // 2. Send a single JSON response and return immediately
        return res.status(201).send({
            success: true,
            data: user,
        });
    } catch (err: any) {
        // 3. If it’s a known error, send a 400; otherwise let your error-handler pick it up
        if (err.message.includes("already exists")) {
            return res.status(400).json({
                success: false,
                message: err.message,
            });
        }
        next(err);
    }
};




export const loginUser = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    try {
        const user = await userModel.findOne({ email: email });

        if (!user || !user.password) {
            return res.status(404).json({ message: "User not found or password missing" });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign({ user }, url.jwtKey, { expiresIn: "24h" });

        return res.status(200).json({
            msg: `User login successfully`,
            token: token
        });

    } catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    }
};