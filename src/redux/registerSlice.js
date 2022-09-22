import {createSlice} from "@reduxjs/toolkit";

export const registerSlice = createSlice({
    name: "register", initialState: -1, reducers: {
        togleRegister: (state, action) => {
            return action.payload.chosen
        },
    }
});

export const {togleRegister} = registerSlice.actions;

export default registerSlice.reducer