import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";


const initialState = [
    {
        id: 1,
        title: 'learning redux toolkit',
        content: 'i have heard good things of redux tool kit',
        date: sub(new Date(),{minutes:10}).toISOString()
    },
    {
        id: 2,
        title: 'slices......',
        content: 'slices are the core part of redux toolkit',
        date: sub(new Date(), {minutes: 5}).toISOString()
    },
]


const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers:{
        postAdded: {
            reducer(state,actions){
                state.push(actions.payload)
            },
            prepare(title,content,userId){
                return{
                    payload:{
                        id: nanoid(),
                        title,
                        content,
                        date: new Date().toISOString(),
                        userId,
                    }
                }
            }
        }
    }
})

export const selectAllPosts = (state) => state.posts

export const {postAdded} = postSlice.actions


export default postSlice.reducer