import {configureStore} from "@reduxjs/toolkit";
import registerSlice from "./registerSlice";
import authSlice from "./authSlice";

export default configureStore({
    reducer: {
        register: registerSlice, auth: authSlice
    }
});