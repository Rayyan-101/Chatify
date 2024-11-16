import React from 'react'
import Search from './Search'
import Users from './Users'
import Logout from './Logout'
import Name from './Name'

const Left = () => {
  return (
    <div className='w-full bg-gray-800 text-gray-300'>
      {/* <Search/> */} <Name/>
      <div id='flax-1' className=' overflow-y-auto bg-gray-800 pt-2' style={{minHeight:"84vh"}}>
      <Search/>
      <Users/>
      </div>
      <Logout/>
    </div>
  )
}

export default Left
