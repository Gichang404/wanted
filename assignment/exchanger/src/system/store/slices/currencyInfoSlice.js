import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { dateFormatter, filterArray, isInArray } from "../../../function/utility/utility";
import { getLatest } from "../../api/api";

const currencyInfoSlice = createSlice({
    name: "CURRENCY_INFO",
    initialState: {
        base: "USD",
        symbols: ["USD", "CAD", "KRW", "HKD", "JPY", "CNY"],
        latest: {}
    },
    reducers: {
        changeBase: (state, action) => {
            if (isInArray(state.symbols, action.payload)) {
                state.base = action.payload;
            } else {
                console.log("잘못된 심볼입니다.")
            }
        },
        setLatest: (state, action) => {
            state.latest = action.payload;
        },
        addSymbols: (state, action) => {
            state.symbols.push(action.payload);
        },
        removeSymbols: (state, action) => {
            if (isInArray(state.symbols, action.payload)) {
                const targetIndex = state.symbols.indexOf(action.payload);
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
        const symbols = getState().currencyInfo.symbols;
        dispatch(changeBase(symbol));
        // api 요청
        try {
            const data = await getLatest(symbol, filterArray(symbol, symbols));
            const { date, rates } = data;
            dispatch(setLatest({ date: dateFormatter(date), rates }));
        } catch (error) {
            console.log(error);
        }
    }
);

export const { changeBase, addSymbols, removeSymbols, setLatest} = currencyInfoSlice.actions;
export default currencyInfoSlice.reducer;