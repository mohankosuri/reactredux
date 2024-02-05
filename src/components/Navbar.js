import React, { useState,useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { SearchBox } from '@fluentui/react/lib/SearchBox';
import useCustome from './useCustome';
import Button from './Button';
import Count from './CounterContext';
import {UserContext} from './UserContext';
import Logo from '../images/logo1.svg'
import {Logincontext} from '../contexts/UserContext'
import { StoreContext } from '../contexts/StoreContext';
import Card from './Card';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';

import { Themecontext } from '../Context/ThemeContext';




 
import profile from '../images/contact.jpg'


const Profileimage ="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"

const styles={
  navitems:"text-black hover:text-red-500 no-underline font-serif font-semibold"
}
 

const Navbar = (props) => {

     const countuser=useContext(UserContext)
     
     const { userName } = useContext(UserContext);
     
     const {total}=useContext(StoreContext)
     
   const {theme,setTheme,movies,profile,setProfile}=useContext(Themecontext)

    const date =new Date()
    const d=date.getDate()
    const v =date.getDay()

    const logOut = () => {
      googleLogout();
      setProfile(null);
   };
    

  return (
    <div className='flex'>
   
    <div className="navbar bg-gradient-to-r from-blue-400 to-blue-100">
    <div className="flex-1 space-x-4 ml-4">
    <img src={Logo} width={100} alt='logo'></img>
    <div>
    <SearchBox placeholder="Search" onSearch={newValue => console.log('value is ' + newValue)} className='w-[400px]'/>
    </div>
       {countuser.value}
        
      <NavLink className={styles.navitems} to={'/products'}>Products</NavLink>
      <NavLink className={styles.navitems} to={'/dashboard'}>Dashboard</NavLink>
      <NavLink className={styles.navitems} to={'/aboutus'}>About</NavLink>
      <NavLink className={styles.navitems} to={'/contactus'}>Contact</NavLink>
      <NavLink className={styles.navitems} to={'/form'}>Form</NavLink>
      <NavLink className={styles.navitems} to={'/'}>Home</NavLink>
       <Card/>
       
    </div>
    
    <div className="flex-none">
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            
          </div>
        </label>
        <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
          <div className="card-body">
            <span className="font-bold text-lg">{total}</span>
            <span className="text-info">Subtotal:{props.value}</span>
            <div className="card-actions">
              <NavLink className="btn btn-primary btn-block" to={'/Cart'}>View cart</NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-5 rounded-full">
            <img src={profile.picture} alt='profile' width={10} height={10} />
          </div>
        </label>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <li className='ml-3'>
          {profile.name}
            
          </li>
          <li><a>Settings</a></li>
          
         <li>
         <button onClick={logOut}>Logout</button>
         </li>
        </ul>
      </div>
      <div>
       
      
      </div>

      
    </div>
  </div>
    
    </div>
  )
}

export default Navbar