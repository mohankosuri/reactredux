 import React, { useState } from 'react'
 import { ToastContainer, toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';
 import Card from './Card';
 
 const Form = () => {


  const [value,setValue]=useState({
    mobileNumber:"",
    emailAddress:""
  })
  const [emailerror, setEmailerror] = useState('');
  const [mobileerror, setMobileerror] = useState('');
  const Handlechange=(e)=>{
    setValue(prevData => ({ ...prevData, [e.target.name]: e.target.value }));
  }

  const postingdata =async(e)=>{
    e.preventDefault();

   if(!value.emailAddress){
    setEmailerror("please enter Email...")
   }else if(!value.mobileNumber){
    setMobileerror("plese enter Mobile")
   }

 

    
    
    try {
      const response = await fetch('https://localhost:7090/api/User/signup', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(
            value
         
        ),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log(data);
      toast.success("Registration successful....!", {
        position: toast.POSITION.TOP_RIGHT
      });

      
    } catch (error) {
      console.error('Error:', error);

      toast.error("User Alredy Exit....!", {
        position: toast.POSITION.TOP_RIGHT
      });
      
    }
    setValue({emailAddress:"",mobileNumber:""})
   
  }
   return (
    <div class="login-box">
    <ToastContainer autoClose={2000} />
    <form onSubmit={postingdata}>
      <div class="user-box">
        <input type="text" name="emailAddress" required="" value={value.emailAddress} onChange={Handlechange}/>
        <label htmlFor='emailAddress'>Email</label>
      </div>
       <p className='text-green-300'>{emailerror}</p>
      <div class="user-box">
        <input type="text" name="mobileNumber" required="" value={value.mobileNumber}  onChange={Handlechange}/>
        <label htmlFor='mobileNumber'>Mobile</label>
      </div>
      <p className='text-green-300'>{mobileerror}</p>
      
      <center>
      <button type='submit'>
             SEND
         <span></span>
      </button></center>
    </form>


  
   
  </div>
   )
 }
 
 export default Form