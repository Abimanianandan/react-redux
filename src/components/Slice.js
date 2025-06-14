import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:'user',
    initialState:{
       value:0,
       users:[]
    },
    reducers:{
        getUsers:(state,action)=>{
            state.users = action.payload;
        },
        createUsers:(state,action)=>{
            state.users.push(action.payload)
        },
        editUsers:(state,action)=>{
           const updateUser = action.payload;
              if (!updateUser || !updateUser._id) return; 
           const index = state.users.findIndex((user)=>user._id === updateUser._id);
           if(index !== -1){
            state.users[index] = updateUser;
           }
        },
        deleteUsers:(state,action)=>{
           const userId = action.payload;
           state.users = state.users.filter((user)=>user._id !== userId)
        }
    }
})

export default userSlice.reducer;
export const {getUsers,createUsers,editUsers,deleteUsers} = userSlice.actions;