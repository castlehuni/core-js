/* ---------------------------------------------------------------------- */
/* Functions → Declaration                                                */
/* ---------------------------------------------------------------------- */

// console.log('총 합 = ', 10000 + 8900 + 1360 + 2100);
// console.log('총 합 = ', 21500 + 3200 + 9800 + 4700);
// console.log('총 합 = ', 3800 + 15200 - 500 + 80200);
// console.log('총 합 = ', 560 + 5000 + 27100 + 10200);
// console.log('총 합 = ', 9000 - 2500 + 5000 + 11900);

function getRandomValue(){
  return Math.random() > 0.5 ? 0 : 1;
}

// 함수 선언       parameter/매개변수/인자 
function calcPrice(priceA, priceB, priceC = getRandomValue(), priceD =  getRandomValue()){
  // if(priceC === undefined){ priceC = 0; }
  // if(!priceC){ priceC = 0; }
  // priceC ||= 0;
  // priceC ??= 0;
  return priceA + priceB + priceC + priceD;
}

// 함수 호출

const result = calcPrice(1000, 3000);

// 함수 값 반환

// 매개 변수

// 매개 변수 (parameter) vs. 전달 인수 (argument)

// 외부(전역 포함), 지역 변수

// 매개 변수 기본 값

// 좋은 함수 작성 여건


/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// rem(pxValue: number|string, base: number):string;
function rem(pxValue = 0, base = 16){
  if(!pxValue){
    throw new Error('rem함수의 첫번째 인수 값은 필수값입니다.');
  }
  
  let px = pxValue;
  
  if(typeof pxValue === 'string'){
    px = parseFloat(pxValue, 10);
  }
  if(typeof base === 'string'){
    base = parseFloat(base, 10);
  }

  let calRem = px / base;
  
  return `${calRem}rem`;
}

// Test Driven Development => TDD

console.assert(rem(20) === '1.25rem')
console.assert(rem('25px') === '1.5625rem')
console.assert(rem('30px',10) === '3rem')

// let rems = rem('30px', 10);


// css(node: string, prop: string, value: number|strung) : string;



function setStyle(node, prop, value){
  if(typeof node === 'string'){
    node = document.querySelector(node);
  }

  if (typeof prop !== 'string'){
    throw new Error('setStyle 함수의 두 번째 인수는 문자 타입이어야 합니다.');
  }

  if(!value){
    throw new Error('setStyle 함수의 세 번째 인수는 필수 값 입니다.');
  }
  node.style[prop] = value; // 점 표기법은 변수로 선언할 수 없으므로 []를 사용해서 설정해줘야함
}

setStyle('.first', 'color', 'blue');


function getStyle(node, prop){
  if(typeof node === 'string'){
    node = document.querySelector(node);
  }
  if(typeof prop !== "string"){
    throw new Error('getStyle 함수의 두번째 인수는 문자 타입이야만 합니다.');
  }
  return getComputedStyle(node)[prop];
}

let value = getStyle('.first', 'fontSize');


function css(node, string, value){
  // if(!value){
  //   return getStyle(node, string);
  // }
  // else{
  //   setStyle(node, string, value);
  // }

  return !value ? getStyle(node, string) : setStyle(node, string, value);
};

// const css2 = (node,prop,value) => !value ? getStyle(node,prop) : setStyle(node,prop,value);

// css2('.first','color','red') // setter

css('.first', 'color', 'red')
let values = css('.first', 'color');


// node의 값을 'h1'으로 받았을 경우 

// node가 없거나 document.ELEMENT_NODE가 아닐 경우

// prop의 값이 string이 아닐 경우

// prop의 값이 sytle 속성이 아닐 경우 

// value의 값이 number가 아닌 경우 



// 클릭 이벤트를 이용한 h1의 폰트 크기를 증가시키는 함수와 감소시키는 함수 만들기

// 1. h1,plus,minus 요소를 변수로 지정한다.
// 2. h1의 폰트 사이즈를 가져온다.
// 3. 증가함수와 감소함수를 만든다.
// 4. 클릭 이벤트와 바인딩한다.