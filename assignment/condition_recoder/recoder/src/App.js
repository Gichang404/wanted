import { RouterProvider } from "react-router-dom";
import router from "../src/system/router/router"
import styled from "styled-components";

function App() {
  return (
    <AppDiv>
      <RouterProvider router={router} />
    </AppDiv>
  );
}

export default App;

const AppDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;