/* ---------------- */
/* Switch           */
/* ---------------- */

// let a = 10;
// switch(a){
//   case 10 :
//     console.log("10입니다!");
//     break;

//   case 11:
//     console.log("11입니다!");
//     break;

//   case 12:
//     console.log("12입니다!");
//     break;

//   default:
//     console.log("10, 11, 12가 없습니다!");
// }

const MORNING = '아침',
  LUNCH = '점심',
  DINNER = '저녁',
  NIGHT = '밤',
  LATE_NIGHT = '심야',
  DAWN = '새벽';

let thisTime = NIGHT;

/* 다양한 상황에 맞게 처리 --------------------------------------------------- */

// 조건 유형(case): '아침'
// '뉴스 기사 글을 읽는다.'

// 조건 유형(case): '점심'
// '자주 가는 식당에 가서 식사를 한다.'

// 조건 유형(case): '저녁'
// '동네 한바퀴를 조깅한다.'

// 조건 유형(case): '밤'
// '친구에게 전화를 걸어 수다를 떤다.'

// 조건 유형(case): '심야'
// 조건 유형(case): '새벽'
// '한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.'

switch (thisTime) {
  case MORNING:
    console.log('뉴스 기사 글을 읽는다.');
    break;

  case LUNCH:
    console.log('자주 가는 식당에 가서 식사를 한다.');
    break;

  case DINNER:
    console.log('동네 한바퀴를 조깅한다.');
    break;

  case NIGHT:
    console.log('친구에게 전화를 걸어 수다를 떤다.');
    break;

  case LATE_NIGHT:
  case DAWN:
    console.log('한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.');
    break;

  default:
    console.log('일치하는 환경이 없습니다.');
    break;
}

/* switch문 → if문 변환 --------------------------------------------------- */

if (thisTime === MORNING) {
  console.log('뉴스 기사 글을 읽는다.');
} else if (thisTime === LUNCH) {
  console.log('자주 가는 식당에 가서 식사를 한다.');
} else if (thisTime === DINNER) {
  console.log('동네 한바퀴를 조깅한다.');
} else if (thisTime === NIGHT) {
  console.log('친구에게 전화를 걸어 수다를 떤다.');
} else if (thisTime === LATE_NIGHT || thisTime === DAWN) {
  console.log('한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.');
} else {
  console.log('일치하는 환경이 없습니다.');
}

/* switch vs. if -------------------------------------------------------- */

// let num = parseInt(prompt("0~6까지의 숫자를 입력하세요"));

// switch (num) {
//   case 0:
//     console.log("일요일입니다!");
//     break;

//   case 1:
//     console.log("월요일입니다!");
//     break;

//   case 2:
//     console.log("화요일입니다!");
//     break;

//   case 3:
//     console.log("수요일입니다!");
//     break;

//   case 4:
//     console.log("목요일입니다!");
//     break;

//   case 5:
//     console.log("금요일입니다!");
//     break;

//   case 6:
//     console.log("토요일입니다!");
//     break;

//   default:
//     console.log("0~6사이 숫자가 아닙니다.");
//     break;
// }

// Seperation of concerns (관심사의 분리)
// parameter(매개변수) n
function getRandom(n) {
  let randomNum = Math.floor(Math.random() * n);
  return randomNum;
}

function getDay(randomNum) {
  switch (randomNum) {
    case 0:
      return '일';
    case 1:
      return '월';
    case 2:
      return '화';
    case 3:
      return '수';
    case 4:
      return '목';
    case 5:
      return '금';
    case 6:
      return '토';
    default:
      console.log('0~6사이 숫자가 아닙니다.');
      break;
  }
}

function weekend() {
  let today = getDay(getRandom(7));

  // if (today === '토' || today === '일') {
  //   return `오늘은 ${today}요일, 주말입니다!`;
  // } else {
  //   return `오늘은 ${today}요일, 평일입니다.`;
  // }

  // const day = today.includes('토') ? '토요일' : today.includes('일') ? '일요일' : '평일';
  // return day;
  return today.includes('토')
    ? '오늘은 토요일, 주말입니다!'
    : today.includes('일')
      ? '오늘은 일요일, 주말입니다!'
      : `오늘은 ${today}요일, 평일입니다.`;
}
