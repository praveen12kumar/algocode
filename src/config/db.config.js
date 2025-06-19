import mongoose from "mongoose";
import { MONGODB_URL, NODE_ENV } from "./server-config.js";
import { DB_NAME } from "../utils/constant.js";

async function DBConnect(){
    try {
        if(NODE_ENV == 'development'){
            const conn = await mongoose.connect(`${MONGODB_URL}/${DB_NAME}`);
            console.log(`Database connected to ${conn.connection.host} Successfully`)
        }
    } catch (error) {
        console.log("Unable to connect to the DB Server");
        console.log(error);
        process.exit(1);
    }

};

export default DBConnect;