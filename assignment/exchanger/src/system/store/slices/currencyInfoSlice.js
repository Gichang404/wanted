import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const isInArray = (arr, target) => {
    const index = arr.indexOf(target);
    if (index !== -1) {
        return true
    }

    return false
}

const currencyInfoSlice = createSlice({
    name: "CURRENCY_INFO",
    initialState: {
        base: "USD",
        symbols: ["USD", "CAD", "KRW", "HKD", "JPY", "CNY"],
    },
    reducers: {
        changeBase: (state, action) => {
            if (isInArray(state.symbols, action.payload)) {
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
const test = (input) => {
    console.log('REDUX THUNK 에서 뭔가 하는 함수 input::', input);
}

export const updateBaseGetData = createAsyncThunk(
    "symbols/updateBaseAndData", 
    async (symbol, { dispatch, getState }) => {
        dispatch(changeBase(symbol));
        test(symbol)
        // api 요청

        // api data return
    }
);

export const { changeBase, addSymbols, removeSymbols } = currencyInfoSlice.actions;
export default currencyInfoSlice.reducer;