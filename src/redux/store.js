import {configureStore} from '@reduxjs/toolkit'
import todoreducer from './slice/Todoslice'


export const store = configureStore({
    reducer:{
         todo:todoreducer,
    }
})