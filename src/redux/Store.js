import { configureStore } from "@reduxjs/toolkit";
//import { counterslice } from "./Slices/Counter";
import counterReducer from './Slices/Counter/index'

export const store=configureStore({
    reducer:{
        counter:counterReducer
    }
});