import winston from "winston";
import 'winston-mongodb';
import {DB_LOGS_URL} from "../config/server-config.js";


const allowedTransports = [];

// below transport configuration enables logging on the console

allowedTransports.push(new winston.transports.Console({
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp(
            { format: "YYYY-MM-DD HH:mm:ss" }
        ), 
        winston.format.printf((log)=> `${log.timestamp} ${log.level}: ${log.message}`),
    )
}));

// below transport configuration enables logging on the mongoDB

allowedTransports.push(new winston.transports.MongoDB({
    level:'error',
    db: DB_LOGS_URL,
    collection: 'logs',
}))

allowedTransports.push(new winston.transports.File({
    filename: "app.log"
}))

const logger = winston.createLogger({
        // default format

        //combine method defines where to store logs [console, file]
        format: winston.format.combine(              
            winston.format.timestamp({ 
                format: "YYYY-MM-DD HH:mm:ss" 
            }), 
            // first argument of combine method defines how we want the timestamp to be formatted
            winston.format.printf((log)=> `${log.timestamp} ${log.level.toUpperCase()}: ${log.message}`),
            // second argument of combine method defines what is exactly going to be printed into the logs
        ), 
        
        
        defaultMeta: { service: "algocode-problem-service" },
        transports: allowedTransports
    });

export default logger;