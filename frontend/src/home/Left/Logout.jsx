import axios from 'axios';
import React, { useState } from 'react'
import Cookies from "js-cookie";
import { BiLogOut } from "react-icons/bi";
import toast from 'react-hot-toast';

const Logout = () => {
  const [loading,setLoading]=useState(false);
  const handleLogout=async()=>{
   setLoading(true);
   try {
    const res=await axios.post("/api/user/logout");
    localStorage.removeItem("ChatApp");
    Cookies.remove("jwt");
    setLoading(false);
    toast.success("Logged out successfully");
    window.location.reload();
   } catch (error) {
    console.log("Error in logout ",error);
    toast.error("Error in logging out!");
   }
  }
  return (
      <div className='h-[10vh] bg-gray-900'>
     <div className='pt-2'>
     <BiLogOut onClick={handleLogout} className="text-5xl text-white hover:bg-slate-700 duration-300 cursor-pointer rounded-full p-2 ml-2 mt-1"/>
     </div>
    </div>
  )
}

export default Logout
