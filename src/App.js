import React from 'react';
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';


function App() {


  return (
    <div  >
     {/* <Navbar></Navbar>
     <Content/>
     <ContentGrid/>
     <Newsletter/>
     <Profile/>
     <Footer/> */}
     <Routes>
        <Route  path='/'  element={<Home/>}/>
        <Route path='/login'  element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
     </Routes>
     
    </div>
  );
}

export default App;
