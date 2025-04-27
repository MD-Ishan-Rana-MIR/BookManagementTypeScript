import dotenv from "dotenv";
dotenv.config();

type portType = {
    port : number;
    // frontUrl : string; 
    dbUrl : string
};

 const url : portType ={
    port : Number(process.env.PORT) || 3000,
    dbUrl : process.env.DB_URL as string
    // frontUrl : process.env.FRONTENDURL
}


export default url;