import { useState } from 'react'
import React from 'react'
import "react-toastify/dist/ReactToastify.css";
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './components/Login'
import Register from './components/Register'
import DestinationDetail from './pages/DestinationDetail'
import BookingPage from './pages/BookingPage'
import { ToastContainer } from 'react-toastify'
import OfferPage from './pages/OfferPage';

function App() {


  return (
   
 
  <BrowserRouter>
 <Routes>
  <Route path="/" element={<Home/>}/>
     <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/destination/:name" element={<DestinationDetail/>} />
        <Route path="/booking" element={<BookingPage/>} />
        <Route path="/offer" element={<OfferPage/>}/>

 </Routes>
  <ToastContainer position="top-center" autoClose={3000} />
  </BrowserRouter>


  
  )
}

export default App
