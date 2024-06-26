const ENDPOINT = 'https://jsonplaceholder.typicode.com/users';

//  [readyState]
// 0 : uninitialized
// 1 : loading
// 2 : loaded
// 3 : interactive
// 4 : complete => 성공을 의미하는 것은 아님 / 실패도 가능 (수행 완료만을 의미)
// readystatechange: 상태가 변경했을때 함수를 실행시키는 이벤트임 -> 이벤트는 1~4까지만 이벤트로 인식함

const user = {
  name: 'tiger',
  age: 40,
  gender: 'male',
} 


// const xhr = new XMLHttpRequest();

// xhr.open('POST', ENDPOINT);

// xhr.setRequestHeader('Content-Type', 'application/json');

// xhr.addEventListener('readystatechange',()=>{

//   const {readyState, status, response} = xhr;

//   if(readyState === 4){
//     if(status >= 200 && status <= 400){ // 정상적으로 받은 경우
//       console.log(response);
//     }
//     else{ // 정상적으로 받지 못한 경우
//       console.log('실패!');
//     }
//   }
// })

// xhr.send(JSON.stringify(user));

/* -------------------------------------------------------------------------- */
/*                               xhr callback 방식                            */
/* -------------------------------------------------------------------------- */

function xhr({
  method = 'GET',
  url = '',
  body = null,
  성공 = null,
  실패 = null,
  headers = {
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin':'*'
  }
}) {

  const xhr = new XMLHttpRequest();

  xhr.open(method, url);

  Object.entries(headers).forEach(([key,value])=>{
    xhr.setRequestHeader(key,value)
  })

  xhr.addEventListener('readystatechange', () => {
    const { readyState, status, response } = xhr;

    if (readyState === 4) {
      if (status >= 200 && status < 400) {
        const data = JSON.parse(response);

        성공(data); // ???
      } else {
        실패('실패!');
      }
    }
  });

  xhr.send(JSON.stringify(body));
}

// 1. 무조건 매개변수 순서에 맞게 작성 ✅
// 2. 매개변수 안쓰면?

// xhr({
//   성공(data) {
//     console.log(data);
//   },
//   body: user,
//   실패() {},
//   url: ENDPOINT,
// });

const options = {
  method: 'POST',
  url: ENDPOINT,
  body: user,
  성공() {},
  실패() {},
};

'POST', ENDPOINT, user, (data) => console.log(data), (err) => console.log(err);

// xhr(
//   'POST',
//   ENDPOINT,
//   user,
//   (data)=>{
//     console.log( data );
//    },
//   (err)=>{ 
//     console.log( err );
//   }
// )


xhr.get = (url,성공,실패) =>{
  xhr({ url, 성공, 실패 })
}



xhr.post = (url,body,성공,실패) =>{
  xhr({ 
    method:'POST',
    body,
    url, 
    성공, 
    실패
   })
}


xhr.put = (url,body,성공,실패) =>{
  xhr({ 
    method:'PUT',
    body,
    url, 
    성공, 
    실패
   })
}


xhr.delete = (url,성공,실패) =>{
  xhr({ 
    method:'DELETE',
    url, 
    성공, 
    실패
   })
}



/* -------------------------------------------------------------------------- */
/*                                     xhr Promise 방식                       */
/* -------------------------------------------------------------------------- */

const defaultOptions = {
  method:'GET',
  url: '',
  body: null,
  errorMessage:'서버와의 통신이 원활하지 않습니다.',
  headers:{
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin': '*' // CORS Error를 frontend에서 해결할 수 있는 최대한의 노력
  }
}

// enumerable => 열거 가능한 => for..of/ for..in
// iterable   => 순환 가능한 => for..of 
// immutable  => 불변의

// const arr = [1,2,3];
// const newArr = [...arr,4]

export function xhrPromise(options){

  const {method,url,body,headers,errorMessage} = {
    ...defaultOptions,
    ...options,
    headers:{
      ...defaultOptions.headers,
      ...options.headers
    }
  }

  const xhr = new XMLHttpRequest();

  xhr.open(method,url);

  Object.entries(headers).forEach(([key,value])=>{
    xhr.setRequestHeader(key,value);
  })

  xhr.send(JSON.stringify(body));

  return new Promise((resolve, reject) => {
    
    xhr.addEventListener('readystatechange',()=>{
      if(xhr.readyState === 4){
        if(xhr.status >= 200 && xhr.status < 400){
          resolve(JSON.parse(xhr.response));
        }
        else{
          reject({message:errorMessage});
        }
      }
    })
  })
}

xhrPromise({url:ENDPOINT})
.then((res)=>{
  // console.log( res );
})


xhrPromise.get = (url) => {
  return xhrPromise({ url }) // promise는 데이터를 받을 때 then으로 받아야 하는데 then으로 받으려면 프로미스 객체가 나와야 하므로 리턴해줘야함
}

xhrPromise.post = (url,body) => {
  return xhrPromise({
    url,
    body,
    method:'POST'
  })
}


xhrPromise.put = (url,body) => {
  return xhrPromise({
    url,
    body,
    method:'PUT'
  })
}


xhrPromise.delete = (url) => {
  return xhrPromise({
    url,
    method:'DELETE'
  })
}

// 위 코드 축약형
// xhrPromise.get = (url) => xhrPromise({ url })
// xhrPromise.post = (url,body) => xhrPromise({ url, body, method:'POST' })
// xhrPromise.put = (url,body) => xhrPromise({ url, body, method:'PUT' })
// xhrPromise.delete = url => xhrPromise({ url, method:'DELETE' })