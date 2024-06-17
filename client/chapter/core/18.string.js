/* -------------------- */
/* String Type          */
/* -------------------- */

let message = 'Less is more.';


// length 프로퍼티
let stringTotalLength = message.length;
console.log('stringTotalLength: ' + stringTotalLength);


// 특정 인덱스의 글자 추출
let extractCharacter = message[5];
console.log('extractCharacter: ' + extractCharacter);


// enumable // 열거 가능한
// iterable // 반복 가능한
// immutable // 불변의
// mutable // 변경 가능한
// mutant // 돌연변이

// 문자열 중간 글자를 바꾸는 건 불가능 
// (기존 문자 변경 대신, 새로운 문자를 생성해야 함)
let immutableChangeCharacter = 'P' + message.slice(1);
console.log(immutableChangeCharacter);


// 부분 문자열 추출
let slice = message.slice(4, -1);
console.log('slice: ' + slice);

let subString = message.substring(2, 5);
console.log('subString: ' + subString);

// let subStr = message.substr();


// 문자열 포함 여부 확인
let indexOf = message.indexOf('is');
console.log('indexOf: ' + indexOf); // 없으면 음수(-1) 반환

// function checkBrowser(){
//   if(window.navigator.userAgent.toLowerCase('edg')){
//     console.log('당신은 edge를 사용하고 있습니다.')
//   }
//   else if(window.navigator.userAgent.toLowerCase('safari')){
//     console.log('당신은 safari를 사용하고 있습니다.')
//   }
//   else if(window.navigator.userAgent.toLowerCase('firefox')){
//     console.log('당신은 firefox를 사용하고 있습니다.')
//   }
//   else if(window.navigator.userAgent.toLowerCase('trident')){
//     console.log('당신은 IE를 사용하고 있습니다.')
//   }       
//   else if(window.navigator.userAgent.toLowerCase('chrome')){
//     if(window.navigator.userAgent.toLowerCase('window.chrome')){
//       console.log('당신은 chrome를 사용하고 있습니다.')
//     }
//   }
// }

function checkBrowser(){

  const agent = window.navigator.userAgent.toLowerCase();
  let browserName;

  switch(true){
    case agent.indexOf('edg') > -1 :
      browserName = 'MS Edge'
    break;
    case agent.indexOf('chrome') > -1 && !!window.chrome :
      browserName = 'Chrome'
    break;
    case agent.indexOf('safari') > -1 :
      browserName = 'Safari'
    break;
    case agent.indexOf('firefox') > -1 :
      browserName = 'Firefox'
    break;
    case agent.indexOf('trident') > -1 :
      browserName = 'IE'
    break;
    default:
      browserName = '무슨 브라우저 쓰세요..?'
  }

  return browserName

}



checkBrowser() // chrome


let lastIndexOf = message.lastIndexOf('s');
console.log("lastIndexOf: " + lastIndexOf);


let includes = message.includes('Less');
console.log("includes: " + includes);


let startsWith = message.startsWith("Less");
console.log("startsWith: " + startsWith);


let endsWith = message.endsWith("more.");
console.log("endsWith: " + endsWith);

let str = '     a     b              c  d';

// 공백 잘라내기
let trimStart = str.trimStart();
console.log("trimStart: " + trimStart);


let trimEnd = str.trimEnd();
console.log("trimEnd: " + trimEnd);


let trim = str.trim();
console.log("trim: " + trim);


const replaceAll = str.replaceAll(' ',''); // replaceAll은 앞의 값을 뒤에 값으로 만들어주는것
console.log("replaceAll: " + replaceAll);


const replace = str.replace(/\s*/g,'');
console.log("replace: " + replace);


const trimText = (str) => str.replaceAll(" ", '');

console.log(trimText(str));



// 텍스트 반복
let repeat = message.repeat(3);
console.log("repeat: " + repeat);


// 대소문자 변환
let toLowerCase = message.toLowerCase(message);
console.log("toLowerCase: " + toLowerCase);

let toUpperCase = message.toUpperCase(message);
console.log("toUpperCase: " + toUpperCase);

// 텍스트 이름 변환 유틸리티 함수
function toCamelCase(string) {
  return string.replace(/(\s|-|_)+./g, ($1) => $1.trim().replace(/(-|_)+/, '').toUpperCase())
}

function toPascalCase(string) {
  let name = toCamelCase(string);
  return name[0].toUpperCase() + name.slice(1);
}
