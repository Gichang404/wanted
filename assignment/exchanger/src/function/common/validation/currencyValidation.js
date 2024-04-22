export const isNumber = (chr) => {
    const regex = /^\d+$/;
    const result = regex.test(chr);
    return result
}

export const isComma = (str) => {
    const regex = /,/;
    const result = regex.test(str);
    return result
}