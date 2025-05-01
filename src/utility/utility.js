const jwt = require("jsonwebtoken");
import url from "../config/config";

console.log(url.jwtKey)


export const createToken = ()=>{
    const token = jwt.sign({payload}, url.jwtKey,{
        expiresIn : "24h"
    } );

    return token
};



