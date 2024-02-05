import React, { useContext } from 'react';
import Grid from './Grid';
import { StoreContext } from '../contexts/StoreContext';
import Basket from './Basket';
 

 

const Cart = () => {

  const {total,products}=useContext(StoreContext)


  return (
    <div>
      <h2 className='text-4xl tracking-wide py-4 pl-4'>Your Bansket</h2>
      
          {products.map((product,i)=>
            <Basket key={i} item={product}/>)}

       
    </div>
  );
}

export default Cart;
