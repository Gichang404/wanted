const BASE_PATH = "http://localhost:5001";
const headers = {
    "Content-Type": "application/json",
};

export const initializedRates = async (dates) => {
    const rates = await Promise.all(
        dates.map(async (date) => {
            let data = await getFilterCondition(date).then((res) => {
                if (res.length === 0) {
                    res = [{rate: 0}]
                } 
                
                return res[0].rate;
            });
            return data
        })
    );

    
    return rates;
}

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

export const updateCondition = async (date, rate) => {
    const params = {
        date,
        rate,
    }
    
    const condition = await getFilterCondition(date);
    
    try {
        const url = `${BASE_PATH}/conditions/${condition[0].id}`
        const response = await fetch(url, {
            method: "PUT",
            headers,
            body: JSON.stringify(params),
        })

        return response.json();
    } catch (error) {
        console.log(error);
    }
}