import React from "react";

import { RouterProvider } from "react-router-dom";

import { Button, Cat, Dog, Home, TextInput, TextOutput } from "./Components";
import useTextHooks from "./useTextHooks";

import logo from "./logo.svg";
import "./App.css";

import router from "./router";

// 1. 전역 상태 저장소 부터 만들어야 해!
export const CatNameStore = React.createContext();

// 2. 상태를 넣어줄 친구가 필요해!
// (상태 값을 정해주자!)

// 3. 상태를 갖다쓰면 돼!

function App() {
  const [text, setText] = useTextHooks("perl");

  const input_ref = React.useRef(null);

  const changeText = (new_text) => {
    setText(new_text);
  };

  React.useEffect(() => {}, []);

  return (
    <div className="App">
      <CatNameStore.Provider value={{text, setText}}>
        <RouterProvider router={router}></RouterProvider>
      </CatNameStore.Provider>
    </div>
  );
}

export default App;
