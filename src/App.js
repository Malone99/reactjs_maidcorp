import React,{useEffect,useState} from 'react';
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import MaidList from './components/MaidList';



function App() {

  const url = "http://localhost:8080/maidcorp/api/findAll";
    const [data, setData] = useState([]);
  
    const fetchInfo = () => {
      return fetch(url)
        .then((res) => res.json())
        .then((d) => setData(d))
    }
  
  
    useEffect(() => {
      fetchInfo();
      console.log(data);
    }, []);
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
        <Route path='/maidlist' element={<MaidList list={data} />}/>
     </Routes>
     
    </div>
  );
}

export default App;
