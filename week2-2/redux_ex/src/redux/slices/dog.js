import { createSlice } from "@reduxjs/toolkit";

// state.dog_arr.push()가 가능한 이유
// 리덕스 툴킷은 개발자 편하라고 만들어준 킷이다.
// 개발자 : 원본 값 변하지 않게 신경쓰는거 귀찮은데요?
// 리덕스 팀 : ㅇㅋ immer넣어줌 
// immer : 불변성을 지키면서 값을 바꿔주는 라이브러리 -> actions.payload를 쓰는 이유가 immer의 법칙이기 때문

const dogSlice = createSlice({
    name: 'DOG',
    initialState: {
        dog_arr: ['바둑이', '뽀삐'],
    },
    reducers: {
        addDog: (state, action) => {
            state.dog_arr.push(action.payload);
        }
    },
});

export const {addDog} = dogSlice.actions;
export default dogSlice.reducer;