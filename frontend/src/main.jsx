import React from "react";
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Authprovider } from "./context/Authprovider.jsx"
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { SocketProvider } from './context/SocketContext.jsx'

createRoot(document.getElementById('root')).render(
 <BrowserRouter>
 <Authprovider>
    <SocketProvider>
    <App />
    </SocketProvider>
  </Authprovider>
 </BrowserRouter>
  
   
)
