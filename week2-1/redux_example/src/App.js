import React from "react";
import {RouterProvider} from "react-router-dom";
import "./App.css";
import router from "../../context_ex/src/router";

export const MyStore = React.createContext();

function App() {
  const [name, setName] = React.useState('펄이');

  return (
    <div className="App">
      <MyStore.Provider value={{name, setName}}>
        <RouterProvider router={router}></RouterProvider>
      </MyStore.Provider>
    </div>
  );
}

export default App;
