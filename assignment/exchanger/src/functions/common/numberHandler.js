export const isNumber = (chr) => {
    const numberArray = Array.from({length: 10}, (_, index) => String(index));
    if (chr in numberArray) {
        return true;
    }
    return false
}

export const removeComma = (stringNumber) => {
    const number = parseFloat(stringNumber.replace(/,/g, ''));
    return number;
}

export const insertComma = (stringNumber) => {
    let number = stringNumber;
    if (stringNumber.length > 3) {
        number = removeComma(stringNumber);
    }
    
    const resultNumber = number.toLocaleString(); 
    return resultNumber;
}