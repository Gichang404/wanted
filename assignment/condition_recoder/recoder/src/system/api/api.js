const BASE_PATH = "http://localhost:5001";
const headers = {
    "Content-Type": "application/json",
};

export const getFilterCondition = async (date) => {
    const url = `${BASE_PATH}/conditions?date=${date}`
    try {
        const response = await fetch(url, {
            method: "GET",
            headers,
        })

        return response.json();
    } catch (error) {
        console.log(error);
    }
}

export const postCondition = async (date, rate) => {
    const url = `${BASE_PATH}/conditions`
    const params = {
        date,
        rate,
    }
    try {
        const response = await fetch(url, {
            method: "POST",
            headers,
            body: JSON.stringify(params),

        })

        return response.json();
    } catch (error) {
        console.log(error);
    }
}