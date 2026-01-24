import React from 'react'

const Message = ({message}) => {
  const authUser= JSON.parse(localStorage.getItem("ChatApp"));
  const itsMe=message.senderId === authUser.user._id;

  const chatName=itsMe ? "chat-end" : "chat-start";
  const chatColor = itsMe ? " bg-sky-600" : " bg-white";
  const borderClr = itsMe ? "" : "1px solid white";
  const fontClr = itsMe ? "white" : "black";

  const createdAt=new Date(message.createdAt)
  const formattedTime=createdAt.toLocaleTimeString([],{
    hour: '2-digit',
    minute:'2-digit'
  })


  return (
    
  );
}

export default Message;
