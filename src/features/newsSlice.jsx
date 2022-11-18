import { createSlice } from "@reduzjs/toolkit";

const initialState = {
    user:null,
};

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        setUser:(state, { payLoad}) => {
            state.user = payload;
        },
        clearUser:(state) => {
            state.user = null;
        },
    },
});

export const x = () => {

}

export const { setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;