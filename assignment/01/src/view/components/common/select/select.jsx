import styled from "styled-components";
import { useContext } from "react";
import { mainStore } from "../../../../system/store/store";


const Select = ({options, target}) => {
    const store = useContext(mainStore);

    const changeLower = (text) => {
        const lowwerText = text.toLowerCase();
        return lowwerText;
    }

    const onChangeOption = (e) => {
        if (target === 'state') {
            store.setState(e.target.value);
        } else {
            store.setSort(e.target.value);
        }
    }
    
    return (
        <SelectBox onChange={onChangeOption}>
            {options.map((content, index) => {
                return (
                    <option key={index}
                        value={changeLower(content)}
                    >{content}</option>
                );
            })}
        </SelectBox>
    );
}

export default Select;

const SelectBox = styled.select`
    margin: 10px;
    margin-left: 0px;
    border: none;
`;