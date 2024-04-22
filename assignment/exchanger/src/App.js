import { Provider } from 'react-redux';
import Exchanger from './view/page/home/Exchanger';
import store from './system/store/store';
import styled from 'styled-components';

function App() {
  return (
    <APP>
      <Provider store={store}>
        <Exchanger />
      </Provider>
    </APP>
  );
}

export default App;

const APP = styled.div `
  min-height: 100vh;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #303338;
  color: #F2F3F5;
`