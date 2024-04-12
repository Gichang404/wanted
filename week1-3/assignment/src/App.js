import './App.css';
import {RouterProvider} from 'react-router-dom'
import router from './router'
import AddList from './AddList'

function App() {
  return (
    <div className="App">
      <div className='Wrapper'>
        <div className='Title-box'>
          <h1 className='Title'>내 버킷리스트</h1>
        </div>
        <RouterProvider router={router}/>
      </div>
      <AddList />
    </div>
  );
}

export default App;
