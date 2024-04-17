import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const symbolsSlice = createSlice({
    name: "SYMBOLS",
    initialState: {
        base: "USD",
        select: "CAD",
        symbols: ["CAD", "KRW", "HKD", "JPY", "CNY"],
    },
    reducers: {
        changeBase: (state, action) => {
            state.base = action.payload;
        },
        changeSelect: (state, action) => {
            state.select = action.payload;
        },
        changeSymbols: (state, action) => {
            const prev_base = state.base;
            const base = action.payload;
            const index = state.symbols.indexOf(base);

            const newArray = state.symbols.filter((el) => el !== base);
            newArray.splice(
                index,
                0,
                prev_base
            );
    
            state.symbols = newArray;
        },
    },
});

export const updateBaseSymbol = createAsyncThunk(
    "Symbols/updateBaseSymbol", 
    async (base, { dispatch, getState }) => {
        console.log(base);
        const { Symbols } = getState();
        dispatch(symbolsSlice.actions.changeSymbols(base));
        dispatch(symbolsSlice.actions.changeBase(base));
        dispatch(symbolsSlice.actions.changeSelect(Symbols.symbols[0]));
    }
);

export const { changeSelect } = symbolsSlice.actions;
export default symbolsSlice.reducer;