import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import "dotenv/config.js";
import sendMail from './services/emailService.js';

import userRouter from "./routes/user.js";
import emailRouter from './routes/email.js'; 
import cron from "node-cron";



const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.use("/user", userRouter);


// const MONGODB_ID= process.env.MONGODB_ID;
// const MONGODB_PASSWORD =process.env.MONGODB_PASSWORD;
const CONNECTION_URL = `mongodb+srv://raunak:darkknight54@@cluster0.jkv8ae8.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(CONNECTION_URL,{useNewUrlParser: true,useUnifiedTopology: true}).then(()=> app.listen(5000,()=>{
    console.log('Server started running at port 5000');
})).catch((error)=> console.log(error));

cron.schedule('0 * * * * *', () => {
sendMail();
});

mongoose.set('useFindAndModify', false);


