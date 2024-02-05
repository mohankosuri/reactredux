import { createContext, useReducer, useState } from "react";
import reducer, { initialState } from "./reducer";
import { current } from "@reduxjs/toolkit";

export const StoreContext = createContext()
 
export const StoreProvider = ({children})=>{
    const [state,dispatch] =useReducer(reducer,initialState);
   
    const addToCart =(product)=>{
           const updatedCart= state.Products
           updatedCart.push(product);


           updatePrice(updatedCart);
           dispatch({
            type:"add",
            payload: updatedCart
           })
    }

    const removeCart =(product)=>{
        const  updatedCart= state.Products.filter((currentProduct)=>currentProduct.name !== product.name)
           updatedCart.push(product);

           updatePrice(updatedCart);

           dispatch({
            type:"remove",
            payload: updatedCart
           })
    }

    const updatePrice =(products)=>{
             let total = 0;

             products.forEach(product=>{
                    total += product.price
             })

             dispatch({
                type:"update price",
                payload: total
             })
    }

    const value={
        total:state.total,
        products:state.Products,
        addToCart,
        removeCart
    }

    return <StoreContext.Provider value={value}>
        {children}
    </StoreContext.Provider>
}