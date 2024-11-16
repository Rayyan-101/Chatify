import React from 'react'
import User from './User'
import userGetAllUsers from '../../context/userGetAllUsers'

const Users = () => {
  const [allUsers,loading]=userGetAllUsers();
  console.log(allUsers);
  return (
    <div>
      <h1 className='px-8 py-2 mt-2 text-white font-semibold bg-gray-800 rounded-md' >Messages</h1>
      <div id='flax-1' className='py-2 overflow-y-auto ' style={{maxHeight: '74vh'}}>
        {allUsers.map((user,index)=>(
           <User key={index} user={user} />
        ))
        }
      </div>
    </div>
  )
}

export default Users
