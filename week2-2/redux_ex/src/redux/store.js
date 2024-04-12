import {combineReducers, createStore} from 'redux';

// 스토어가 뭐야?
// -> 전역저장소, 값과 그 값을 바꿔주는 애로 구성되어있다.
// const store = createStore(reducer, middleware);
// 스토어는 한개여야 하기 때문에 리듀서를 여러개 만들게되면 한개로 묶어야한다.
// 미들웨어 또한 여러개를 쓸거면 한개로 묶어야한다.
// ==> const rootReducer = combineReducers({넣고싶은 리듀서});

// const rootReducer = combineReducers({"cat": cat});

// const store = createStore(rootReducer);

import dog from './slices/dog';
import cat from './slices/cat';
import { configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
    dog,
    cat,
});

const store = configureStore({reducer: rootReducer});
export default store;