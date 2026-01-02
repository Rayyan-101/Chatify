import React, { useState } from 'react'
import { IoSend } from "react-icons/io5";
import useSendMessage from '../../context/useSendMessage.js';
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import { MdOutlineEmojiEmotions } from "react-icons/md";


const Typesend = () => {
  const {loading,sendMessages}=useSendMessage();
  const [message,setMessage]=useState("");
  const [showPicker, setShowPicker] = useState(false);

  const handleSubmit=async(e)=>{
    e.preventDefault();
    await sendMessages(message);
    setMessage("");
  }

  return (
  <form onSubmit={handleSubmit}>
    <div className='flex fixed bottom-1 w-full space-x-1 h[8vh] bg-white'>
    <div className='w-[70%] mx-4 flex'>
    {/* <Picker data={message} onEmojiSelect={(d)=>{
     setMessage(d.native)
    }} /> */} 


    <MdOutlineEmojiEmotions 
        className="text-3xl text-gray-600 mt-4 mr-3" 
        onClick={() => setShowPicker(!showPicker)}
      />

      {showPicker && (
        <div className="absolute bottom-12"> 
        <Picker 
          onEmojiSelect={(emoji) => setMessage((prevMessage) => prevMessage + emoji.native)} 
        />
        </div>
      )}

      <input style={{border:"1px solid gray"}} type="text" placeholder="Type a message" value={message} onChange={(e)=>setMessage(e.target.value)} className="border border-gray-300 text-gray-600 rounded-xl outline-none mt-1 mb-1 px-4 py-3 w-full bg-white" />
    </div>
    <button className='bg-white px-4 mb-2 items-center rounded-md mt-3 justify-center'>
        <IoSend className=' bg-gray-600 p-2 rounded-full h-10 w-10 text-white' /> 
    </button>
    </div>
  </form>
  );
}

export default Typesend;
