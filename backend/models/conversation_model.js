import mongoose, { mongo } from "mongoose";
import User from "./user_model.js";
import Message from "./message_model.js";

const conversationSchema=new mongoose.Schema({
  members:[
    {
        type:mongoose.Schema.Types.ObjectId,
        ref: User,
    },
  ],
  messages:[
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:Message,
        default:[]
    },
  ],
},{timestamps:true});

const Conversation=mongoose.model("Conversation",conversationSchema);

export default Conversation;