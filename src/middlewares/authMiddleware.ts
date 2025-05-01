import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import url from "../config/config";

interface AuthRequest extends Request {
    user?: any;
}

export const isLogin = async (req: AuthRequest, res: Response, next: NextFunction) => {
    try {
        let token = req.headers.authorization?.split(" ")[1];

        if (!token) {
            token = req.cookies?.token;
        }

        if (!token) {
            return res.status(401).json({
                status: "fail",
                msg: "Unauthorized user"
            });
        }

        const decodeToken = jwt.verify(token, url.jwtKey as string) as {
            _id: string;
            role: string;
            [key: string]: any;
        };

        req.user = {
            _id: decodeToken._id || decodeToken?.user?._id,
            role: decodeToken.role || decodeToken?.user?.role
        };

        next();
    } catch (error: any) {
        return res.status(500).json({
            status: "fail",
            msg: error.message
        });
    }
};



export const isAdmin = async (req: AuthRequest, res: Response, next: NextFunction) => {


    try {
        const userId = req.user._id;
        const isAdmin = req.user.role;

        if (isAdmin !== `admin`) {
            return res.status(403).json({
                status: `fail`,
                msg: `You have not permission.`
            })
        }

        next();

        console.log(userId)
    } catch (error) {
        console.log(error)
    }

}