import {createStore, combineReducers} from 'redux';

import cat from "./modules/cat";
import dog from "./slices/dog";

const rootReducer = combineReducers({
    cat,
    dog,
})

// const store = createStore([값을 넣어줘야함], [미들웨어 자리]);
const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// export default store;