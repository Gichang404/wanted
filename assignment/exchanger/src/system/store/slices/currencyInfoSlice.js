import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialSymbols = ["CAD", "KRW", "HKD", "JPY", "CNY"];

const currencyInfoSlice = createSlice({
    name: "CURRENCY_INFO",
    initialState: {
        base: "USD",
        symbols: initialSymbols,
    },
    reducers: {
        changeBase: (state, action) => {
            if (action.payload in initialSymbols) {
                state.base = action.payload;
            } else {
                console.log("잘못된 심볼입니다.")
            }
        },
        addSymbols: (state, action) => {
            state.symbols.push(action.payload);
        },
        removeSymbols: (state, action) => {
            const targetIndex = state.symbols.indexOf(action.payload);

            if (targetIndex !== -1) {
                state.symbols.splice(targetIndex, 1);
            } else {
                console.log('값을 확인해주세요.')
            }
        },
    }
});

export const updateBaseGetData = createAsyncThunk(
    "symbols/updateBaseAndData", 
    async (symbol, { dispatch, getState }) => {
        const state = getState();
        dispatch(addSymbols(state.base));
        dispatch(removeSymbols(symbol));
        dispatch(changeBase(symbol));
        
        // api 요청

        // api data return
    }
);

export const { changeBase, addSymbols, removeSymbols } = currencyInfoSlice.actions;
export default currencyInfoSlice.reducer;