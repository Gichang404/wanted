export const createDebouncer = () => {
    let handler = null;

    return (value, delay, callback) => {
        if (handler) {
            clearTimeout(handler);
        }

        handler = setTimeout(() => callback(value), delay)
    };
}