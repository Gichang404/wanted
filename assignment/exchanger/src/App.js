import { Provider } from 'react-redux';
import './App.css';
import Exchanger from './view/page/home/Exchanger';
import store from './system/store/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Exchanger />
      </Provider>
    </div>
  );
}

export default App;
