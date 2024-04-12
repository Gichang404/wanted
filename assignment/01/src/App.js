import {RouterProvider} from 'react-router-dom';
import router from './system/router/router';
import { DivApp } from './view/css/commons/commons';
import MainStoreProvider from './system/store/store';

function App() {
  return (
    <DivApp className="App">
      <MainStoreProvider>
        <RouterProvider router={router} />
      </MainStoreProvider>
    </DivApp>
  );
}

export default App;
