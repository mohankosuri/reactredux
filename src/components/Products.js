import React,{useState,useEffect} from 'react'

const Products = () => {

    const[data,setData]=useState([])

    const fetchdata =async()=>{
        const res =await fetch("https://fakestoreapi.com/products")
        const json = await res.json()
        setData(json)
        console.log(json)
}

useEffect(()=>{
 fetchdata()
},[])

  return (
    <div className='flex flex-wrap gap-3 mx-1 mt-4'>
        {data.map((item)=>
          <div >
    <div class="card" key={item.id} className='w-[300px] h-[400px] border-2 border-red-400 shadow-md bg-pink-200'>
    <img src={item.image} class="card-img-top" alt="..." className='w-[100px] h-[100px] ml-[100px] mt-7'/>
    <div class="card-body" className='mt-10'>
      <h5 class="card-title">{item.title}</h5>
      <p class="card-text" className='text-red-400 ml-[100px]'>{item.category}</p>
      <h5 class="card-title" className='ml-10'>INR:{item.price}</h5>
     <div className='ml-10'> <button className='bg-green-500 text-white px-4 py-2 text-center'>Add to Cart</button></div>
    </div>
  </div>

      
    </div>)}
    
    
    </div>
  )
}

export default Products