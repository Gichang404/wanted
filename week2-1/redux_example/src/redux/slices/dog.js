import {createSlice} from '@reduxjs/toolkit'

// 초기화
const initialState = {
    dog_arr: [],
};

const dogSlice = createSlice({
    name: "DOG",
    initialState,
    reducers: {
        addDog: (state, action) => {
            console.log(state, action);
            state.dog_arr.push(action.payload);
            // immer를 내장하고 있기 떄문에 사용 가능
            // immer : 불변성을 유지해주는 툴 => state를 바꾸는 것이 아니라 새로운 state를 생성
        }
    }
});

export const {addDog} = dogSlice.actions;
export default dogSlice.reducer;