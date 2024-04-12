import './App.css';
import React from "react";
import instance from './network/axios';
import styled from "styled-components";

function App() {
  const callApi = async () => {
    try {
      await instance.get("/usersii");
    } catch(error) {
      console.log(error);
      // 다시 한번 뭔가를 하거나,
      // 에러가 났으니 후처리
    } finally {
      // 에러가 나건 성공을 했건 무조건 실행
    }
  }

  React.useEffect(() => {
    callApi();
  }, [])

  return (
    <div className="App">
      <OutterDiv>
        <innerDiv></innerDiv>
      </OutterDiv>
    </div>
  );
}

export default App;

const OutterDiv = styled.div `
  background-color: skyblue;
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const innerDiv = styled.div `
  background-color: blue;
  width: 100px;
  height: 100px;
`;
