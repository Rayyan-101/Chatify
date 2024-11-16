import React from 'react'
import useConversation from '../../zustand/useConversation.js';
import { useSocketContext } from '../../context/SocketContext.jsx';


const User = ({user}) => {
  const {selectedConversation,setSelectedConversation}= useConversation();
  const {socket,onlineUsers}=useSocketContext()
  const isSelected=selectedConversation?._id===user._id;
  const isOnline=onlineUsers.includes(user._id);

  return (
    <div className={`hover:bg-gray-900 duration-300 ${isSelected?"bg-gray-900" : ""}`} onClick={()=> setSelectedConversation(user) }>
      <div className='flex space-x-4 px-8 py-3 hover:bg-gray-900 duration-300 cursor-pointer'>
      <div className={`avatar ${isOnline ? "online": ""}`}>
  <div className="w-12 rounded-full">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
  </div>
   </div>
   <div>
    <h1 className='font-bold text-gray-50 '>{user.fullname}</h1>
    <span className='text-gray-200'>{user.email}</span>
   </div>
      </div>      
    </div>
  )
}

export default User
