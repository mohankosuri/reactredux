import { hasFormSubmit } from '@testing-library/user-event/dist/utils'
import { Button } from 'bootstrap'
import React, { useState } from 'react'

const Todolist = () => {
   const[value,setValue]=useState("")
   const[todolist,setTodolist]=useState([])

const Handlesubmit =(e)=>{
    e.preventDefault()
    let templist = todolist
    templist.push(value)
    setTodolist(templist)
    console.log(todolist)
    setValue("")
}
    

  return (
    <div>
      <form onSubmit={Handlesubmit}>
      <div> 

      
      <input type='text' value={value} onChange={(e)=>setValue(e.target.value)}/>
    </div>
     

    <button>Add</button>
      
      
      </form>


      <div>{todolist.map((x ,index)=><ul key={index}><li>{x}</li></ul>)}</div>
    
    </div>
  )
}

export default Todolist