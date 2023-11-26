import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Products from './component/Products'
import About from './component/About'
import Login from './component/Login';
import Register from './component/Register';
import ForgotPassword from './component/ForgotPassword';
import ResetPassword from './component/ResetPassword';


import {Routes, Route, BrowserRouter, Router} from 'react-router-dom';
import Product from './component/Product';
function App() {
  return (
  <div>
 
    <Navbar/>
  <Routes>
    <Route exact path="/" element={<Login/>}/>
    <Route path="/home" element={<Home/>} />
    <Route path="/products" element={<Products/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/products/:id" element={<Product/>} />
    <Route exact path="/register" element={<Register/>}/>
    <Route path="/forgotpassword" element={<ForgotPassword/>}/>
    <Route path="/reset/:token" element={<ResetPassword/>}/>
   
    
    
  </Routes>
  
  
  </div>

  );
}

export default App;
