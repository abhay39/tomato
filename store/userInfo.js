import {createSlice} from '@reduxjs/toolkit';
import { act } from 'react';

const UserDetails=createSlice({
    name:"UserDetails",
    initialState:{
        userInfo:'',
        userCart:[]
    },
    reducers:{
        addUserDetails:(state,action)=>{
            state.userInfo=action.payload;
            return state;
        },
        addToCart:(state,action)=>{
            // console.log(action.payload.qty)
            const checkIfExits=state.userCart.find((item)=>item.item._id==action.payload.item._id);
            if(checkIfExits){
                checkIfExits.qty=action.payload.qty;
                return state;
            }else{
                state.userCart.push({
                    item:action.payload.item,
                    qty:action.payload.qty
                })
            }
            return state;
        },
        removeFromCart:(state,action)=>{
            // console.log(action.payload.qty)
            const checkIfExits=state.userCart.find((item)=>item.item._id==action.payload.item._id);
            
            
            if(checkIfExits){
                checkIfExits.qty=action.payload.qty;
                return state;
            }else{
                state.userCart.push({
                    item:action.payload.item,
                    qty:action.payload.qty
                })
            }
            return state;
        },
        removeItemFromCart: (state,action)=>{
            
            const checkIfExits=state.userCart.find((item)=>item.item._id==action.payload.item._id);
            if(checkIfExits){
                state.userCart=state.userCart.filter((item)=>item.item._id!=action.payload.item._id);
            }
            return state;
        }
    }
})

export const {addToCart,removeFromCart,removeItemFromCart,addUserDetails}=UserDetails.actions;

export default UserDetails;