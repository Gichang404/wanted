import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateBaseGetData  } from "../../../system/store/slices/baseSymbol";
import styled from "styled-components";

const Exchanger = () => {
    const data = useSelector((state) => state.baseSymbol);
    const dispatch = useDispatch();

    // useEffect(() => {
    //     console.log(data, "start Data");
    //     dispatch(changeSelect('JPY'));
    //     console.log("use changeSelect", "HPY");
    // }, []);

    useEffect(() => {
        console.log(data, "start Data");
        dispatch(updateBaseGetData('CNY'));
        console.log("use updateBaseSymbol", "CNY");
    }, []);

    useEffect(() => {
        console.log(data);
    }, [data])

    return (
        <Wrapper>
            <OptionArea>
                <div>
                    <input />
                </div>
                <div>
                    <select></select>
                </div>
            </OptionArea>
            <ContentArea>
                <NaviArea>
                    <div>KRW</div>
                    <div>JPY</div>
                    <div>CNY</div>
                    <div>CAD</div>
                </NaviArea>
                <Content>
                    <p>KRW: 20000</p>
                    <p>기준일: 2024-04-17</p>
                </Content>
            </ContentArea>
        </Wrapper>
    );
}

export default Exchanger;

const Wrapper = styled.div`
  width: 800px;
  height: 800px;
  border: 2px solid black;
`;

const OptionArea = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 20px;

    & > div {
        width: 300px;
        height: 50px;
        border: 1px solid gray;
    }
`;

const ContentArea = styled.div`
    border: 1px solid gray;
    padding: 20px;
`;

const NaviArea = styled.div`
    display: flex;

    & > div {
        height: 25px;
        border: 1px solid black;
    }
`;

const Content = styled.div`
    width: 100%;
    height: 500px;
`;