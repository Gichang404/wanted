import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateBaseGetData, setLatest  } from "../../../system/store/slices/currencyInfoSlice";
import { initialNumber, insertComma, removeComma, removeZeroStart } from "../../../functions/common/currencyHandler";
import { isNumber } from "../../../functions/common/validation/currencyValidation";
import styled from "styled-components";
import { createDebouncer, createTimer } from "../../../functions/utility/createDebouncer";
import { dateFormatter, filterArray } from "../../../functions/utility/utility";
import { getLatest } from "../../../system/api/api";

const Exchanger = () => {
    const inputRef = useRef(null);
    const { base, symbols, latest } = useSelector((state) => state.currencyInfo);
    const [selected, setSelected] = useState("CAD");
    const [isRefatch, setIsRefatch] = useState(false);
    const [convertCurrency, setConvertCurrency] = useState(0);
    const dispatch = useDispatch();
    const debouncer = createDebouncer();
    const timer = createTimer();

    useEffect(() => {
        console.log("Exchanger Component", latest);
        console.log("symbols :: ", symbols);
        console.log("base :: ", base);
        console.log("latest :: ", latest);
        console.log("convertCurrency", convertCurrency);
        console.log("selected", selected);
    }, [latest])

    const onChangeBase = async (symbol) => {
        dispatch(updateBaseGetData(symbol));
    }
    
    const setTimer = (time) => {
        timer(60, () => {
            setIsRefatch(true);
        });

        if (isRefatch) {
            setIsRefatch(false);
        }
    }

    // 환율 정보를 받아오고 현재 화폐기준으로 환산, 데이터 갱신 타이머 세팅
    const converter = async (currency, selectSymbol) => {
        try {
            const response = await getLatest(base, symbols);
            const { date, rates } = await response;
            const convertResult = rates[selectSymbol] * currency;

            setConvertCurrency(convertResult);
            dispatch(setLatest({ date, rates }));
            setTimer(60);
        } catch (error) {
            console.log(error);
        }
    }

    // Navigate 선택 시 해당 기준 화폐로 변환, 1분이 지났다면 데이터 갱신 후 변환, 안 지났다면 기존 state정보로 계산
    const selectedHandler = (target) => {
        const currency = Number(removeComma(inputRef.current.value));
        if (isRefatch) {
            console.log("새로운 데이터로 계산합니다.")
            converter(currency, target);
        } else {
            console.log("기존 데이터로 계산했습니다..")
            setConvertCurrency(latest.rates[target] * currency);
        }
        setSelected(target);
    }

    // input value 검증 및 debounce 이벤트 생성
    const inputValueHandler = (input) => {
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
        
        debouncer(Number(removeComma(strNumber)), selected, 0.5, converter);
    }

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
                    <select onChange={(event) => {
                        onChangeBase(event.target.value);
                    }}>
                        {symbols.map((el, index) => (
                            <option key={index}>{el}</option>
                        ))}
                    </select>
                </div>
            </OptionArea>
            <ContentArea>
                <NaviArea>
                    {symbols.map((symbol, index) => (
                        base !== symbol && 
                            <div key={index}
                                 onClick={(event) => {
                                    selectedHandler(event.target.textContent) 
                                 }}
                            >{symbol}</div>
                    ))}
                </NaviArea>
                <Content>
                    {
                        latest.date ? 
                            (
                                <>
                                    <p>{selected}: {convertCurrency}</p>
                                    <p>기준일: {dateFormatter(latest.date)}</p>
                                </>
                            ) : (<p>원하는 금액을 입력해주세요.</p>)
                    }
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