import express from 'express';
import {PORT} from "./config/server-config.js";
import bodyParser from 'body-parser';



const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());




app.get('/ping', (req, res)=>{
    return res.json({
        message: "Problem service is alive"
    })
})

app.listen(PORT, ()=>{
    console.log(`Server is running on port: ${PORT}`);
});

