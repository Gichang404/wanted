import "./App.css";

import React from "react";

import { TextArea, Button, Input } from "./components";

function App() {
  const [text, setText] = React.useState("");
  const input_ref = React.useRef(null);
  return (
    <div className="App" style={{ display: "flex", gap: 10 }}>
      <div>
        <TextArea text={text} />
      </div>
      <div>
        <Input input_ref={input_ref} />
        <Button setText={setText} input_ref={input_ref} />
      </div>
    </div>
  );
}

export default App;
