import React, { useEffect, useRef } from 'react'
import Message from './Message'
import useGetMessage from '../../context/useGetMessage'
import Loading from '../../components/Loading';
import useGetSocketMessage from '../../context/useGetSocketMessage';

const Messages = () => {
  const {loading,messages}=useGetMessage();
  useGetSocketMessage();

  const lastMsgRef=useRef();
  useEffect(()=>{
    setTimeout(()=>{
      if(lastMsgRef.current){
        lastMsgRef.current.scrollIntoView({behavior : "smooth"});
      }
    },100);
  },[messages]);

  return (
    <div  className=' overflow-y-auto pb-12' style={{minHeight:"calc(92vh-8vh)"}}>
   
    {loading?(<Loading/>):(messages?.length > 0 && messages.map((message)=>(
      <div key={message._id} ref={lastMsgRef}> 
      <Message message={message}/> 
      </div>
      
    )))}

    {!loading && messages?.length === 0 && (
      <div>
        <p className='text-center mt-[20%] '>
         Say! Hi to start the conversation
        </p>
      </div>
    )}
    </div>
  )
}

export default Messages;
