/* -------------------- */
/* Do While Loop        */
/* -------------------- */

// let i = 0;

// do {
//   console.log(i);
//   if (i === 3) {
//     console.log('3번입니다.');
//   }
//   i++;
// } while (i < 10);

// do ~ while 문 (역순환)
// - prompt 창을 띄워 사용자로 하여금 순환 횟수를 요청
// - 사용자로부터 요청된 횟수 만큼 역방향으로 순환 출력
// - 사용자로부터 요청된 횟수가 0보다 작을 경우,
//   '최초 실행된 메시지입니다. 이 메시지는 조건이 거짓이어도 볼 수 있습니다.' 출력
// - 순환 중단

// let num = prompt('순환 횟수를 입력하세요');
// do {
//   if (num < 0) {
//     console.log(
//       '최초 실행된 메시지입니다. 이 메시지는 조건이 거짓이어도 볼 수 있습니다.'
//     );
//     break;
//   }
//   console.log(num);
//   num--;
// } while (num);

// do ~ while 문 (순환)
// - 위 do ~ while 문을 순방향으로 순환되도록 설정

// let count = 0;
// do {
//   console.log(count);
//   count++;
// } while (num--);

let first = document.querySelector('.first');
// console.log(first);

// do {
//   first = first.nextSibling;
// } while (first.nodeType !== 1);

function next(node) {
  // node가 문자일 때만 => validation(확인) 단계
  if (typeof node === 'string') {
    node = document.querySelector(node);
  }

  do {
    node = node.nextSibling;
  } while (node.nodeType !== 1);
  return node;
}

// const second = next(first);

function prev(node) {
  if (typeof node === 'string') {
    node = document.querySelector(node);
  }

  do {
    node = node.previousSibling;
  } while (node.nodeType !== 1);

  return node;
}

const prevoius = prev('.second');

