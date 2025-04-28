import { Request, Response, NextFunction } from "express";
import { createUserService } from "./userService";

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
