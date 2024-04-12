import { useAdd } from "./useAdd";
import {useRef} from "react";

const AddList = () => {
    const style = {
        'width' : '500px',
        'padding' : '20px',
        'marginTop' : '25px',
        'border' : '1px solid gray',
        'height' : '100px'
    }

    const [_, addList] = useAdd(); 
    const inputRef = useRef(null);

    return (
        <div style={style}>
            <input ref={inputRef}/>
            <button onClick={() => {
                addList(inputRef);
            }}>추가하기</button>
        </div>
    );
}

export default AddList;