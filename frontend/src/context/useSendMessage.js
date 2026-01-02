import React, { useState } from 'react'
import useConversation from '../zustand/useConversation';
import axios from 'axios';

const useSendMessage = () => {
    const [loading,setLoading]=useState(false);
    const {messages,setMessage,selectedConversation}=useConversation();

    const sendMessages=async(message)=>{
        setLoading(true);
     //   if(selectedConversation && selectedConversation._id){
            try {
                const res=await axios.post(`/api/message/send/${selectedConversation._id}`,{message});
                setMessage([...messages,res.data]);
                setLoading(false);
            } catch (error) {
             console.log("Error in sending messages",error);
             setLoading(false);   
            }
      //  }
    }

  return {loading,sendMessages};
};

export default useSendMessage;
