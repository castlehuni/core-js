/* --------------------- */
/* Type Conversion       */
/* --------------------- */


/* 데이터 → 문자 ----------------------------------------------------------- */

// number
const Year = 2024;
console.log(typeof String(Year)); // 명시적 형변환

console.log(typeof (Year + '')); // 암시적 형변환

// undefined, null
let days = null;
console.log(days + '');

let friends;
console.log(friends + '');

// boolean
let isClicked = true;
console.log(String(isClicked));


/* 데이터 → 숫자 ----------------------------------------------------------- */

// undefined => NaN
let friend;
console.log(Number(friend));

// null => 0
let money = null;
console.log(Number(money));

// boolean
let isMarried = false;
console.log(Number(isMarried));

let isNotMarried = true;
console.log(Number(isNotMarried));

// string
let num = '123';
console.log(Number(num)); // 명시적 형변환
console.log(num * 1); // 암시적 형변환
console.log(num / 1);
console.log(+num);

// numeric string
const width = '125.5px';
console.log(width * 1);
console.log(parseFloat(width)); // 실수 값만 뽑아주는 함수 / 정수 값만 뽑고 싶으면 parseInt를 사용


/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''
// 위에 나열한 것 이외의 것들 
console.log(Boolean("friend"));
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean("null"));
console.log(Boolean(" "));