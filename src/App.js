import React from 'react';
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';


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

        
     </Routes>
     
    </div>
  );
}

export default App;
