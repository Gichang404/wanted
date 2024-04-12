import {useState} from 'react'

function App() {
  const [text, setText] = useState('O');
  const changeText = () => {
    if (text === 'O') {
      setText('X');
    } else {
      setText('O')
    }
  }

  return (
    <div>
      <div>{text}</div>
      <button onClick={() => {
        changeText();
      }}>button</button>
    </div>
  );
}

export default App;
