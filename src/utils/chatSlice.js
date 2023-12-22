import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LIVE_CHAT } from "./constants";

const chatSlice = createSlice({
    name: " chat",
    initialState:{
        message:[]
    },
    reducers:{
        addMessages:(state,action)=>{
               state.message.splice(OFFSET_LIVE_CHAT,1);
                state.message.unshift(action.payload);
            
        }
    }
})

export const {addMessages} = chatSlice.actions
export default chatSlice.reducer;