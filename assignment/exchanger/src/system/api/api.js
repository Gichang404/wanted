const PATH = "https://api.apilayer.com/exchangerates_data";
const apikey = process.env.REACT_APP_EXCHANGERATES_DATA_API_KEY;

export const getLatest = async (base, symbols) => {
    console.log(typeof(base), typeof(symbols))
    console.log(base, symbols)
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