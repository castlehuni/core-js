/* ---------------------- */
/* Functions → Arrow      */
/* ---------------------- */

const calculateTotal = function(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

let resultX = calculateTotal(10000, 8900, 1360, 2100);
let resultY = calculateTotal(21500, 3200, 9800, 4700);
let resultZ = calculateTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);


// 함수 선언 → 화살표 함수 (표현)식
let calcAllMoney = (...rest) => {
  let sum = 0;
  // for문
  // for(let i = 0; i < rest.length; i++){
  //   sum += rest[i];
  // }

  // for...of 문
  // for(let item of rest){
  //   sum += item;
  // }

  // forEach문
  // rest.forEach((items)=>{sum += items;})
  
  // return sum;

  // reduce
  return rest.reduce((acc, cur) => acc + cur , 0);
};

const result = calcAllMoney(1000, 5000, 4500, 13000);
console.log(result);



// 화살표 함수와 this

// 일반 함수
// - constructor 내장 O (concise method는 예외)
// - this: 나를 호출한 대상 this
// - 객체의 메서드로 더 많이 사용됨 => this를 찾기 위해

// 화살표 함수
// - constructor 내장 X
// - this: 바인딩하지 않음(this를 찾지 못함) -> 상위 컨텍스트에서 찾음
// - 메서드 안에 함수를 작성해야 할 때 많이 사용 => 내 상위 this를 가져오기 때문에

// concise method
// - constructor 내장 X
// - this: 나를 호출한 대상 this(일반함수와 동일 적용)
// - 객체의 메서드로 더 많이 사용됨 => this를 찾기 위해

const user = {
  name: "홍길동",
  total: 0,
  grades: [30, 60, 90],
  // totalGrades(){
  //   this.grades.forEach(function(item){
  //     console.log(this);
  //   },user)
  // } // arrow function이 없었을때 forEach를 사용하면 위와 같이 사용 / 뒤에 thisarg 옵션에 넣어줌 
  totalGrades(){
    this.grades.forEach((item) => {
      this.total += item;
    })
    return this.total
  }
}





/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;

// let pow = (numeric, powerCount) => {
//   let result = 1;
//   for(let i = 0; i < powerCount; i++){
//     result *= numeric;
//   }
//   return result;
// }; 

// const pow = (numeric,powerCount) => {
  
//   return Array(powerCount).fill(null).reduce((acc)=>{
//     return acc *= numeric
//   },1)

// }
const pow = (numeric, powerCount) =>  Array(powerCount).fill(null).reduce(acc => acc *= numeric, 1)

// repeat(text: string, repeatCount: number): string;

// let repeat = (text, repeatCount) => {
//   let result = '';
//   for(let i = 0; i < repeatCount; i++){
//     result += text;
//   }
//   return result;
// }; 

// const repeat = (text, repeatCount) => {
//   return Array(repeatCount).fill(null).reduce((acc) => {
//     return acc += text;
//   },'');
// }

const repeat = (text, repeatCount) => Array(repeatCount).fill(null).reduce(acc => acc += text,'');