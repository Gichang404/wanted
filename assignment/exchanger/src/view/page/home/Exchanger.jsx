import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateBaseGetData  } from "../../../system/store/slices/baseSymbol";
import { isNumber, insertComma, removeComma } from "../../../functions/common/numberHandler";
import jsonData from "../../../data/data.json"
import styled from "styled-components";

const Exchanger = () => {
    const inputRef = useRef(null);
    const { base } = useSelector((state) => state.baseSymbol);
    const [selected, setSelected] = useState("");
    const [symbols, setSymbols] = useState([]);
    const [exchangeResult, setExchangeResult] = useState(0);
    const dispatch = useDispatch();

    const setInitialization = () => {
        const symbolsArr = jsonData.symbols.filter((el) => base !== el);
        setSelected(symbolsArr[0]);
        setSymbols(symbolsArr);
    }

    useEffect(() => {
        setInitialization();
    }, []);

    const onChangeBase = async (symbol) => {
        console.log(symbol);
        // const response = await dispatch(updateBaseGetData(symbol));
        // const exchangeRate = response.json();
        // input 값 * exchangeRate 결과값 exchangeResult에 저장
    }

    // 마지막 입력 텍스트가 숫자인지 판단
    // Number(chr)의 경우 특수문자가 입력되면 error가 발생, 배열생성하여 판단하게 만듬
    
    
    const onChangeInput = (text) => {
        let resultNumber = text;
        const lately = text[text.length - 1];
        
        if(!isNumber(lately)) {
            // getDebounce Stop
            // input 아래 에러메세지 생성 
            console.log('error :: 숫자가 아님')
            return;
        }

        if (text.length > 3) {
            resultNumber = insertComma(text);
            inputRef.current.value = resultNumber;
        }
    }

    return (
        <Wrapper>
            <OptionArea>
                <div>
                    <input ref={inputRef} onChange={(e) => {
                        onChangeInput(e.target.value);
                    }}/>
                </div>
                <div>
                    <select onChange={(e) => {
                        onChangeBase(e.target.value);
                    }}>
                        {symbols.map((el, index) => {
                            return <option key={index}>{el}</option>
                        })}
                    </select>
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