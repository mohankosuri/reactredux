import React,{useContext} from 'react'
import { StoreContext } from '../contexts/StoreContext'


const Productsdata = ({item}) => {
     const {addToCart}= useContext(StoreContext)

    const handleadd=()=>{
         addToCart(item);
    }
  return (
    <div className='mx-auto px-8 border border-gray-200 rounded-lg'>
      <img src={item.image} alt='glasses'/>
      <div className='flex flex-row items-center justify-between'>
         <div> 
           <p className='text-xl '>{item.name}</p>
           <p className='text-lg'>{item.price}</p>
         
         </div>
         <button className='bg-indigo-500 text-white rounded-full p-2' onClick={handleadd}>Add to Cart</button>
      </div>
    </div>
  )
}

export default Productsdata