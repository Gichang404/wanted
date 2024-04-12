// 슬라이스는 액션 생성함수 + 리듀스 함수
import {createSlice} from "@reduxjs/toolkit"

// cat이라는 모듈을 만들고 거기에다가 값은 이거야, 이거는 이렇게 바꾸고 싶어


// 값은 이거야!
const initialState = {
    cat_arr : [],
};

const catSlice = createSlice({
    name : 'CAT',
    initialState,
    reducers: {
        addCat: (state, action) => {
            state.cat_arr.push(action.payload.cat);
        }
    }
})

export const {addCat} = catSlice.actions;



// // 값이 있으면 이 값을 바꿀 수 있는 무언가도 있어야 한다.

// // action을 만들어야 해

// // action을 만들 때에는 두개가 필요해
// // action type : 이건 뭔지 알려주는 것
// // 이 액션이 일어나면 값이 어떻게 바뀌어야함

// const getCatArr = (cat) => {
//     return {
//         type: "GET",
//         cat,
//     }
// }

// const addCat = (cat) => {
//     return {
//         type: 'ADD',
//         cat,
//     }
// }

// export default function reducer(state = initalState, action = {}) {
//     // 각각 어떤 일이 일어나느지 알려줘야함
//     switch(action.type) {
//         case "GET":
//             return state
//         case "ADD":
//             return {...state, cat_arr: []};
//             // reducer는 순수함수여야 한다. 때문에 state값을 변경하면 안되기에 ... 문법 사용
//         default:
//             return state;
//     }
// }