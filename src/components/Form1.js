import React,{useState} from 'react'

const Form1 = () => {

    const[value,setValue]=useState({
        firstname:"",
        lastname:""
    })

 const Handlechange =(e)=>{
    setValue({...value,[e.target.name]:e.target.value})
 }

 const Handlesubmit=(e)=>{

    
    e.preventDefault()

    console.log(value)
 }

  return (
    <div className='p-[50px]'>
    <form onSubmit={Handlesubmit}>
    <div>
    <label htmlFor='firstname'>
     Firstname
    </label>
    <input type='text' name='firstname' id='firstname'  value={value.firstname} onChange={Handlechange}/>
    </div>

    <div>
    <label htmlFor='lastname'>Lastname</label>
    <input type='text' name='lastname' id='lastname' value={value.lastname} onChange={Handlechange}/>
    </div>

    <button type='submit'>submit</button>
    </form>
    </div>
  )
}

export default Form1