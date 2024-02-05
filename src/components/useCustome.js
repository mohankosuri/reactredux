import React,{useEffect} from 'react'

const useCustome = (count) => {


    useEffect(() => {
         document.title = `count-${count}`
    }, [count]);
  
  
    
}

export default useCustome