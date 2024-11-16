import React, { useEffect } from 'react'
import Chatuser from './Chatuser'
import Messages from './Messages'
import Typesend from './Typesend'
import useConversation from '../../zustand/useConversation.js'
import { useAuth } from '../../context/Authprovider.jsx'
import { CiMenuFries } from "react-icons/ci";

const Right = () => {
  const {selectedConversation,setSelectedConversation}=useConversation();
  useEffect(()=>{
    return setSelectedConversation(null)
  },[setSelectedConversation])
  return (
    <div className='w-full bg-gray-200 text-gray-300'>
    <div>
      {!selectedConversation?(<NoChatSelected/>): (<>
      <Chatuser/>
      <div id='flax-1' className=' overflow-y-auto ' style={{minHeight:"84vh"}}>
      <Messages/>
      </div>
      <Typesend/>
  
      </>)}
    </div>
    </div>
  );
}

export default Right;

const NoChatSelected=()=>{
  const [authUser]=useAuth();
  console.log(authUser);
  return (
    <>
    <div className="relative">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-ghost drawer-button lg:hidden absolute left-5"
        >
          <CiMenuFries className="text-white text-xl" />
          </label>

    <div className='flex h-screen items-center justify-center'>
      <h1 className='text-center text-black'>
        Welcome <span className='font-semibold text-xl text-black '>{authUser.user.fullname}</span>
        <br />
        No chat selected, please start conversation by selecting anyone from your contacts
      </h1>
    </div>
    </div>
    </>
  )
}