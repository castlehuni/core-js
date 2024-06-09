/* ---------------- */
/* For In Loop      */
/* ---------------- */

const javaScript = {
  creator: 'Brendan Eich',
  createAt: '1995.05',
  standardName: 'ECMAScript',
  currentVersion: 2023,
};

// console.log('toString' in javaScript);

// 객체의 속성(property) 포함 여부 확인 방법
// - 모든 객체가 사용 가능하도록 속성이 확장되었을 때 포함 여부 결과는?

// 객체 자신의 속성인지 확인하는 방법
// - "자신의 속성을 가지고있는지 확인 방법"이 덮어쓰여질 수 있는 위험에 대처하는 안전한 방법은?

// console.log(javaScript.hasOwnProperty('creator'));

// 매서드 불러쓰기
// console.log(Object.prototype.hasOwnProperty.call(javaScript, 'nickName'));

// 완벽히 동일하지 않지만 비슷하게 사용가능 (위는 조상을 부른거 아래는 새로운 객체를 만들고 그 prototype을 사용하는 것)
// console.log({}.hasOwnProperty.call(javaScript, 'nickName'));

// for ~ in 문
// - 객체 자신의 속성만 순환하려면?
// - 배열 객체 순환에 사용할 경우?

//enumable: 열거할 수 있는 요소

for (let key in javaScript) {
  if (Object.prototype.hasOwnProperty.call(javaScript, key)) {
    // console.log(key);
    // console.log(javaScript[key]);
  }
}

// 순서 보장이 안됨, 성능이 저하 => for in은 객체에게 양보하자
// const tens = [10, 100, 1000, 10_000];
// for (let key in tens) {
//   console.log(tens[key]);
// }

// 속성 한 개
// Object.defineProperty(obj,'age',{
//   value:30,
//   enumerable: true,
//   writable: false,
//   configurable:true
// })

// 속성 여러 개
// Object.defineProperties(obj,{
//   age:{
//     value:30,
//     enumerable:true,
//     writable:true
//   }
// })
