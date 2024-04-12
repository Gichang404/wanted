import React from "react";
import {Cat, Dog, Home} from "./Component"

// 리덕스는 훅을 제공ㅎ한다.
// 데이터를 편하게 사용하고 변경 요청이 가능하게 하기 위해
// useSelector => 사용 , useDispatch => 변경

import { UseSelector, useDispatch, useSelector } from "react-redux";

function App() {
  const myStoreData = useSelector((state) => state);

  return (
    <div className="App">
      <Home />
      <Cat />
      <Dog />
    </div>
  );
}

export default App;
