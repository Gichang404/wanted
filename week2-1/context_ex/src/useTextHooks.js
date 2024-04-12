import React from "react";

export const useTextHooks = (oldText) => {
  const [text, setText] = React.useState("perl");


  React.useEffect(() => {
    console.log("aaaaa");
  }, [text]);


  return [text, setText];
}


export default useTextHooks;