import React,{useEffect,useState} from 'react';
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import MaidList from './components/MaidList';
import DashboardSideBar from './components/DashboardSideBar';
import Dashboard from './pages/Dashboard';
import SearchBar from './components/SearchBar';
import Navigation from './components/Navigation';
import About from './components/About';
import Footer from './components/Footer';





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
     <Navigation/>
     <Routes>
        <Route  path='/'  element={<Home/>}/>
        <Route path='/login'  element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/maidlist' element={<MaidList list={data} />}/>
        <Route path='/dash' element={<DashboardSideBar/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/nav' element={<Navigation/>}/>
        <Route path='/about' element={<About/>}/>
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
