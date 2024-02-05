import React,{useReducer,} from 'react'


 

const Usereducer = () => {

    const initialState ={count:0}

    const reducer= (state,action)=>{
        switch (action.type) {
            case "incre":{return {count:state.count+1}}
            break;
            case "decre":{return {count:state.count-1}}

            case "rese":{return {count:0}}
            default:{
                return state
            }
                 
        }
    }



   const[state,dispatch]= useReducer(reducer,initialState)
    


   const incre =()=>{
    dispatch({type:"incre"})
   }

   const decre =()=>{
    dispatch({type:"decre"})
   }

   const rese=()=>{
    dispatch({type:"rese"})
   }





  return (
    <div>Usereducer
    
       {state.count}
    
     <button onClick={incre}>click</button>
     <button onClick={decre}>click</button>
     <button onClick={rese}>click</button>
    
    </div>
  )
}

export default Usereducer