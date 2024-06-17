/* --------- */
/* Object    */
/* --------- */

/* global isObject */

console.log(isObject);

/* Primitives vs. Object --------- */

// key:value 쌍으로 구성된 엔티티(entity) 데이터 구조
let cssCode = /* css */ `
  .dialog {
    position: fixed;
    z-index: 10000;
    top: 50%;
    left: 50%;
    width: 60vw;
    max-width: 800px;
    height: 40vh;
    min-height: 280px;
    transform: translate(-50%, -50%);
  }
`;

// 위 CSS 스타일 코드를 JavaScript 객체로 작성해봅니다.
let cssMap = {
  postition: 'fixed',
  zIndex: 10000,
  top: '50%',
  left: '50%',
  width: '60vw',
  maxWidth: 800,
  height: '40vh',
  minHeight: 280,
  transform: 'translate(-50%, -50%)',
};

// 인증 사용자 정보를 객체로 구성해봅니다.
// 인증 사용자(authentication user)
// - 이름
// - 이메일
// - 로그인 여부
// - 유료 사용자 권한

let authUser = null;

authUser = {
  uid: 'abcdekfh-user!djskdjflewlk',
  name: 'tiger',
  email: 'abcde@email.com',
  isSignIn: false,
  permession: 'paid',
};

// 점(.) 표기법
// authUser 객체의 프로퍼티에 접근해 Console에 출력해봅니다.

// console.log(authUser.uid);
// console.log(authUser.name);
// console.log(authUser.email);
// console.log(authUser.isSignIn); // getter
// console.log((authUser.permession = 'free')); //setter

// 대괄호([]) 표기법
// 유료 사용자 권한(paid User Rights) 이름으로 프로퍼티를 재정의하고
// 대괄호 표기법을 사용해 접근 Console에 출력해봅니다.

// console.log(authUser['uid']);
// console.log(authUser['name']);
// console.log(authUser['email']);
// console.log(authUser['isSignIn']); // getter
// console.log((authUser['permession'] = 'all-pass'));

Object.prototype.nickName = '호랑이';

console.log('uid' in authUser);

for (let key in authUser) {
  if ({}.hasOwnProperty.call(authUser, key)) {
    console.log(authUser[key]);
  }
}

const keyList = Object.keys(authUser);
console.log(keyList);

const valueList = Object.values(authUser);
console.log(valueList);

function getPropertiedList(obj) {
  let result = [];

  for (let key in obj) {
    if ({}.hasOwnProperty.call(obj, key)) {
      result.push(obj[key]); // 키만 나오는 배열로 만들고 싶으면 push 안에 key만 입력
    }
  }

  return result;
}

getPropertiedList(authUser);

console.clear();

// property 제거(remove) -> 비워두기 or 삭제(delete) -> 메모리 날림
function removeProperty(obj, prop){
  if(isObject(obj)){
    obj[prop] = null;
  }
}

removeProperty(authUser,'name'); // authUser.name = null;





function deleteProperty(obj, prop){
  if(isObject(obj)){
    delete obj[prop];
  }
}



deleteProperty(authUser,'name') // undefined


// 계산된 프로퍼티 (computed property)
let calculateProperty = 'phone'; // phone | tel


function createUser(name, age, phone){
  return {
    name: name,
    age: age,
    phone: phone,
  }
}

// 프로퍼티 포함 여부 확인

// 프로퍼티 나열

// 프로퍼티 제거 or 삭제

// 단축 프로퍼티
let name = '선범';
let email = 'seonbeom2@euid.dev';
let authorization = 'Lv. 99';
let isLogin = true;


const student = {
  name,
  email,
  authorization,
  isLogin,
}

// 프로퍼티 이름 제한
// 예약어: class, if, switch, for, while, ...

// 객체가 프로퍼티를 포함하는 지 유무를 반환하는 유틸리티 함수 isEmptyObject 작성
function isEmptyObject(obj) {
  return Object.keys(obj).length === 0;
}

isEmptyObject({});

/* ------------------------------------------- */
/* 배열 구조 분해 할당  destructuring assignments   */
/* ------------------------------------------- */

// 순서(order)를 변경하지 못함, 무조건 순서대로 작성해야 함

const arr = [10, 100, 1000, 10_000];

const [a0, a1, a2, a3] = arr;
// const [a0, ...rest] = arr; // a0에만 10이 들어가고 나머지 배열 값들은 rest에 배열 형태로 저장

// const a0 = arr[0]
// const a1 = arr[1]
// const a2 = arr[2]
// const a3 = arr[3]

for(let [key, value] of Object.entries(authUser)){
  // console.log(key, value); 
}

//[[key, value], [key, value]] -> for...of가 가장 큰 대괄호를 벗겨줌

const [first, second] = document.querySelectorAll('span')


/* -------------------------------------------- */
/* 객체 구조 분해 할당  destructuring assignments    */
/* --------------------------------------------- */
// 객체는 순서는 중요하지 않음, 키와 변수명이 동일해야 함 => 변수명 변경 가능
// 기본 값 사용 가능

const salaries = {
  yujin: 95,
  jiwon: 110,
  wonyoung: 15,
  jinwoo: 300
}

const {wonyoung: w, jiwon: ji, jinwoo: jin, yujin: y, hun: h = 500} = salaries

// const yujin = salary.yujin;
// const jiwon = salary.jiwon;

console.log(h);

function creatUserObject(obj){

  const {name, age, gender, job = '홈프로텍터'} = obj; // 구조분해할당
  console.log(obj);

  return{ name, age, gender, job, } //shorthand 프로퍼티
}

const person = creatUserObject({
  name: 'hun',
  age: 26, 
  gender: 'male',
  job: 'student',
});
