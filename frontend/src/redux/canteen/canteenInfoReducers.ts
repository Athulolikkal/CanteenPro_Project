import { createSlice } from "@reduxjs/toolkit";

interface canteenData{
    canteenId:string | undefined,
    canteenName:string | undefined,
    email:string | undefined,
    image: string | undefined,
    phone:number|undefined
}

const initialState:canteenData ={
    canteenId:undefined,
    canteenName:undefined,
    email:undefined,
    image:undefined,
    phone:undefined
    
}

const canteenInfo = createSlice({
    name:'canteenInfo',
    initialState,
    reducers:{
        addCanteenInfo:(state,action)=>{
            return action.payload
        },
        canteenInfoClear:()=>{
            return initialState
        }
    }
});

export const {addCanteenInfo,canteenInfoClear}= canteenInfo.actions;
export default canteenInfo.reducer;