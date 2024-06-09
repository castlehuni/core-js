/* ------------------- */
/* Logical Operators   */
/* ------------------- */

let a = 10;
let b = '';
let value = Boolean(b);

// 논리곱(그리고) 연산자 &&
let AandB = a && b;
console.log(AandB);

//논리 곱 할당 연산자
// a &&= b;

// 논리합(또는) 연산자 ||
let AorB = a || b;
console.log(AorB);

//논리 합 할당 연산자
a ||= b;

// 부정 연산자
let reverseValue = !value;
console.log(reverseValue);

// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy = true && ' ' && [] && { thisIsFalsy: false }; // {thisIsFalsy:false}가 출력(이것도 true임 => 객체를 생성하고 값을 넣었기 때문)

// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy = false || '' || [2, 3].length || { thisIsFalsy: false }; // [2, 3].length = 2가 정답

// let userName = prompt('누구세요?');
// if (userName?.toLowerCase() === 'admin') {
//   let checkPassword = prompt('비밀번호를 입력하세요.');
//   if (checkPassword?.toLowerCase() === 'themaster') {
//     alert('Welcome!');
//   } else if (
//     checkPassword === '' ||
//     checkPassword === null ||
//     userName.replace(/\s*/g, '') === ''
//   ) {
//     alert('취소되었습니다');
//   } else {
//     alert('인증에 실패하였습니다!');
//   }
// } else if (
//   userName === '' ||
//   userName === null ||
//   userName.replace(/\s*/g, '') === ''
// ) {
//   alert('취소되었습니다.');
// } else {
//   alert('나는 당신이 누구인지 모르겠습니다.');
// }


function login() {
  let userName = prompt('누구세요?');

  // userName이 null, undefined 일 때 => 아래코드 실행 안함
  if (userName===null || undefined ) return;

  if (userName.toLowerCase() === 'admin') {
    let checkPassword = prompt('비밀번호를 입력하세요.');
    if (checkPassword.toLowerCase() === 'themaster') {
      alert('Welcome!');
    } else if (
      checkPassword === '' ||
      checkPassword === null ||
      userName.replace(/\s*/g, '') === ''
    ) {
      alert('취소되었습니다');
    } else {
      alert('인증에 실패하였습니다!');
    }
  } else if (
    userName === '' ||
    userName === null ||
    userName.replace(/\s*/g, '') === ''
  ) {
    alert('취소되었습니다.');
  } else {
    alert('나는 당신이 누구인지 모르겠습니다.');
  }
}

login();
