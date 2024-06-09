/* ---------------- */
/* Condition        */
/* ---------------- */

// let jName = prompt("자바스크립트의 공식 이름은 무엇일까요?", "이름 입력");

// if(jName === "ECMAScript"){
//   alert('정답입니다.');
// }
// else{
//   alert('모르셨나요? 정답은 ECMAScript입니다.')
// }

// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

// 영화 봤니?
// let didWatchMovie = prompt("그 영화 봤니?");

// 영화 볼거니?
// let goingToWatchMovie;

// if(didWatchMovie === "yes"){
//   console.log("그래");
// }
// else{
//   console.log("아니!");

//   let goingToWatchMovie = prompt("그 영화 볼거니?");
//   if(goingToWatchMovie === "yes"){
//     console.log("그래! 보자");
//   }
//   else{
//     console.log("아니 안볼거야!");
//   }
// }

// 영화 봤니?
function watchingMovie() {
  let didWatchMovie = confirm('그 영화 봤니?');
  if (didWatchMovie) {
    console.log('그 영화 참 재밌더라!');
  } else {
    let goingToWatchMovie = confirm('그 영화 볼꺼니?');

    if (goingToWatchMovie) {
      let withWho = prompt('누구랑 볼꺼니?');
      if (withWho === 'you') {
        console.log('사랑해');
      } else {
        console.log('왜 나랑 안 봐?');
      }
    } else {
      console.log('그래 나중에 한번 꼭 봐');
    }
  }
}

// if 문(statement)

// else 절(clause)

// else if 복수 조건 처리

// 조건부 연산자

let didWatchMovie = 'no';
let goingToWatchMovie = 'yes';

const result =
  didWatchMovie === 'yes'
    ? '그 영화 재밌더라'
    : goingToWatchMovie.includes('yes')
      ? '언제볼까? 재밌겠다'
      : '그래... 알겠어';

// 멀티 조건부 연산자 식

function render(node, isActive) {
  let template = `
    <div>${isActive ? '안녕~~!!' : '잘가~~!!'}</div>
  `;
  node.insertAdjacentHTML('beforeend', template);
}
