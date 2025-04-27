import app from "./app";
import url from "./config/config";






app.listen(url.port,()=>{
    console.log(`Server run successfully at http://localhost:${url.port}`)
})