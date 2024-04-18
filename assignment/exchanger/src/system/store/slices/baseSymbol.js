import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const baseSymbolSlice = createSlice({
    name: "EXGHANGE_INFO",
    initialState: {
        base: "USD"
    },
    reducers: {
        changeBase: (state, action) => {
            state.base = action.payload;
        }
    }
});

export const updateBaseGetData = createAsyncThunk(
    "symbols/updateBaseAndData", 
    async (symbol, { dispatch, getState }) => {
        console.log(symbol);
        dispatch(changeBase(symbol));
        
        // api 요청

        // api data return
    }
);

export const { changeBase } = baseSymbolSlice.actions;
export default baseSymbolSlice.reducer;