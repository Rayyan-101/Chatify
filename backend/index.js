import express from "express";
import dotenv from "dotenv";
import mongoose from 'mongoose';
import cors from "cors";
import userRoute from "./routes/user_route.js"
import cookieParser from "cookie-parser";
import messageRoute from "./routes/message_route.js";
import {app, server} from "./socketIO/server.js"

app.use(cors());
app.use(express.json());
dotenv.config();
app.use(cookieParser());
const PORT=process.env.PORT || 5000;
const URI=process.env.URI;

main().then(()=>{
    console.log("connected to db");
}).catch((err)=>{
    console.log(err)
});

async function main(){
    await mongoose.connect(URI);
}

app.use("/api/user",userRoute);
app.use("/api/message",messageRoute);

server.listen(PORT,()=>{
    console.log(`Server is listening on port ${PORT}`);
})