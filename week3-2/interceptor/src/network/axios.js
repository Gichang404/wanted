// 네트워크 요청을 보내는 axios 객체를 만들기

import axios from 'axios'

// 1. 요청을 만들어야한다.
// 2. 요청에 넣을 무언가를 넣어줘야 한다. <= interceptor 만들때도 여기서 설정
const URL = 'http://localhost:5001/'
const instance = axios.create({
    baseURL: URL,
    headers: {
        "content-Type": "application/json"
    }
});

instance.interceptors.request.use((config) => {
    console.log("interceptor", config)
    const _conf = {...config, headers: {
        ...config.headers,
        "Authorization": 'test_token_123'
    }};
    console.log(_conf, 'request')
    console.log(config, 'request config도 바뀜?',)
    return config;
});

instance.interceptors.response.use((config) => {
    console.log(config, 'res');

    return config;
}, (error) => {
    // console.log('찐에러', error)

    // 에러를 만들어보자
    let my_error = new Error("에러다");

    return Promise.reject(my_error);
})

export default instance;
// 3. 요청을 보내야 한다.


// 4. 응담을 받아와야 한다.

// 5. 후처리까지 하면 끝