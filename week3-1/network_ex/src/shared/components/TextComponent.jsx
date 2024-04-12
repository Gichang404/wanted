import React from "react";

// 얘는 뭐하는 앤데?
// 
const TextComponent = ({
  text,
  changeTextFn,
  inputType,
}) => {
  return (
    <input 
      type={inputType}
      onChange={(e) => {
        changeTextFn(e);
      }}
      value={text}
    />
  );
}

export default TextComponent;