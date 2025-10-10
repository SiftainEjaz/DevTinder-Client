import { createSlice } from "@reduxjs/toolkit";

const requestSlice = createSlice({
    name : 'requests',
    initialState : [],
    reducers : {
        addRequests : (state,action) => {
            return action.payload;
        },
        removeRequests : () => {
            return null;
        },
        updateRequests : (state,action) => {
            return state.filter((request) => request.fromUserId._id !== action.payload)
        }

    }
})

export const {addRequests, removeRequests, updateRequests} = requestSlice.actions;

export default requestSlice.reducer;