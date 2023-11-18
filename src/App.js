import React,{useState,useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './components/Products';
import { Route,Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
 
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
 

function App() {

 const[show,setShow]= useState(true)
 
 const products =[{id:1,name:"laptop",price:100},
                  {id:2,name:"mobile",price:300},
                  {id:3,name:"car",price:600},
                  {id:4,name:"van",price:800}]

const car=["honda","maruthi","bmw"]
 const price =[30,40,67,49,27]
 const dis=price.map((item)=>item*10/100)
 console.log(dis)
  
return show ?  <div>
<Navbar/>

 <Routes>
    <Route path='/Dashboard' element={<Dashboard/>}></Route>
    <Route path='/products' element={<Products/>}></Route>
    <Route path='/AboutUs' element={<AboutUs/>}></Route>
    <Route path='/ContactUs' element={<ContactUs/>}></Route>
    <Route path='/Cart' element={<Cart/>}></Route>
 
 
 </Routes>


</div>:<div> hello
 
</div>

 
  
}

export default App;
