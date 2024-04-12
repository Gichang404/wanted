import './Add.css'
import {useState} from 'react';

const Add = (props) => {
    const setList = props.props.setList;
    const list = props.props.list;
    const [content, setContent] = useState('');

    const onChange = (event) => {
        setContent(event.target.value);
    }

    const addList = () => {
        if (!content) return;
        setList([...list, content]);
        setContent('');
    }

    return (
        <section>
            <input id="todoInput" placeholder="입력하기 ..." onChange={onChange} value={content}/>
            <button onClick={addList}>추가</button>
        </section>
    );
}

export default Add;