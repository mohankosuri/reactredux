import React,{useContext} from 'react'
import { StoreContext } from '../contexts/StoreContext'

const Basket = ({item}) => {

    const {removeCart}= useContext(StoreContext)

    const handleremove=()=>{
        removeCart(item)
    }
  return (
    <div className='flex flex-row'>
       <img src={item.image}/>

       <div>
          <p>{item.name}</p>
          <p>{item.price}</p>
       </div>

       <button onClick={handleremove}>Remove</button>
    </div>
  )
}

export default Basket