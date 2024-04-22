import { isComma } from "./validation/currencyValidation";

export const removeZeroStart = (strNumber) => {
    const chrEnd = strNumber[strNumber.length - 1];
    const chrStart = strNumber[0];
    
    if (chrStart !== "0") {
        return strNumber;
    } else if (chrEnd === '0' && chrStart === '0') {
        return "0";
    } else {
        return chrEnd;
    }
}

export const removeComma = (strNumber) => {
    const number = parseFloat(strNumber.replace(/,/g, '')).toString();
    return number;
}

export const insertComma = (input) => {
    const resultNumber = Number(input).toLocaleString(); 
    
    return resultNumber;
}

// 
export const initialNumber = (input) => {
    let result = null;

    if (isComma(input)) {
        result = removeComma(input);
    } else {
        result = input;
    }
    
    return result;
}