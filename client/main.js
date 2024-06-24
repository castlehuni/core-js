
// named export(이름 내보내기)

// default export(기본 내보내기) 무조건 1개


import { attr, 
  getNode, 
  insertLast, 
  // clearContents, 
} from "./lib/index.js"; // 내보낸 함수의 이름 그대로 받아야 함

import clearContents from "./lib/dom/clearContents.js";

console.log(attr)

function phase1(){
  const first = document.querySelector('#firstNumber');
  const second = document.querySelector('#secondNumber');
  const result = getNode('.result');
  const clear = getNode('#clear');

  function handleInput(){
    const firstValue = Number(first.value); // 명시적
    const secondValue = +second.value; // 함시적

    const total = firstValue + secondValue;

    console.log(total)

    // 아래 코드가 없으면 글자를 쓸때마다 html에 바로 추가되기 때문에 계속 연결되서 나타내므로 기존의 값을 비워주기 위해 사용
    clearContents(result);

    insertLast(result, total);
  }

  function handleClear(e){
    e.preventDefault();

    clearContents(first);
    clearContents(second);
    result.textContent = "-";
  }

  first.addEventListener('input', handleInput)
  second.addEventListener('input', handleInput)
  clear.addEventListener('click', handleClear)
}

phase1();


function phase2(){
  const calculator = getNode('.calculator');
  const result = getNode('.result');
  const clear = getNode('#clear');
  const numberInputs = [...document.querySelectorAll('input:not(#clear)')]

  function handleInput(){

    const total = numberInputs.reduce((acc,cur)=> acc + Number(cur.value),0)
    
    clearContents(result);
    insertLast(result,total);
  }

  function handleClear(e){
    e.preventDefault();
    numberInputs.forEach(clearContents);
    result.textContent = '-';
  }

  calculator.addEventListener('input',handleInput);
  clear.addEventListener('click',handleClear);
}
