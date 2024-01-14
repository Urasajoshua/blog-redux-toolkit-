import { createSlice } from "@reduxjs/toolkit";


const initialState = [
    {
        id: 0,
        name: 'joshua urasa'
    },
    {
        id: 1,
        name: 'erick urasa'
    },
    {
        id: 2,
        name: 'eugen urasa'
    },
]

const userSlice = createSlice({
    name:'users',
    initialState,
    reducers:{}
}
)


export const selectAllUsers = (state) => state.users


export default userSlice.reducer