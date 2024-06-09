/* ----------------------- */
/* Functions → Expression  */
/* ----------------------- */


function calcTotal(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

const resultX = calcTotal(10000, 8900, 1360, 2100);
const resultY = calcTotal(21500, 3200, 9800, 4700);
const resultZ = calcTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);

// 함수 선언 → 일반 함수 (표현)식
let calculateTotal = function(a, b, c, d, e, f){
  let total = 0;
  
  //for문
  // for(let i = 0; i < arguments.length; i++){
  //   total += arguments[i];
  // }

  // for...of문
  // for(let value of arguments){
  //   total += value;
  // }

  // arguments => array
  // const arr = [...arguments];
  // const arr = Array.from(arguments);
  // const arr = Array.prototype.slice.call(arguments);

  // arr.forEach(function(item){
  //   total += item;
  // })

  // const result = arr.reduce((acc, cur)=>acc + cur, 0)

  // forEach 빌려쓰기
  // Array.prototype.forEach.call(arguments,function(item){
  //  total += item;
  // })

  // 태생을 배열로 변경하기
  arguments.__proto__ = Array.prototype;
  // console.log(arguments);

  return total;
};

const result = calculateTotal(1000, 2000, 3000, 4000, 2500);

console.log(result);


const arr = ["영희", "철수", "민주"];
const arr1 = arr.map(function(item,index){
  return "멋쟁이-" + item;
})



// 익명(이름이 없는) 함수 (표현)식
let anonymousFunctionExpression = function(){};


// 유명(이름을 가진) 함수 (표현)식
let namedFunctionExpression = function hello(){};


// 콜백 함수 (표현)식
// let cb = function(isActive, success, fail){
//   if(isActive){
//     success();
//   }
//   else{
//     fail();
//   }
// };
// cb(false, function(){console.log("성공입니다.")}, function(){console.log("실패입니다.")});


function movepage(url, success, fail){
  if(url.includes('https')){
    success(url);
  }
  else{
    fail();
  }
}

movepage(
  'https://www.daum.net',
  function(url){
    console.log(`정확한 ${url}을 입력했습니다. 3초 뒤 해당 사이트로 이동합니다.`);
    // location.href = url;
  },
  function(){
    console.log('잘못된 url을 입력했습니다.');
  }
);


// 고차 함수
// function map(){
//   let result = [];

//   for(let i = 0; i < arr.length; i++){
//     console.log(i);
//   }
// }


// 함수를 인수로 받아 처리함
// 함수를 리턴함

// 함수 선언문 vs. 함수 (표현)식


// 즉시 실행 함수 (표현)식
// Immediately Invoked Function Expression
let IIFE;

// 함수가 즉시 실행되는 것을 말함
// var은 블록 스코프 : x
// var은 함수 스코프 : x

// encapsulation(캡슐화)
// module 프로그래밍 => (import, export)
const MASTER = (function (){  // parameter 자리

  let uuid = 'azxcqwASFqjKJ112314!23'
  
  return {
    getKey(){
      return uuid
    },
    setKey(value){
      uuid = value
    }
  }

})()//argument 자리




const people = [
  {
    nickName:'tiger',
    age:40
  },
  {
    nickName:'beom',
    age:45
  },
  {
    nickName: 'seon',
    age:20
  }
]

const template = people.reduce(function(htmlCode,cur){
  return htmlCode + `<div>${cur.nickName} : ${cur.age}</div>`
},'')

// document.body.insertAdjacentHTML('beforeend',template)
