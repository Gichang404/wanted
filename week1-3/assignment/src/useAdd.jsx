import {useState} from 'react';

export const useAdd = () => {
    const [list, setList] = useState([]);

    const addList = (_ref) => {
        const value = _ref.current?.value;
        console.log(value);
        if (value && value !== "") {
            setList([...list, value]);
            _ref.current.value = '';
        }
    }

    return [list, addList];
}

