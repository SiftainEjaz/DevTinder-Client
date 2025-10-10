import {configureStore} from '@reduxjs/toolkit';
import userReducer from './userSlice.js';
import feedReducer from './feedSlice.js';
import connectionSlice from './connectionSlice.js';
import requestReducer from './requestSlice.js';

const appStore = configureStore({
    reducer :{
        user : userReducer,
        feed : feedReducer,
        connections : connectionSlice,
        requests : requestReducer
    }
}) 

export default appStore;