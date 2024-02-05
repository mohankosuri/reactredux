 import React,{useContext} from 'react'
 import { StoreData } from './Data'
 import Productsdata from './Productsdata'
 import { Themecontext } from '../Context/ThemeContext'
 import Usereducer from './Usereducer'
 
 
 import Card from './Card'
 const Home = () => {
  
  const cliking =()=>{
    alert("hello")
  }

  const thems1 =useContext(Themecontext)
  console.log(thems1)
  
   return (
     <div>
     
     
       <h2 className='text-4xl tracking-wide py-4 pl-8'>New Items</h2>
      <div className='flex flex-col lg:grid lg:grid-cols-3 items-center gap-4'>
       
      {StoreData.map((item,i)=>
        <Productsdata key={i} item={item}/>

        
 )}
      
      </div>


       
     </div>
   )
 }
 
 export default Home