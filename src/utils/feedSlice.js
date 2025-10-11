import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
    name : 'feed',
    initialState : [],
    reducers : {
        addFeed : (state,action) => {
            return action.payload;
        },
        updateFeed : (state,action) => {
            return state.filter((feedUser) => feedUser._id !== action.payload);
        },
        removeFeed : (state,action) => {
            return null;
        }
    }
})

export const {addFeed,updateFeed ,removeFeed} = feedSlice.actions;

export default feedSlice.reducer;