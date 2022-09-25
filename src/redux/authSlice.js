import {createSlice} from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "user", initialState: {'name': '', 'token': '', 'notes': [], 'id': ''}, reducers: {
        add_auth: (state, action) => {
            return action.payload
        },
    }
});

export const {add_auth} = authSlice.actions;

export default authSlice.reducer