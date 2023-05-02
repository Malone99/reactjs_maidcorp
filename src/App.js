import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Content from './components/Content';
import ContentGrid from './components/ContentGrid';
import Newsletter from './components/Newsletter';
import Profile from './components/Profile';


function App() {
  return (
    <div >
     <Navbar></Navbar>
     <Content/>
     <ContentGrid/>
     <Newsletter/>
     <Profile/>
    </div>
  );
}

export default App;
