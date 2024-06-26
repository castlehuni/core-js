import { getNode } from "../dom/getNode.js";
import { isNumber, isObject } from './type.js'
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

