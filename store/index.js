import { configureStore }  from "@reduxjs/toolkit";
import UserDetails from "./userInfo";

const store=configureStore({
    reducer:{
        userDetails:UserDetails.reducer,
    },
})

export default store;