import './App.css';
import List from './List.js';
import Add from './Add.js';
import {useState} from 'react'; 

function App() {
  const [list, setList] = useState([]);
  const props = {
    'list': list,
    'setList': setList,
  };

  return (
    <div className="App">
      <header>
        <h1>오늘 할 일</h1>
      </header>
      <main>
        <List props={props}/>
        <Add props={props}/>
      </main>
    </div>
  );
}

export default App;
