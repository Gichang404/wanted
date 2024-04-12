import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cat_arr: ['펄이', '루비'],
};

const catSlice = createSlice({
    name: 'CAT',
    initialState,
    reducers: {
        addCat: (state, action) => {
            state.cat_arr.push(action.payload);
        }
    }
});

export const { addCat } = catSlice.actions;
export default catSlice.reducer;