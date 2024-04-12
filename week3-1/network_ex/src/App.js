import React from "react";
import axios from "axios";
import TextComponent from "./shared/components/TextComponent";
import simpleHttpRequest from "./network/request";

function App() {
  const [loginInfo, setLoginInfo] = React.useState({
    email: "",
    password: "",
  });


  const callLoginApi = async () => {
    // const response = await axios.get("http://localhost:5001/users/0");

    const response = await simpleHttpRequest("GET", "/users/0");

    localStorage.setItem("access_token", response.data.access_token);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          margin: "0rem auto",
        }}
      >
        <h3>로그인</h3>
      </div>
      <div
        style={{
          display: "flex",
          gap: "1rem",
          flexDirection: "column",
          margin: "4rem",
        }}
      >
        <TextComponent 
          inputType={"text"}
          text={loginInfo.email}
          changeTextFn={(e) => {
            
            setLoginInfo({
              ...loginInfo,
              email: e.target.value,
            });
          }}
        />
        <TextComponent 
          inputType={"password"}
          text={loginInfo.password}
          changeTextFn={(e) => {
            
            setLoginInfo({
              ...loginInfo,
              password: e.target.value,
            });
          }}
        />
        
        <button
          onClick={async () => {
            console.log(loginInfo);
            await callLoginApi();
          }}
        >
          로그인
        </button>

      
      </div>
    </div>
  );
}

export default App;
