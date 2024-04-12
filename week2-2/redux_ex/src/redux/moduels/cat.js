// cat module 작성

const initialState = {
    cat_arr: ['펄이', '루비'],
};


// 액션의 트리거가 될 Type
const ADD = 'cat/ADD';

// 액션생성 함수 => 우리가 할 액션을 만드는 것
export const addCat = (cat_name) => {
    return {
        type: ADD,
        cat: cat_name,
    };
}

// reducer, 액션함수 처리는 리듀서 안에서 행해저야 한다.
export default function cat (state=initialState, action) {
    console.log(action, 'action', state, 'state')
    if (action.type === ADD) {
        return {cat_arr: [...state.cat_arr, action.cat]};
    }

    return state;
}