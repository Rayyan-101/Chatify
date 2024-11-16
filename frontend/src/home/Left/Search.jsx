import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import userGetAllUsers from '../../context/userGetAllUsers';
import useConversation from '../../zustand/useConversation';
import toast from 'react-hot-toast';

const Search = () => {
  const [search,setSearch]=useState("");
  const [allUsers]=userGetAllUsers();
  const {setSelectedConversation}=useConversation();
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(!search) return;
    const conversation=allUsers.find((user)=> user.fullname?.toLowerCase().includes(search.toLowerCase()))
    if(conversation){
      setSelectedConversation(conversation);
      setSearch("");
    }else{
      toast.error("User not found");
    }
  }

  return (
    <div className='h-[8vh]  bg-gray-800 items-center'>
      <div className='px-0 py-4'>
    <form onSubmit={handleSubmit}>
      <div className='flex space-x-3'>
    <label className="border-[1px] h-12 border-gray-900 bg-gray-800 rounded-lg p-3 flex items-center gap-2 w-[86%] ml-2">
  <input type="text" className="grow outline-none bg-transparent" placeholder="Search" value={search} onChange={(e)=>setSearch(e.target.value)} />
  <button>
<FaSearch  className="h-6 text-5xl  hover:bg-gray-600 rounded-full duration-300" />
</button>
</label>
{/* <button>
<FaSearch  className="text-5xl px-2 hover:bg-gray-600 rounded-full duration-300" />
</button> */}
</div>
    </form>
    </div>
    </div>
  )
}

export default Search
