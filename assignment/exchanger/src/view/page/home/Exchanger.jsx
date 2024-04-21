import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateBaseGetData, setLatest  } from "../../../system/store/slices/currencyInfoSlice";
import { initialNumber, insertComma, removeZeroStart } from "../../../functions/common/currencyHandler";
import { isNumber } from "../../../functions/common/validation/currencyValidation";
// import jsonData from "../../../data/data.json"
import styled from "styled-components";
import { createDebouncer } from "../../../functions/utility/createDebouncer";
import { filterArray } from "../../../functions/utility/utility";
import { getLatest } from "../../../system/api/api";

const Exchanger = () => {
    const inputRef = useRef(null);
    const { base, symbols, latest } = useSelector((state) => state.currencyInfo);
    const [selected, setSelected] = useState("");
    const [exchangeResult, setExchangeResult] = useState(0);
    const dispatch = useDispatch();
    const debouncer = createDebouncer();

    // const getApi = async (base, symbols) => {
    //     const data = await getLatest(base,symbols);
    //     return data;
    // }

    useEffect(() => {
        const arr = filterArray(base, symbols);
        getLatest(base, arr).then((res) => {
            const { date, rates } = res;
            dispatch(setLatest({ date, rates }));
        }).catch((error) => {
                console.log(error)
            }
        );
    }, [])

    useEffect(() => {
        console.log(latest);
    }, [latest])

    const onChangeBase = async (symbol) => {
        const firstItem = filterArray(symbol, symbols)[0];
        setSelected(firstItem);
        dispatch(updateBaseGetData(symbol));
    }
    
    const test = (value) => {
        console.log(value);
    }

    function inputValueHandler(input) {
        const length = input.length;
        let strNumber = initialNumber(input);
        
        if (!isNumber(strNumber)) {
            inputRef.current.value = strNumber.slice(0, -1);
            return;
        }

        if (length === 2) {
            inputRef.current.value = removeZeroStart(strNumber);
            return;
        }
        

        if (length > 3) {
            strNumber = insertComma(strNumber);
            inputRef.current.value = strNumber;
        }
        
        debouncer(inputRef.current.value, 2000, test);
    }
    console.log("Exchanger Component", latest);
    console.log("symbols :: ", symbols);
    console.log("base :: ", base);
    console.log("latest :: ", latest);
    return (
        <Wrapper>
            <OptionArea>
                <div>
                    <input placeholder="숫자만 입력 가능합니다." ref={inputRef} 
                        onChange={(e) => {
                            inputValueHandler(e.target.value);
                        }}
                    />
                </div>
                <div>
                    <select onChange={(e) => {
                        onChangeBase(e.target.value);
                    }}>
                        {symbols.map((el, index) => (
                            <option key={index}>{el}</option>
                        ))}
                    </select>
                </div>
            </OptionArea>
            <ContentArea>
                <NaviArea>
                    {symbols.map((el, index) => (
                        base !== el && 
                            <div key={index}>{el}</div>
                    ))}
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