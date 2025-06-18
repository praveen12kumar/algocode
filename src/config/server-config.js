import { config } from "dotenv";

config({
    path:'./.env'
})


const PORT = process.env.PORT || 5000;
const MONGODB_URL = process.env.MONGODB_URL
const NODE_ENV = process.env.NODE_ENV || "development"


export{
    PORT,
    MONGODB_URL,
    NODE_ENV,

    
}