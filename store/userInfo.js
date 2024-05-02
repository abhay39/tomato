import {createSlice} from '@reduxjs/toolkit';

const UserDetails=createSlice({
    name:"UserDetails",
    initialState:{
        userInfo:'',
        userCart:[]
    },
    reducers:{
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
        }
    }
})

export const {addToCart,removeFromCart}=UserDetails.actions;

export default UserDetails;