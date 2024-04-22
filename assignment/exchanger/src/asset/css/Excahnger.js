import styled from "styled-components";

export const Wrapper = styled.div`
    width: 600px;
    min-height: 400px;
    background-color: #1e1f22;
`;

export const Banner = styled.div`
    height: 100px;
    background-color: #4751c4;
`;

export const CurrencyArea = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0px 25px 0px 15px;
    height: 72px;
`;

export const InputArea = styled.div`
    display: flex;
    justify-content: center;
    align-items: end;
    border-bottom: 1px solid gray;

    & > input {
        all: unset;
        width: 250px;
        height: 35px;
        text-align: right;
        margin-left: 15px;
    }

    & > select {
        height: 35px;
        margin-left: 15px;
        padding: 0px 5px;
        color: #f2f3f5;
        display: flex;
        background-color: #1e1f22;
        border: none;
        outline: none;
        align-items: center;
    }

    & select::-ms-expand {
        display: none;
    }

    & select:hover {
        color: #b5bac0;
    }

    & > div {
        width: 24px;
        height: 35px;
        font-size: 30px;
        position: relative;
        bottom: 7px;
    }
`;

export const Image = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 50px;
    position: relative;
    bottom: 42px;
    background-color: #f2f3f5;
`;

export const ContentArea = styled.div`
    padding: 25px;
`;

export const Content = styled.div`
    min-height: 228px;
    background-color: #2A2D31;
    border-radius: 8px;
`

export const NavArea = styled.div`
    height: 72px;
    display: flex;
    justify-content: end;
    align-items: center;
`;

export const Nav = styled.div`
    padding: 10px;
    margin-right: 15px;
    color: ${props => props.selected === props.symbol ? "#F2F3F5" : "#949597"};
    border-radius: 5px;
    background-color: ${props => props.selected === props.symbol ? "#4E5058" : "#3C3F44"};

    &:hover {
        color: #F2F3F5;
        background-color: #4E5058;
        cursor: pointer;
    }
`;

export const CurrencyInfo = styled.div`
    min-height: 156px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Currency = styled.p`
    font-size: 24px;
`;

export const Date = styled.p`
    font-size: 14px;
`;