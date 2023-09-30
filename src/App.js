import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Signup from './component/Signup';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './component/Login';
import Home from './component/Home';
import Contact from './component/Contact';

function App() {

  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Signup />} ></Route>
    <Route path='/login' element={<Login />} ></Route>
    <Route path='/home' element={<Home />} ></Route>
    <Route path='/contact' element={<Contact />}></Route>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
