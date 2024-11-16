import React from 'react'
import Right from './home/Right/Right'
import Left from './home/Left/Left'
import Signup from './components/Signup'
import Login from './components/Login'
import { Navigate, Route, Routes } from "react-router-dom";
import { useAuth } from './context/Authprovider'
import { Toaster } from 'react-hot-toast';

const App = () => {
  const [authUser,setAuthUser]=useAuth();
  console.log(authUser);
  return (
    <>
    <Routes>
    <Route path="/" element={ authUser ? (

   <div className="drawer lg:drawer-open">
   <input
  id="my-drawer-2"
  type="checkbox"
  className="drawer-toggle"
  />
  <div className="drawer-content flex flex-col items-center justify-center">
  <Right />
  </div>
   <div className="drawer-side">
  <label
    htmlFor="my-drawer-2"
    aria-label="close sidebar"
    className="drawer-overlay"
  ></label>
    <ul className="menu w-80 p-0 min-h-full bg-violet-600 text-base-content">
    <Left />
    </ul>
   </div>
    </div>

    ) : (
      <Navigate to={"/login"} />
    )}
     />
    <Route path="/login" element={authUser? <Navigate to="/" /> :<Login/>} />
    <Route path="/signup" element={authUser? <Navigate to="/" /> :<Signup/>} />
    </Routes>
    <Toaster/>
    </>
  );
}

export default App;
