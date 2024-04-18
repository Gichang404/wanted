export  const add = (num1, num2) => {
    return num1 + num2
}

export const getNumbers = async () => {
    const response = await fetch("http://localhost:5001/numbers");

    return response;
}

export const addArrayNumbers = (array) => {
    let sum = 0;
    array.map((element) => {
        sum += element
    });

    return sum;
}

// export default add