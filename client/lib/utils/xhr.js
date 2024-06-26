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

function xhrPromise(method,url,body){
  const xhr = new XMLHttpRequest();

  xhr.open(method, url);

  xhr.send(JSON.stringify(body));

  return new Promise((resolve, reject) => {
    xhr.addEventListener('readystatechange',()=>{
      if(xhr.readyState === 4){
        if(xhr.status >= 200 && xhr.status < 400){
          // 성공
          resolve(JSON.parse(xhr.response));
        }
        else{
          // 실패
          reject({message: "알 수 없는 오류"});
        }
      }
    })
  })
}

xhrPromise('GET',ENDPOINT,{name:'tiger'})
.then((res)=>{
  // console.log(res);
})


