import express from "express"
import {PORT, mongoURL} from './config.js';
import logRoutes from './routes/logRoutes.js';
import mongoose from "mongoose";
import cors from 'cors';
import bodyParser from "body-parser";
// const DATABASE = process.env.DATABASE.toString()
// // let bodyParser = require('body-parser');

const app = express();
app.use(cors())
app.use(express.json());
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }));

app.get('/',(req, res)=>{
    console.log('hello world');
    res.send("Hello world mern stack");
})

app.use('/logs/', logRoutes)

// app.listen(3000, ()=>{
//     console.log(`Server is fiuf, on port `);  // eslint-disable-line no-console
// })
mongoose
.connect(mongoURL)
.then(() =>{
    app.listen(PORT, ()=>{
        console.log(`Server is fiuf, on port ${PORT}`);  // eslint-disable-line no-console
    })
    console.log("app connected success")
})
.catch((err)=>{
    console.log(err)
})