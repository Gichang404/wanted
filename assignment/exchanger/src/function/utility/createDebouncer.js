export const createDebouncer = () => {
    let handler = null;

    return (currency, selected, delay, callback) => {
        if (handler) {
            clearTimeout(handler);
        }

        handler = setTimeout(() => callback(currency, selected), delay * 1000);
    };
}

export const createTimer = () => {
    let handler = null;
    // callback();
    return (time, callback) => {
        if (handler) {
            clearTimeout(handler);
        }

        handler = setTimeout(() => callback(true), time * 1000);
    }
}