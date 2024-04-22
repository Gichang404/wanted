import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateBaseGetData, setLatest  } from "../../../system/store/slices/currencyInfoSlice";
import { initialNumber, insertComma, removeComma, removeZeroStart } from "../../../function/common/currencyHandler";
import { isNumber } from "../../../function/common/validation/currencyValidation";
import styled from "styled-components";
import { createDebouncer, createTimer } from "../../../function/utility/createDebouncer";
import { dateFormatter } from "../../../function/utility/utility";
import { getLatest } from "../../../system/api/api";
import ExchangerView from "./ExchangerView";

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
            const formattedCurrency = parseFloat((rates[selectSymbol] * currency).toFixed(2));

            setConvertCurrency(formattedCurrency);
            dispatch(setLatest({ date: dateFormatter(date), rates }));
            setTimer(60);
        } catch (error) {
            console.log(error);
        }
    }

    // Navigate 선택 시 해당 기준 화폐로 변환, 1분이 지났다면 데이터 갱신 후 변환, 안 지났다면 기존 state정보로 계산
    const selectedHandler = (target) => {
        if (Object.keys(latest).length === 0) {
            setSelected(target);
            return;
        }

        const currency = Number(removeComma(inputRef.current.value));
        if (isRefatch) {
            console.log("새로운 데이터로 계산합니다.")
            converter(currency, target);
        } else {
            const formattedCurrency = parseFloat((latest.rates[target] * currency).toFixed(2));
            setConvertCurrency(formattedCurrency);
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
        <ExchangerView 
            inputRef={inputRef} 
            inputValueHandler={inputValueHandler}
            onChangeBase={onChangeBase}
            symbols={symbols}
            base={base}
            selectedHandler={selectedHandler}
            latest={latest}
            selected={selected}
            convertCurrency={convertCurrency}
        />
    )
}

export default Exchanger;