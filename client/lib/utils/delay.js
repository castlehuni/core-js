import { getNode } from "../dom/getNode.js";
import { insertLast } from "../dom/insert.js";
import { isNumber, isObject } from './type.js'
import { xhrPromise } from "./xhr.js";

function delay(callback, timeout = 1000){
  setTimeout(callback, timeout);
}

const first = getNode('.first');
const second = getNode('.second');


// delay(()=>{ 
//   first.style.top = '-100px';
//   second.style.top = '100px';
//   delay(()=>{
//     first.style.transform = 'rotate(360deg)';
//     second.style.transform = 'rotate(-360deg)';
//     delay(()=>{
//       first.style.top = '0px';
//       second.style.top = '0px';
//     })
//   })
//  })


// const p = new Promise((r,j) => {});
// console.log(p);

// 객체 합성
const defaultOptions = {
  shouldRejected:false,
  data:'성공',
  errorMessage:'알 수 없는 오류',
  timeout:1000
}


function delayP(options) {

  let config = {...defaultOptions} // option에 숫자가 들어오게 되면 구조분해할당 자체가 안되므로 기본 옵션 먼저 구조할당 함

  if(isNumber(options)){
    config.timeout = options;
  }
  if(isObject(options)){
    config = {...defaultOptions,...options};
  }

  let {shouldRejected,data,errorMessage,timeout} = config;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!shouldRejected) {
        resolve(data);
      } else {
        reject({message:errorMessage});
      }
    }, timeout);
  });
}


delayP({
  // shouldRejected:false,
  // data:'성공',
  // errorMessage:'알 수 없는 오류',
  // timeout:1000
})

// delayP() // 프로미스 객체로 봐야 함(return해서 받아왔으므로)
//   .then((res) => {
//     console.log(res);
//     first.style.top = '-100px';
//     second.style.top = '100px';

//     return delayP();
//   })

//   .then((res) => {
//     console.log(res);
//     first.style.transform = 'rotate(360deg)';
//     second.style.transform = 'rotate(-360deg)';

//     return delayP();
//   })
//   .then((res) => {
//     first.style.top = '0px';
//     second.style.top = '0px';
//     console.log(res);
//   });

// delay(()=>{console.log('나도성공')})

// delayP()
// .then((res)=>{
//   console.log('물 넣기');
// })
// .then((res)=>{
//   console.log('스프 넣기');
//   return delayP()
// })

// .then((res)=>{
//   console.log('면 넣기');
// })

// .then((res)=>{
//   console.log('계란 넣기');
// })

// .then((res)=>{
//   console.log('완성');
// })

/* -------------------------------------------------------------------------- */
/*                                 async await                                */
/* -------------------------------------------------------------------------- */

// async 함수는 무  조  건 Promise object를 반환한다!
// await 두 가지 기능 수행
//       1. result([[PromiseResult]]) 꺼내오기
//       2. 코드 실행 흐름 제어(result가 떨어지기 전까지 다음 코드 실행 x)

async function delayA(data){
  const p = new Promise((resolve, reject)=>{
    setTimeout(() => {
      resolve('성공');
    }, 2000);
  })

  const result = await p;
  
  // console.log(result);

  return;
}

delayA()

// const data = await delayA('지연'); // top-level await

// console.log(data);

async function 라면끓이기(){

  const a = await delayP({data:'물'})
  console.log( a );

  const b = await delayP({data:'스프'});
  console.log( b );
  

  const c = await delayP({data:'면'});
  console.log( c );
  

  const d = await delayP({data:'그릇'});
  console.log( d );
  

}

// 라면끓이기()

async function getData(){
  const data = await xhrPromise.get('https://pokeapi.co/api/v2/pokemon/149');
  console.log(data.sprites.other.showdown['front_default']);

  insertLast(document.body,`<img src="${data.sprites.other.showdown['front_default']}" alt="" />`)
}

getData()