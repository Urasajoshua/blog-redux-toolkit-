import { configureStore } from "@reduxjs/toolkit";
import postReducer from '../../app/features/Post/PostSlice'
import userReducer from '../../app/features/users/UsersSlice'


const store = configureStore({
    reducer:{
        posts:postReducer,
        users:userReducer,
    }
})


export default store