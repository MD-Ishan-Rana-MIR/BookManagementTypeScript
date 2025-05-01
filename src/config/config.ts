import dotenv from "dotenv";
dotenv.config();

type portType = {
    port : number;
    // frontUrl : string; 
    dbUrl : string;
    jwtKey : string
};

 const url : portType ={
    port : Number(process.env.PORT) || 3000,
    dbUrl : process.env.DB_URL as string,
    jwtKey : process.env.JWT_KEY as string ,
    // frontUrl : process.env.FRONTENDURL
}


export default url;