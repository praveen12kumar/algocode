import express from 'express';
import {PORT} from "./config/server-config.js";


import bodyParser from 'body-parser';
import apiRouter from "./routes/index.js"
import { errorHandler } from './utils/errorHandler.js';
import DBConnect from './config/db.config.js';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());


app.use('/api', apiRouter);


app.get('/ping', (req, res)=>{
    return res.json({
        message: "Problem service is alive"
    })
})


// last middleware if any error occurs
// It is an errorHandler middleware because it have 4 parameters and it should
// not be mentioned in between the request-response life cycle, it should be at the end of the req-res cycle
app.use(errorHandler);


app.listen(PORT, async()=>{
    console.log(`Server is running on port: ${PORT}`);
    await DBConnect();
});

