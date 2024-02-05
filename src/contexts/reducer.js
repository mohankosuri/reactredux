export const initialState ={
    total:0,
    Products:[]
}

const storeReducer =(state,action)=>{
       switch (action.type) {
        case "add":
            return{
                ...state,
                Products:action.payload
            }
        case "remove":
            return{
                ...state,
                Products:action.payload
            }
        case "update price":
            return{
                ...state,
                total:action.payload
            }
       default: throw Error ("cannot match case in reducer")
        
       }
}

export default storeReducer;