import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../components/Slice"

const store = configureStore({
    reducer:{
        user:userSlice
    }
})
export default store;