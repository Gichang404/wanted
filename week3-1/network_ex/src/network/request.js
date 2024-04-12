import axios from 'axios';

// 네트워크 요청만 하는 함수를 만들겁니다

async function simpleHttpRequest(method="GET", url="/", data={}){

  let response = null;
  let baseUrl = 'http://localhost:5001';
  let requestUrl = baseUrl + url;

  // 악시오스 써서 요청할거임 
  // axios.create({
  //   baseURL: "http://localhost:5001",
  //   headers: {
  //     "Content-Type": "application/json",
  //   }
  // });

  // fetch(url, {
  //   method: method
  // })

  console.log(url);

  if(method == "GET"){
    response = await axios.get(requestUrl);
  }


  return response;
}

export default simpleHttpRequest;


// http 요청할 때 순서
// xhr 

// 1. 요청을 만들어야 함
// 2. 어떤 곳으로, 어떤 데이터랑, 어떤 방식으로 
// 3. 요청을 보내야 함
// 4. 요청에 대한 응답을 받아와야 함
// 5. 후처리 