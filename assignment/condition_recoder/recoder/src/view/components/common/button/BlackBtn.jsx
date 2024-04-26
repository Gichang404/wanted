import styled from "styled-components";

const BlackBtn = ({ onClickHandler, text, params }) => {
    return <Button onClick={() => {
        onClickHandler(params);
    }}>{text}</Button>;
};

export default BlackBtn;

const Button = styled.button`
    all: unset;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2px;
    width: 60px;
    height: 30px;
    background-color: black;
    color: white;
    font-size: 16px;
    font-weight: 800;

    &:hover {
        cursor: pointer;
        background-color: gray;
    }
`;
