const PATH = "https://api.apilayer.com/exchangerates_data";
const apikey = process.env.REACT_APP_EXCHANGERATES_DATA_API_KEY;

// base 기준으로 array의 환율 정보를 가져오는 api
export const getLatest = async (base, symbols) => {
    const requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: {
            apikey,
        }
    };

    try {
        const response = await fetch(`${PATH}/latest?symbols=${symbols}&base=${base}`, requestOptions);
        const jsonData = await response.json();
        
        return jsonData;
    } catch(error) {
        console.log(error);
    }
}