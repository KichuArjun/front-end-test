import { useState } from 'react'
import { BrowserRouter,Routes,Route, Router } from 'react-router-dom'
import Home from './home'
import Hello from './frontend';
import Login from './login'
import './frontend.css';
import './levi.css'
import './livi.jpg'

function App() {
const [paths,setpaths]=useState('/')


  return (
    <BrowserRouter>
      
        <Routes>
          <Route  path={paths} element={ <Hello/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/home'  element={<Home/>}/>
             
          
        </Routes>
      
    
    </BrowserRouter>
    
  );
}

export default App;
